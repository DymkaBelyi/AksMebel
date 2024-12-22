import requests
from bs4 import BeautifulSoup
import time, random
import psycopg2
from sqlite3 import Error

class Parser:
    database = 'Mebel',
    user = 'postgres'
    password = 'postgres'
    host = 'localhost'
    port = '5432'
    base_url = 'https://akshome.by/catalog/posuda-i-aksessuary-dlya-kukhni/'


    @staticmethod
    def get_furniture(base_url):
        akshome = []
        HEADERS = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
        }

        count = 1
        while True:
            if count > 1:
                url = base_url + '?PAGEN_1=' + str(count)
            else:
                url = base_url

            responce = requests.get(url=url, headers=HEADERS)
            soup = BeautifulSoup(responce.text, 'html.parser')

            for links in soup.find_all('a', class_='name'):
                link = f'https://akshome.by{links['href']}'
                akshome.append(link)
                r = requests.get(url=link, headers=HEADERS)
                soups = BeautifulSoup(r.text, 'html.parser')
                name = soups.find('h1').text.strip()
                akshome.append(name)
                try:
                    price = soups.find('span', class_='price').find('span', class_='price-box_value').text.strip()
                    if price != soups.find('span', class_='price').find('span', class_='price-box_value').text.strip():
                        price = soups.find('span', class_='old_price').find('span', class_='price-box_value').text.strip()
                    akshome.append(price)
                except:
                    price = 'Цену уточняйте на сайте'
                    akshome.append(price)
                img = f"https://akshome.by{soups.find('img', class_="product-image-item").get('src')}"
                akshome.append(img)
                quantity = soups.find('div', class_='specification_value availability').text.strip()
                akshome.append(quantity)
                try:
                    material = soups.select('.specification_value')[2].text.strip()
                    akshome.append(material)
                except:
                    material = ''
                    akshome.append(material)
                try:
                    color = soups.select('.specification_value')[3].text.strip()
                    akshome.append(color)
                except:
                    color = 'Наличие цветов уточняйте'
                    akshome.append(color)

                category = 5
                akshome.append(category)
                # aks_home.append(f"Название товара: {name}\nЦена товара: {price}\n{quantity}\nСсылка на мебель: {link}\n"
                #       f"Материал сиденья: {material}\nЦвет: {color}\n")

            print(count)
            time.sleep(random.choice([3, 5, 7]))
            count += 1
            if count == 13:
                break

        full_data = [tuple(akshome[i:i + 8]) for i in range(0, len(akshome), 8)]
        return full_data

    # Создаем соединение с бд postgresql
    def get_connection(self):
        try:
            connection = psycopg2.connect(database = 'Mebel',
                                          user="postgres",
                                          password="postgres",
                                          host="localhost",
                                          port="5432")

            return connection
        except Error:
            print(Error)

    # Создаем таблицу в бд postgresql
    def create_akshome(self, connection):
        cursor_object = connection.cursor()
        cursor_object.execute(
            """
                CREATE TABLE IF NOT EXISTS mebel_aks_akshomemebel
                (
                    id serial PRIMARY KEY,
                    name text,
                    category int,
                    link text,
                    price_blr text,
                    image text,
                    material text,
                    color text,
                    quantity text
                )
            """
        )
        connection.commit()


    def insert(self, connection, full_data):
        cursor = connection.cursor()
        for data in full_data:
            cursor.execute(f"INSERT INTO mebel_aks_akshomemebel (name, category, link, price_blr, image, material, color, quantity)"
                           f"VALUES ('{(data[1])}', '{data[7]}', '{data[0]}', '{data[2]}', '{data[3]}', '{data[5]}', '{data[6]}', '{data[4]}')")
        connection.commit()

    # Сохраняем данные в бд
    def save_to_postgres(self, full_data):
        connection = self.get_connection()
        self.create_akshome(connection)
        self.insert(connection, full_data)

    def run(self):
        akshome_items = self.get_furniture(Parser.base_url)
        print(akshome_items)
        connection = self.get_connection()
        self.create_akshome(connection)
        self.insert(connection, akshome_items)
        self.save_to_postgres(akshome_items)


Parser().run()



