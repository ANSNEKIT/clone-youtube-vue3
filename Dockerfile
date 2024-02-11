FROM node:20-bullseye

# создаем рабочую директорию front
WORKDIR /front

# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package*.json ./

# устанавливаем зависимости проекта
RUN npm install

# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'client')
COPY . .

# Определение переменных среды
ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

# собираем приложение для production с минификацией
RUN npm run build

EXPOSE 8080