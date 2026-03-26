# 🎬 React Movie Search App

## 📌 Description

A multi-page movie search application built with React. The app allows users to
explore trending movies, search for films by keyword, and view detailed
information including cast and reviews.

The project uses The Movie Database (TMDB) API and demonstrates modern React
development practices such as routing, code splitting, and asynchronous data
fetching.

---

## 🚀 Features

- Multi-page navigation using React Router
- Home page with trending movies
- Movie search by keyword
- Detailed movie page with additional nested routes:
  - Cast information
  - Reviews

- Lazy loading with React.lazy and Suspense
- API integration with TMDB
- Error handling and fallback routes

---

## 🧭 Routes

- `/` — Home page (trending movies)
- `/movies` — Search movies page
- `/movies/:movieId` — Movie details page
- `/movies/:movieId/cast` — Cast information
- `/movies/:movieId/reviews` — Reviews

All unknown routes redirect to the Home page.

---

## 🛠️ Technologies Used

- React
- React Router
- JavaScript (ES6+)
- Vite
- CSS / Modules (or your styling choice)
- TMDB API

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-movie-search-app.git

# Navigate to project folder
cd react-movie-search-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🔑 API Setup

1. Register at [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Generate your API key
3. Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

---

## 📦 Code Splitting

All main routes are loaded asynchronously using `React.lazy()` and wrapped in
`<Suspense>` to improve performance and reduce initial bundle size.

---

## 📁 Project Structure (example)

```
src/
 ├── components/
 ├── pages/
 │    ├── Home.jsx
 │    ├── Movies.jsx
 │    ├── MovieDetails.jsx
 │    ├── Cast.jsx
 │    └── Reviews.jsx
 ├── services/
 │    └── api.js
 ├── App.jsx
 └── main.jsx
```

---

## 🌐 Deployment

The project can be deployed using GitHub Pages or any modern hosting platform.

---

## 📌 Notes

This project was created as a practice application to demonstrate working with
REST APIs, routing, and component-based architecture in React.

---
