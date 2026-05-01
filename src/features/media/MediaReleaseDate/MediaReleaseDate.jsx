import { MovieYear } from './MediaReleaseDate.styled';
const MediaReleaseDate = ({ date }) => {
  if (!date) return null;

  const release_year = date.substring(0, 4);
  return <MovieYear>{release_year}</MovieYear>;
};

export { MediaReleaseDate };
