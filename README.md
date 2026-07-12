# 🎬 React Movie Search App

A single-page application for discovering movies and TV series, built with **React 19**, **React Router v7**, and **Vite**, powered by the **TMDB API**.

🇷🇺 [Читать на русском](./README.ru.md)

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://maershaa.github.io/React-Movie-Search-App/)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)

🔗 **Live Demo:** https://maershaa.github.io/React-Movie-Search-App/

---

## 📌 About

This app lets users:

- search movies and TV series in real time
- view detailed pages with ratings, genres, revenue, and runtime
- browse the cast of a title and open detailed actor profiles (bio, birth/death dates, filmography)
- explore similar titles and read user reviews
- switch between light and dark themes

The project is built around a **feature-based architecture** with a clean separation between the API layer, business logic, and reusable UI components — the goal was to keep it scalable, not just "make it work."

## 🚀 Features

- 🔎 Movie & TV search via the TMDB API
- 🎞 Dedicated detail pages for movies and series
- 👥 Cast list with detailed actor profiles (bio, filmography)
- ⭐ Ratings & stats (popularity, revenue, runtime, etc.)
- 🎯 Infinite scroll (via `IntersectionObserver`) instead of pagination
- 🌙 Light / dark theme, managed through Context API
- ⚡ Lazy-loaded pages and modals for a lighter initial bundle
- 🔝 Throttled "scroll to top" button
- 💬 Preview & review modals
- 📄 Custom 404 page

## 🧱 Tech Stack

| Category   | Tools                               |
| ---------- | ----------------------------------- |
| Core       | React 19, React Router DOM v7, Vite |
| Styling    | Emotion (CSS-in-JS)                 |
| Data       | TMDB API                            |
| UI helpers | React Icons, React Loader Spinner   |
| State      | React Context API (theme)           |
| Tooling    | ESLint, gh-pages                    |

## 🗂 Architecture

```
src/
├── api/          # TMDB API layer (movies, series, actors, genres)
├── app/          # Entry point & routing
├── context/      # Global state (theme)
├── features/     # Business logic, grouped by domain
│   ├── actor-details/
│   ├── cast/
│   ├── media/
│   ├── movie/
│   ├── movie-details/
│   ├── reviews/
│   └── series/
├── pages/        # Route-level pages
└── shared/       # Reusable UI kit, hooks, layout, helpers
```

Feature-based structure keeps each domain self-contained (its own components, styles, and logic), which makes the app easier to scale and easier to navigate for new contributors.

## 🧭 Routing

| Route         | Description    |
| ------------- | -------------- |
| `/`           | Home page      |
| `/movies`     | Movie list     |
| `/movies/:id` | Movie details  |
| `/series`     | TV series list |
| `/series/:id` | Series details |
| `/actor/:id`  | Actor profile  |
| `*`           | 404 page       |

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/React-Movie-Search-App.git
cd React-Movie-Search-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Get a free API key and a read access token from your [TMDB account settings](https://www.themoviedb.org/settings/api), then:

```bash
cp .env.example .env
```

Fill in `.env`:

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_AUTH_TOKEN=your_tmdb_read_access_token_here
```

> `.env` is git-ignored — your keys never get committed.

### 4. Run the dev server

```bash
npm run dev
```

## 🏗 Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Production build                     |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm run deploy`  | Build & deploy to GitHub Pages       |

> Note: `npm run deploy` builds locally and pushes `dist/`, so make sure your `.env` is filled in on your machine before deploying — the TMDB keys get baked into that build.

## 📈 Possible Improvements

- 🔎 Filtering by genre and release year
- ❤️ Favorites / watchlist
- ⚡ React Query for API caching
- 📱 PWA support
- 🔐 User authentication
- ✅ Unit tests for hooks and components

## 📄 License

Built for learning and portfolio purposes.
