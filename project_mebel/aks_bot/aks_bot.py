from aiogram import Bot, Dispatcher
import asyncio
from decouple import config

from AksMebel.project_mebel.aks_bot.handlers import router

async def main():
    bot = Bot(config('TOKEN'))
    dp = Dispatcher()
    dp.include_router(router)
    await dp.start_polling(bot)




if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print('Бот выключен')