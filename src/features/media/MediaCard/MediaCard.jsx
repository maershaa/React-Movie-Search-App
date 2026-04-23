import { MovieRating, MovieReleaseDate } from '@/features';
import { MovieItem } from './MediaCard.styled';
import { No_Poster } from '@/assets/images';
import { getImage } from '@/shared';

const MediaCard = ({ movie, openModal }) => {
  const {
    title,
    original_name,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
  } = movie;

  const poster = getImage(poster_path, 500);

  return (
    <MovieItem className="movie-card" onClick={() => openModal(movie)}>
      <div className="movie-card__poster-wrapper">
        <img
          src={poster}
          alt={title || original_name}
          className="movie-card__poster"
          loading="lazy"
          onError={e => {
            e.target.src = No_Poster; // Если картинка не загрузится, подставим заглушку
          }}
        />
      </div>

      <div className="movie-card__content">
        <h4 className="movie-card__title">{title || original_name}</h4>
        <div className="movie-card__meta">
          <MovieRating rating={vote_average} />

          <MovieReleaseDate date={release_date || first_air_date} />
        </div>
      </div>
    </MovieItem>
  );
};

export { MediaCard };
