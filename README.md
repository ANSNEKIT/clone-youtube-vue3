# Vue 3 + TypeScript + Vite

Клон ютуба. Проект создан на Vue 3 + Vite 3 + TypeScript  + Tailwind CSS + Jest


[Ссылка на демо](https://clone-youtube-vue3-ansnekit.amvera.io/)


## Особенности

- Composition API
- Базовые компоненты покрыты Unit и Snapshot тестами
- Использованы типы Typecsript
- Сложная логика компонентов вынесена в функции composables для сохранения чистоты кода
- События resize обернуты в throttle функцию
- CSS Анимации открытия/закрытия модальных окон, мобильного сайдбара, выпадающих списков, тултипа

## Верстка

Создана валидная, адаптивная, кроссбраузерная, доступная верстка главной страницы. Все элементы проработаны. Каждый кликабельный элемент выделяется при фокусе


## Компоненты приложения

### Сайдбар

- Реализован мобильный сайдбар, мини сайдбар и стандартный сайдбар
- Состояния сайдбара контролируется через Vuex
- Сайдбар меняется по нажатию на кнопку гамбургер в хедере, а так же при изменении ширины окна браузера.
- Мобильный сайдбар закрывается по нажатию ESC

### Поиск

- Реализован мобильный поиск и стандартный
- Поиск реагирует на изменение ширины окна браузера. На мобильных экранах по нажатию на икоку поиска включается мобильный поиск
- Для запроса "**javascript**" доступны результаты поиска. Результаты поиска обновляются в соответветствии с поисковым запросом
- Доступна навигация по результатам поиска по нажатию клавиш "Вверх", "Вниз" на клавиатуре. По нажатию на "Enter" выбирается запрос. По нажатию на "Esc" результаты скрываются
- Выбранный поисковый запрос сохраняется при переключении между мобильным поиском и стандартным

### Модальное окно голосового поиска

- Реализована кнопка микрофона с несколькими состояними. Выключена, режим прослушивания, режим записи
- По истечении 5 сек микрофон отключается автоматически
- Модальное окно закрывается по нажатию на крестик, по клику вне окна и по нажатию "Esc"

### Модальное окно жалобы на поисковые результаты

- В форме появляются только доступные для текущего поискового запроса результаты. 
- Реализована текстовая область со счетчиком введенных символов и максимальным ограничением ввода
- Если в форме ничего не выбрано, кнопка "Отправить" недоступна
- Модальное окно закрывается по клику вне окна и по нажатию "Esc"

### Выпадающий список настроек

- Реализовано меню и подменю для некоторых пунктов
- При смене настройки в подменю, в главном меню результат тоже сохраняется
- Результат выбора настроек сохраняется в Vuex
- закрытие списка по клику вне окна и по нажатию "Esc"

### Выпадающий список настроек для карточки видео
- Выпадающий список расчитывает свое положение для открытия
- Выпадающий список меняет положение при изменении размеров браузера
- закрытие списка по клику вне окна и по нажатию "Esc"

### Список категорий
- Закреплен на странице
- Прокрутка тегов по нажатию на кнопки вправо/влево.
- Логика появления и скрытия кнопок
- Расчет количества кликов вправо/влево, в зависимости от количества категорий

---
### Node - 20.11.0

### Vite - 3

### NPM - 8.19.2
---
## Запуск и сборка проекта

Установка зависимостей

`npm i`

Запуск dev сервера

`npm run dev`

Запуск build

`npm run build`

Запуск lint

`npm run lint`