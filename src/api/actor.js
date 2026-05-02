import { AUTH_TOKEN, API_KEY, BASE_URL } from './config.js';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: AUTH_TOKEN,
//   },
// };

// https://api.themoviedb.org/3/person/{person_id}
const getActorDetails = async (actorId) => {
  const response = await fetch(
    `${BASE_URL}/person/${actorId}?api_key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

// https://api.themoviedb.org/3/person/{person_id}/combined_credits
const getFilmography = async (actorId) => {
  const response = await fetch(
    `${BASE_URL}/person/${actorId}/combined_credits?api_key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export { getActorDetails, getFilmography };
