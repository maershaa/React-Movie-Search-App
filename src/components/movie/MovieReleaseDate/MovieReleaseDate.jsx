import { MovieYear } from './MovieReleaseDate.styled';
const MovieReleaseDate = ({ date }) => {
  if (!date) return null;

  const release_year = date.substring(0, 4);
  return <MovieYear>{release_year}</MovieYear>;
};

export { MovieReleaseDate };
