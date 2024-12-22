import psycopg2
from psycopg2 import Error
from decouple import config


def info_aks():
     try:
         # Подключиаемся к существующей базе данных
         connection = psycopg2.connect(user=config('USER'),
                                       password=config('PASSWORD'),
                                       host=config('LOCALHOST'),
                                       port=config('PORT'),
                                       database=config('NAME'),)

         cursor = connection.cursor()
         postgreSQL_select_Query = ("SELECT name, "
                                    "price_blr, "
                                    "image, "
                                    "material, "
                                    "color, "
                                    "quantity "
                                    "FROM mebel_aks_akshomemebel "
                                    "WHERE category = 3 LIMIT 10")

         cursor.execute(postgreSQL_select_Query)
         # Выбор строк из таблицы mobile с помощью cursor.fetchall"
         mobile_records = cursor.fetchall()

         # Вывод каждой строки и ее столбцов"
         for row in mobile_records:
             print("name =", row[0], "\n",
                   "price_blr =", row[1], "\n",
                   "image =", row[2], "\n",
                   "material =", row[3], "\n",
                   "color =", row[4], "\n",
                   "quantity =", row[5], "\n")

     except (Exception, Error) as error:
         print("Ошибка при работе с PostgreSQL", error)
     finally:
         pass

def main():
     info_aks()

if __name__ == '__main__':
     main()