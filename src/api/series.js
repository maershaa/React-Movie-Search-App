import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_TOKEN,
  },
};

// https://api.themoviedb.org/3/tv/popular
const getPopularSeries = async () => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}`,
    options
  );

  if (!response.ok) {
    console.error('Failed to fetch popular series');
    throw new Error(response.statusText);
  }

  return response.json();
};

export { getPopularSeries };
