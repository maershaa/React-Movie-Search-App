import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_TOKEN,
  },
};

const getMovieDetails = async movie_id => {
  const response = await fetch(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`,
    options
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export { getMovieDetails };
