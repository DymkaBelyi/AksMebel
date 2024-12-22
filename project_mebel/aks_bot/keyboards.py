from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton

main = ReplyKeyboardMarkup(keyboard=[[KeyboardButton(text='😉 Хотите просмотреть нашу мебель?')],
                                     [KeyboardButton(text='💬 Сообщить нам о проблеме')],
                                     [KeyboardButton(text='🖍️ Подписаться на наш Telegram')]],
                           resize_keyboard=True,
                           input_field_placeholder='Выберите один из предложенных вариантов...')

text_problem = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text='⚙️ Что-то случилось с нашей мебелью?', callback_data='t1')],
    [InlineKeyboardButton(text='🤷️ Комплектация не полная', callback_data='t2')],
    [InlineKeyboardButton(text='🙂‍↔️ Заказ не получен', callback_data='t3')],
    [InlineKeyboardButton(text='⁉️ Другой вопрос(написать нам сообщение)', callback_data='t4')]])



catalog_mebel = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text='1️⃣ Мягкая мебель', callback_data ='m1')],
    [InlineKeyboardButton(text='2️⃣ Стулья и кресла', callback_data ='m2')],
    [InlineKeyboardButton(text='3️⃣ Столы', callback_data ='m3')],
    [InlineKeyboardButton(text='4️⃣ Сад', callback_data ='m4')],
    [InlineKeyboardButton(text='5️⃣ Посуда и сервировка', callback_data ='m5')],
    [InlineKeyboardButton(text='➡ Хотите посетить наш сайт и узнать больше о нашей компании?', url="https://akshome.by/")]])


next_page = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text='Загрузить ещё', callback_data ='next')]])
