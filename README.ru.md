# 🎬 React Movie Search App

Веб-приложение для поиска фильмов и сериалов, построенное на **React + React
Router + Vite** с использованием API **TMDB**.

🔗 **Демо:** https://maershaa.github.io/React-Movie-Search-App/

---

## 📌 О проекте

Это SPA-приложение позволяет:

- искать фильмы и сериалы
- просматривать подробную информацию
- изучать актёрский состав
- смотреть рейтинги и статистику
- переключать светлую / тёмную тему

Проект построен с акцентом на **модульную архитектуру**, переиспользуемые
компоненты и разделение бизнес-логики.

---

## 🚀 Основной функционал

- 🔎 Поиск фильмов и сериалов через TMDB API
- 🎞 Отдельные страницы фильмов и сериалов
- 👥 Актёрский состав (cast)
- ⭐ Рейтинги и статистика (популярность, доход и т.д.)
- 🌙 Тёмная / светлая тема (ThemeContext)
- 🧭 Навигация через React Router v6+
- ⚡ Lazy loading компонентов и модалок
- 🎯 Infinite scroll вместо пагинации
- 📄 Обработка 404 страницы
- 💬 Модальные окна (превью, отзывы)

---

## 🧱 Технологический стек

- React 19
- React Router DOM v7
- Vite
- TMDB API
- Emotion (CSS-in-JS)
- React Icons
- React Loader Spinner
- Context API (Theme management)
- gh-pages (деплой)

---

## 🗂 Архитектура проекта

Проект построен по feature-based архитектуре:

- `api/` — работа с TMDB API (фильмы, сериалы, жанры)
- `features/` — бизнес-логика (movies, series, cast, reviews)
- `pages/` — страницы приложения (Home, Movies, Details)
- `shared/` — UI-kit и переиспользуемые компоненты
- `context/` — глобальные состояния (Theme)
- `app/` — точка входа и роутинг
- `styles/` — глобальные стили

Такой подход позволяет:

- легко масштабировать проект
- изолировать бизнес-логику
- переиспользовать UI-компоненты

---

## 🧭 Роутинг

Используется **React Router v6+**:

- `/` — главная страница
- `/movies` — список фильмов
- `/movies/:id` — детальная страница фильма
- `/series` — список сериалов
- `/series/:id` — детальная страница сериала
- `*` — страница 404

---

## 🎨 Темизация

Реализована поддержка:

- 🌞 светлой темы
- 🌙 тёмной темы

Через **React Context API**, переключение доступно глобально во всём приложении.

---

## ⚙️ Установка и запуск

### 1. Клонирование проекта

```bash
git clone https://github.com/your-username/react-movie-search-app.git
cd react-movie-search-app
```

````

### 2. Установка зависимостей

```bash
npm install
```

### 3. Запуск dev-сервера

```bash
npm run dev
```

---

## 🏗 Сборка проекта

```bash
npm run build
```

---

## 👀 Preview production

```bash
npm run preview
```

---

## 🚀 Деплой на GitHub Pages

```bash
npm run deploy
```

---

## 📌 Скрипты

| Команда           | Описание                  |
| ----------------- | ------------------------- |
| `npm run dev`     | Запуск dev-сервера        |
| `npm run build`   | Сборка проекта            |
| `npm run preview` | Просмотр production build |
| `npm run lint`    | Проверка кода ESLint      |
| `npm run deploy`  | Деплой на GitHub Pages    |

---

## 🔥 Особенности проекта

- Feature-based архитектура
- Работа с реальным API (TMDB)
- Lazy loading страниц и модалок
- Глобальная тема (Context API)
- Чистое разделение UI / логики / API слоя
- Оптимизированная структура проекта
- Деплой на GitHub Pages

---

## 🌐 Демо

👉
[https://maershaa.github.io/React-Movie-Search-App/](https://maershaa.github.io/React-Movie-Search-App/)

---

## 📈 Возможные улучшения

- 🔎 Фильтрация по жанрам и году
- ❤️ Избранные фильмы (favorites)
- ⚡ React Query (кеширование API)
- 📱 PWA версия
- 🔐 Авторизация пользователей

---

## 📄 Лицензия

Проект создан в учебных и портфолио целях.

```

---

Если хочешь, я могу дальше улучшить это до уровня:

- README как у senior frontend dev (с архитектурной схемой)
- или добавить **диаграмму структуры проекта**
- или даже оформить как **GitHub portfolio showcase (с badges + GIF + screenshots)**
```

## 📁 Project Structure

```
react-movie-search-app/
├── .vscode/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── api/
│   │   ├── config.js
│   │   ├── genres.js
│   │   ├── index.js
│   │   ├── movies.js
│   │   └── series.js
│   ├── app/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── assets/
│   │   └── images/
│   ├── styles/
│   │   ├── index.css
│   │   └── reset.css
│   ├── components/
│   │   ├── FilterInput/
│   │   └── index.js
│   ├── context/
│   │   ├── ThemeContext/
│   │   ├── ThemeProvider/
│   │   └── index.js
│   ├── features/
│   │   ├── cast/
│   │   │   ├── CastList/
│   │   │   ├── CastListItem/
│   │   │   ├── NoCast/
│   │   │   └── index.js
│   │   ├── media/
│   │   │   ├── DetailsTabs/
│   │   │   ├── MediaCard/
│   │   │   ├── MediaCountries/
│   │   │   ├── MediaGenres/
│   │   │   ├── MediaList/
│   │   │   ├── MediaRating/
│   │   │   ├── MediaStats/
│   │   │   └── index.js
│   │   ├── movie/
│   │   │   ├── modals/
│   │   │   │   ├── MoviePreviewModal/
│   │   │   │   ├── MovieReviewModal/
│   │   │   │   └── index.js
│   │   │   ├── SearchInput/
│   │   │   └── index.js
│   │   ├── movie-details/
│   │   │   ├── MovieInfo/
│   │   │   │   ├── MovieInfo.jsx
│   │   │   │   └── MovieInfo.styled.jsx
│   │   │   ├── MovieMeta/
│   │   │   ├── MovieReleaseDate/
│   │   │   ├── MovieRevenue/
│   │   │   ├── MovieRuntime/
│   │   │   └── index.js
│   │   ├── reviews/
│   │   └── series/
│   │       ├── modals/
│   │       │   ├── SeriesPreviewModal/
│   │       │   └── index.js
│   │       ├── SeriesInfo/
│   │       ├── SeriesMeta/
│   │       └── index.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── MovieDetailsPage.jsx
│   │   ├── MoviesPage.jsx
│   │   ├── MoviesPage.styled.jsx
│   │   ├── NotFound.jsx
│   │   ├── SeriesDetailsPage.jsx
│   │   ├── SeriesPage.jsx
│   │   └── index.js
│   └── shared/
│       ├── helpers/
│       ├── hooks/
│       ├── layout/
│       │   ├── Container/
│       │   ├── ErrorMessage/
│       │   ├── Footer/
│       │   ├── Header/
│       │   ├── Loader/
│       │   ├── SharedLayout/
│       │   └── index.js
│       └── ui/
│           ├── Avatar/
│           ├── BaseModal/
│           ├── Buttons/
│           │   ├── BackButton/
│           │   │   ├── BackButton.jsx
│           │   │   └── BackButton.styles.jsx
│           │   ├── ModalCloseButton/
│           │   └── index.js
│           ├── EndMessage/
│           ├── PageTitle/
│           ├── Pagination/
│           ├── RatingStars/
│           ├── ScrollToTop/
│           ├── Skeleton/
│           │   ├── CastItemSkeleton/
│           │   ├── MediaCardsSkeleton/
│           │   ├── ReviewItemSkeleton/
│           │   └── index.js
│           └── index.js
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── REACT_ROUTING_guide.md
├── README.md
└── vite.config.js
```

---
````
