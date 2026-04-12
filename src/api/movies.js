import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_TOKEN,
  },
};

// https://api.themoviedb.org/3/search/movie
const fetchMoviesByQuery = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&primary_release_year=2025&include_adult=true&language=en-US`,
    options
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { fetchMoviesByQuery };
