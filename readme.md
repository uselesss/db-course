## Простейший REST backend на Node.js с использованием ORM Sequelize

Установка и Запуск:
- Установить node.js на устройство
- Склонировать этот репозиторий
- Перейти в папку с репозиторием
- Установка зависимостей `npm install`
- Переименовать конфигурационный файл `.env.example` в `.env` и настроить переменные окружения
- Запуск приложения `npm run dev`

---
## Переменные окружения:
PORT - Порт, на котором запускается приложение (несли не указан - запускается на порте 5000) 
DB_NAME - Название базы данных  
DB_USER - Логин от базы данных  
DB_PASSWORD - Пароль от базы данных  
DB_HOST - ip-адрес базы данных  
DB_PORT - порт базы данных  

---
Обращение к приложению
GET АДРЕС_ПРИЛОЖЕНИЯ:ПОРТ_ПРИЛОЖЕНИЯ/doc - Swagger (интерктиваня документация)
GET АДРЕС_ПРИЛОЖЕНИЯ:ПОРТ_ПРИЛОЖЕНИЯ/api/saying - получение пословицы (без параметров - случайная, /api/saying?uuid=c8e15954 - поучение по uuid)

---
Доступные команды (из package.json):
- npm run dev - запуск приложения
- npm run swagger - генерация документации swagger
