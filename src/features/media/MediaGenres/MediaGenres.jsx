import { GenresList } from './MediaGenres.styled';

const MediaGenres = ({ genres }) => {
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

export { MediaGenres };
