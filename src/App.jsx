import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '@/components';

const HomePage = lazy(() => import('@/pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('@/pages/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() => import('@/pages/MovieDetailsPage.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

const CastList = lazy(
  () => import('@/features/movie-details/CastList/CastList')
);
const ReviewList = lazy(
  () => import('@/features/movie-details/ReviewList/ReviewList')
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        {/* Индексный маршрут - маршрут по умолчанию внутри родителя, без `path` */}
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="movies/:id" element={<MovieDetailsPage />}>
          {/* Вложенный маршрут то есть - путь `cast` = `/movies/:id/cast` */}
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<ReviewList />} />
        </Route>
      </Route>

      {/* 404 NotFound находится вне SharedLayout. Это грамотно, если ты хочешь, чтобы на странице 404 не было стандартной шапки и футера (чистый экран ошибки).*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
