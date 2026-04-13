// https://api.themoviedb.org/3/genre/movie/list

import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_TOKEN,
  },
};

const fetchGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
    options
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { fetchGenres };
