import { API_KEY, BASE_URL } from './config.js';

// https://api.themoviedb.org/3/movie/{movie_id}/similar

// https://api.themoviedb.org/3/tv/{series_id}/similar

const getSimilarMedia = async (movieId, mediaType) => {
  const response = await fetch(
    `${BASE_URL}/${mediaType}/${movieId}/similar?api_key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { getSimilarMedia };
