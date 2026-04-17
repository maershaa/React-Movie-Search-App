import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';
//https://api.themoviedb.org/3/movie/{movie_id}

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

  const data = response.json();
  return data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
const getMovieReviews = async movie_id => {
  const response = await fetch(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`,
    options
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = response.json();
  return data;
};
export { getMovieDetails, getMovieReviews };
