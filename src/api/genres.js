import { API_KEY, BASE_URL } from './config.js';

// https://api.themoviedb.org/3/genre/movie/list
const getMoviesGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );

  if (!response.ok) {
    console.error('Failed to fetch genres');
    throw new Error(response.statusText);
  }

  return response.json();
};

// https://api.themoviedb.org/3/genre/tv/list
const getSeriesGenres = async () => {
  const response = await fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { getMoviesGenres, getSeriesGenres };
