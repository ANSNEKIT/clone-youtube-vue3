FROM node:20-bullseye

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package*.json ./

# устанавливаем зависимости проекта
RUN npm install

# Определение переменных среды
ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

# собираем приложение для production с минификацией
RUN npm run build

EXPOSE 8080