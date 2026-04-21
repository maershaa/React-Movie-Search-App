import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_TOKEN,
  },
};

// https://api.themoviedb.org/3/tv/popular
const getPopularSeries = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${page}`,
    options
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { getPopularSeries };
