### 📄 Recommended filename

**`README.en.md`**

(Если хочешь более “профи”-вариант для портфолио — можно: `README.md` оставить
английским, а русский вынести в `README.ru.md`. Но в твоём случае логично именно
`README.en.md`.)

---

## 📘 English README version

````markdown
# 🎬 React Movie Search App

A web application for searching movies and TV series, built with **React + React
Router + Vite**, using the **TMDB API**.

🔗 **Live Demo:** https://maershaa.github.io/React-Movie-Search-App/

---

## 📌 About the Project

This is a single-page application (SPA) that allows users to:

- search movies and TV series
- view detailed information about media content
- explore cast information
- check ratings and statistics
- view detailed information about actors (biography, filmography)
- switch between light and dark themes

The project is built with a strong focus on **modular architecture**, reusable
components, and clear separation of concerns.

---

## 🚀 Features

- 🔎 Search movies and TV series via TMDB API
- 🎞 Dedicated pages for movies and series
- 👥 Cast information (actors and roles)
- ⭐ Ratings and media statistics (popularity, revenue, etc.)
- 👤 Actor Profiles: Detailed actor pages featuring biographies, birth/death dates, and filmographies.
- 🌙 Light / Dark theme support (ThemeContext)
- 🧭 Client-side routing with React Router v6+
- ⚡ Lazy loading for pages and modals
- 📄 404 Not Found page handling
- 💬 Modal windows (preview, reviews)
- 🎯 Infinite scroll implemented in the project

---

## 🧱 Tech Stack

- React 19
- React Router DOM v7
- Vite
- TMDB API
- Emotion (CSS-in-JS)
- React Icons
- React Loader Spinner
- Context API (Theme management)
- gh-pages (deployment)

---

## 🗂 Project Architecture

The project follows a **feature-based architecture**:

- `api/` — TMDB API layer (movies, series, genres)
- `features/` — business logic modules (movies, series, cast, reviews, actor-details)
- `pages/` — application pages (Home, Movies, Details,ActorDetails)
- `shared/` — reusable UI components and layout system
- `context/` — global state (Theme)
- `app/` — application entry point and routing
- `styles/` — global styles

This structure provides:

- scalability
- clear separation of concerns
- reusable UI logic

---

## 🧭 Routing

The application uses **React Router v6+**:

- `/` — Home page
- `/movies` — Movies list
- `/movies/:id` — Movie details page
- `/series` — Series list
- `/series/:id` — Series details page
- `/actor/:id` — Actor information page
- `*` — 404 Not Found page

---

## 🎨 Theming

The application supports:

- 🌞 Light theme
- 🌙 Dark theme

Implemented via **React Context API**, allowing global theme switching across
the app.

---

## 🔝 Navigation: "Back to Top" Button

To enhance UX across all pages, a ScrollToTop component is implemented.

Optimization: Uses throttle (300ms) to limit the frequency of scroll event execution.

Visibility Threshold: The button appears after scrolling 800px.

Animation: Smooth scrolling behavior (behavior: 'smooth').

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-movie-search-app.git
cd react-movie-search-app
```
````

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run development server

```bash
npm run dev
```

---

## 🏗 Build project

```bash
npm run build
```

---

## 👀 Preview production build

```bash
npm run preview
```

---

## 🚀 Deploy to GitHub Pages

```bash
npm run deploy
```

---

## 📌 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build production version |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint checks        |
| `npm run deploy`  | Deploy to GitHub Pages   |

---

## 🔥 Project Highlights

- Feature-based architecture
- Real-world API integration (TMDB)
- Lazy loading optimization
- Infinite scroll implemented in the project
- Global theme system
- Clean separation of UI, logic, and API layers
- Scalable project structure
- GitHub Pages deployment

---

## 🌐 Live Demo

👉
[https://maershaa.github.io/React-Movie-Search-App/](https://maershaa.github.io/React-Movie-Search-App/)

---

## 📄 License

This project is created for learning and portfolio purposes.

```


## 📁 Project Structure

```

react-movie-search-app/
├── .vscode/
├── dist/
├── node_modules/
├── public/
├── src/
│ ├── api/
│ │ ├── config.js
│ │ ├── genres.js
│ │ ├── index.js
│ │ ├── movies.js
│ │ └── series.js
│ ├── actor.js
│ ├── app/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── assets/
│ │ └── images/
│ ├── styles/
│ │ ├── index.css
│ │ └── reset.css
│ ├── components/
│ │ ├── FilterInput/
│ │ └── index.js
│ ├── context/
│ │ ├── ThemeContext/
│ │ ├── ThemeProvider/
│ │ └── index.js
│ ├── features/
│ │ ├── cast/
│ │ │ ├── CastList/
│ │ │ ├── CastListItem/
│ │ │ ├── NoCast/
│ │ │ └── index.js
│ │ ├── media/
│ │ │ ├── DetailsTabs/
│ │ │ ├── MediaCard/
│ │ │ ├── MediaCountries/
│ │ │ ├── MediaGenres/
│ │ │ ├── MediaList/
│ │ │ ├── MediaRating/
│ │ │ ├── MediaStats/
│ │ │ └── index.js
│ │ ├── movie/
│ │ │ ├── modals/
│ │ │ │ ├── MoviePreviewModal/
│ │ │ │ ├── MovieReviewModal/
│ │ │ │ └── index.js
│ │ │ ├── SearchInput/
│ │ │ └── index.js
│ │ ├── movie-details/
│ │ │ ├── MovieInfo/
│ │ │ │ ├── MovieInfo.jsx
│ │ │ │ └── MovieInfo.styled.jsx
│ │ │ ├── MovieMeta/
│ │ │ ├── MovieReleaseDate/
│ │ │ ├── MovieRevenue/
│ │ │ ├── MovieRuntime/
│ │ │ └── index.js
│ │ ├── reviews/
│ │ └── series/
│ │ ├── modals/
│ │ │ ├── SeriesPreviewModal/
│ │ │ └── index.js
│ │ ├── SeriesInfo/
│ │ ├── SeriesMeta/
│ │ └── index.js
│ ├── actor-details/
│ │ ├── ActorInfo/
│ │ ├── ActorFilmography/
│ │ └── ...
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── MovieDetailsPage.jsx
│ │ ├── MoviesPage.jsx
│ │ ├── MoviesPage.styled.jsx
│ │ ├── NotFound.jsx
│ │ ├── SeriesDetailsPage.jsx
│ │ ├── SeriesPage.jsx
│ │ ├── ActorDetailsPage.jsx
│ │ └── index.js
│ └── shared/
│ ├── helpers/
│ ├── hooks/
│ ├── layout/
│ │ ├── Container/
│ │ ├── ErrorMessage/
│ │ ├── Footer/
│ │ ├── Header/
│ │ ├── Loader/
│ │ ├── SharedLayout/
│ │ └── index.js
│ └── ui/
│ ├── Avatar/
│ ├── BaseModal/
│ ├── Buttons/
│ │ ├── BackButton/
│ │ │ ├── BackButton.jsx
│ │ │ └── BackButton.styles.jsx
│ │ ├── ModalCloseButton/
│ │ └── index.js
│ ├── EndMessage/
│ ├── PageTitle/
│ ├── Pagination/
│ ├── RatingStars/
│ ├── ScrollToTop/
│ ├── Skeleton/
│ │ ├── CastItemSkeleton/
│ │ ├── MediaCardsSkeleton/
│ │ ├── ReviewItemSkeleton/
│ │ └── index.js
│ └── index.js
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

```

```

```
