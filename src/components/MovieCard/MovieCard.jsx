import { FaStar } from 'react-icons/fa';
import { MovieItem } from './MovieCard.styled';
import { No_Poster } from '@/assets/images';

const MovieCard = movie => {
  console.log('🚀 ~ MovieCard ~ movie:', movie);
  const { title, poster, rating, release_year } = movie;

  return (
    <MovieItem className="movie-card">
      <div className="movie-card__poster-wrapper">
        <img
          src={poster}
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
          <p className="movie-card__rating">
            <FaStar className="star-icon" /> {rating}
          </p>
          <p className="movie-card__year">{release_year}</p>
        </div>
      </div>
    </MovieItem>
  );
};

export { MovieCard };
