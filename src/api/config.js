const AUTH_TOKEN = import.meta.env.VITE_TMDB_AUTH_TOKEN;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = `https://api.themoviedb.org/3`;
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

export { AUTH_TOKEN, BASE_URL, BASE_IMG_URL, API_KEY };
