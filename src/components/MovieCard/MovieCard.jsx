import { FaStar } from 'react-icons/fa';
import { MovieItem } from './MovieCard.styled';
import { No_Poster } from '@/assets/images';
import { BASE_IMG_URL } from '@/api/config';

const MovieCard = ({ movie, openModal }) => {
  const { title, poster_path, vote_average, release_date } = movie;

  return (
    <MovieItem className="movie-card" onClick={() => openModal(movie)}>
      <div className="movie-card__poster-wrapper">
        <img
          src={poster_path ? `${BASE_IMG_URL}w300/${poster_path}` : No_Poster}
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
            <FaStar className="star-icon" /> {vote_average.toFixed(1)}
          </p>
          <p className="movie-card__year">{release_date.substring(0, 4)}</p>
        </div>
      </div>
    </MovieItem>
  );
};

export { MovieCard };
