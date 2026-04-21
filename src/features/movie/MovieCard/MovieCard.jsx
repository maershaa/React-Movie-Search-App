import { MovieRating, MovieReleaseDate } from '@/features';
import { MovieItem } from './MovieCard.styled';
import { No_Poster } from '@/assets/images';
import { BASE_IMG_URL } from '@/api/config';

const MovieCard = ({ movie, openModal }) => {
  const { title, poster_path, vote_average, release_date, first_air_date } =
    movie;

  return (
    <MovieItem className="movie-card" onClick={() => openModal(movie)}>
      <div className="movie-card__poster-wrapper">
        <img
          src={poster_path ? `${BASE_IMG_URL}w500${poster_path}` : No_Poster}
          alt={title}
          className="movie-card__poster"
          loading="lazy"
          onError={e => {
            e.target.src = No_Poster; // Если картинка не загрузится, подставим заглушку
          }}
        />
      </div>

      <div className="movie-card__content">
        <h4 className="movie-card__title">{title}</h4>
        <div className="movie-card__meta">
          <MovieRating rating={vote_average} />

          <MovieReleaseDate
            date={release_date ? release_date : first_air_date}
          />
        </div>
      </div>
    </MovieItem>
  );
};

export { MovieCard };
