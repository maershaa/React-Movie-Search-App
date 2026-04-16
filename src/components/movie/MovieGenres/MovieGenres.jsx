import { GenresList } from './MovieGenres.styled';

const MovieGenres = ({ genres }) => {
  return (
    <GenresList>
      {genres.map(genre => (
        <li key={genre.id} className="genre-tag">
          <span> {genre.name}</span>
        </li>
      ))}
    </GenresList>
  );
};

export { MovieGenres };
