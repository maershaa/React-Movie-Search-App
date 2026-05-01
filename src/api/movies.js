import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_TOKEN,
  },
};
const getTrendingMovies = async (page = 1) => {
  const queryParams = `api_key=${API_KEY}&page=${page}`;

  const response = await fetch(
    `${BASE_URL}/trending/movie/week?${queryParams}`,
    options,
  );

  if (!response.ok) {
    console.error('Failed to fetch trending movies');
    throw new Error(response.statusText);
  }

  return response.json();
};

// https://api.themoviedb.org/3/movie/top_rated
const getTopRatedMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    options,
  );

  if (!response.ok) {
    console.error('Failed to fetch top rated movies');
    throw new Error(response.statusText);
  }

  return response.json();
};

// https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits&api_key=${API_KEY} -объеденено с запросом на список актеров. я не использую!
const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    options,
  );

  if (!response.ok) {
    console.error('Failed to fetch movie details');
    throw new Error(response.statusText);
  }

  return response.json();
};

// https://api.themoviedb.org/3/search/movie
const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&primary_release_year=2025&language=en-US`,
    options,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const getMovieReviews = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
    options,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = response.json();
  return data;
};

const getMovieCast = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export {
  getTrendingMovies,
  getMovieDetails,
  getTopRatedMovies,
  searchMovies,
  getMovieReviews,
  getMovieCast,
};
