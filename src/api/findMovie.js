import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: AUTH_TOKEN,
  },
};

const FindMovieDetails = id => {
  const response = fetch(
    `${BASE_URL}/find/${id}?api_key=${API_KEY}&external_source=imdb_id&language=en-US`,
    options
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { FindMovieDetails };
