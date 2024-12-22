from aiogram.types import Message, CallbackQuery
from aiogram import F, Router
from aiogram.filters import CommandStart, Command

from AksMebel.project_mebel.aks_bot.database.requests import mebel_aks
import AksMebel.project_mebel.aks_bot.keyboards as kb

router = Router()

@router.message(CommandStart())
async def cmd_start(message: Message):
    await message.answer(text=f'😃 Приветствуем вас {message.from_user.full_name} в нашем телеграм боте 👋', reply_markup=kb.main)

@router.message(Command('help'))
async def cmd_help(message: Message):
    await message.answer('⚙️ Вы нажали на кнопку помощи')

@router.message(F.text == '💬 Сообщить нам о проблеме')
async def text_problem(message: Message):
    await message.answer('🛠 Выберите какая проблема у вас произошла', reply_markup=kb.text_problem)

@router.message(F.text == '😉 Хотите просмотреть нашу мебель?')
async def catalog_mebel(message: Message):
    await message.answer('✅ Выберите какую категорию нашей мебели хотите посмотреть', reply_markup = kb.catalog_mebel)

@router.message(F.text == '🖍️ Подписаться на наш Telegram')
async def myagkay_mebel(message: Message):
    await message.answer('Вы подписаны на наш канал')

@router.callback_query(F.data == 'm1')
async def m_mebel_call(callback: CallbackQuery):
    for row in mebel_aks(1):
        text = (f"<b>Изображение:</b> {row[2]} \n"
                f"<b>Название товара:</b> {row[0]} \n"
                f"<b>💸 Цена товара:</b> {row[1]} \n"
                f"<b>Цвет товара:</b> {row[3]} \n"
                f"<b>Материал товара:</b> {row[4]} \n"
                f"<b>Количество:</b> {row[5]} \n")
        await callback.answer()
        await callback.message.answer(text = text, reply_markup = kb.next_page, parse_mode="HTML")

@router.callback_query(F.data == 'm2')
async def m_mebel_call2(callback: CallbackQuery):
    for row in mebel_aks(2):
        text = (f"<b>Изображение:</b> {row[2]} \n"
                f"<b>Название товара:</b> {row[0]} \n"
                f"<b>💸 Цена товара:</b> {row[1]} \n"
                f"<b>Цвет товара:</b> {row[3]} \n"
                f"<b>Материал товара:</b> {row[4]} \n"
                f"<b>Количество:</b> {row[5]} \n")
        await callback.answer()
        await callback.message.answer(text = text, reply_markup = kb.next_page,parse_mode="HTML")

@router.callback_query(F.data == 'm3')
async def m_mebel_call3(callback: CallbackQuery):
    for row in mebel_aks(3):
        text = (f"<b>Изображение:</b> {row[2]} \n"
                f"<b>Название товара:</b> {row[0]} \n"
                f"<b>💸 Цена товара:</b> {row[1]} \n"
                f"<b>Цвет товара:</b> {row[3]} \n"
                f"<b>Материал товара:</b> {row[4]} \n"
                f"<b>Количество:</b> {row[5]} \n")
        await callback.answer()
        await callback.message.answer(text = text, reply_markup = kb.next_page, parse_mode="HTML")

@router.callback_query(F.data == 'm4')
async def m_mebel_call4(callback: CallbackQuery):
    for row in mebel_aks(4):
        text = (f"<b>Изображение:</b> {row[2]} \n"
                f"<b>Название товара:</b> {row[0]} \n"
                f"<b>💸 Цена товара:</b> {row[1]} \n"
                f"<b>Цвет товара:</b> {row[3]} \n"
                f"<b>Материал товара:</b> {row[4]} \n"
                f"<b>Количество:</b> {row[5]} \n")
        await callback.answer()
        await callback.message.answer(text = text, reply_markup = kb.next_page, parse_mode="HTML")

@router.callback_query(F.data == 'm5')
async def m_mebel_call5(callback: CallbackQuery):
    for row in mebel_aks(5):
        text = (f"<b>Изображение:</b> {row[2]} \n"
                f"<b>Название товара:</b> {row[0]} \n"
                f"<b>💸 Цена товара:</b> {row[1]} \n"
                f"<b>Цвет товара:</b> {row[3]} \n"
                f"<b>Материал товара:</b> {row[4]} \n"
                f"<b>Количество:</b> {row[5]} \n")
        await callback.answer()
        await callback.message.answer(text = text, reply_markup = kb.next_page, parse_mode="HTML")

# @router.callback_query(F.data == 'next')
# async def m_mebel_call11(callback: CallbackQuery):
#     for row in mebel_aks_next(1):
#         text = (f"<b>Изображение:</b> {row[2]} \n"
#                 f"<b>Название товара:</b> {row[0]} \n"
#                 f"<b>💸 Цена товара:</b> {row[1]} \n"
#                 f"<b>Цвет товара:</b> {row[3]} \n"
#                 f"<b>Материал товара:</b> {row[4]} \n"
#                 f"<b>Количество:</b> {row[5]} \n")
#         await callback.answer()
#         await callback.message.answer(text = text, reply_markup = kb.next_page, parse_mode="HTML")
