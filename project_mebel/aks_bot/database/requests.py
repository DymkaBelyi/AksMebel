import psycopg2

from AksMebel.project_mebel.aks_bot.database.config import USER, PASSWORD, LOCALHOST, DATABASE, PORT

# Запрос означает,что мы берем следующий десять значений начиная с 10
# SELECT name,
# price_blr,
# image,
# color,
# material,
# quantity
# FROM mebel_aks_akshomemebel
# WHERE category = 4 OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY
def mebel_aks(category):
    # Подключаемся к существующей базе данных
    connection = psycopg2.connect(user=USER,
                                  password=PASSWORD,
                                  host=LOCALHOST,
                                  port=PORT,
                                  database=DATABASE)

    cursor = connection.cursor()
    postgreSQL_select_Query = (f"SELECT name, price_blr, image, color, material, quantity FROM mebel_aks_akshomemebel WHERE category = {category} LIMIT 10")

    cursor.execute(postgreSQL_select_Query)
    # Выбор строк из таблицы mobile с помощью cursor.fetchall"
    mobile_records = cursor.fetchall()
    return mobile_records

# def mebel_aks_next(category):
#     # Подключаемся к существующей базе данных
#     connection = psycopg2.connect(user=USER,
#                                   password=PASSWORD,
#                                   host=LOCALHOST,
#                                   port=PORT,
#                                   database=DATABASE)
#
#     cursor = connection.cursor()
#     postgreSQL_select_Query = (f"SELECT name, price_blr, image, color, material, quantity FROM mebel_aks_akshomemebel WHERE category = {category} OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY")
#
#     cursor.execute(postgreSQL_select_Query)
#     # Выбор строк из таблицы mobile с помощью cursor.fetchall"
#     mobile_records = cursor.fetchall()
#     return mobile_records
