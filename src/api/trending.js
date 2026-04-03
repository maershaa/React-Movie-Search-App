import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_TOKEN,
  },
};

const getTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
    options
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

// getMovieDetails;
// getMovieReviews;

export { getTrendingMovies };
