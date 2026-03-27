import { FaStar } from 'react-icons/fa';

const MovieCard = () => {
  return (
    <li className="movie-card">
      <div className="movie-card__poster-wrapper">
        <img
          src="path-to-poster.jpg"
          alt="Dune: Part Two"
          className="movie-card__poster"
        />
        <div className="movie-card__badge">HD</div>
      </div>

      <div className="movie-card__content">
        <h3 className="movie-card__title">Dune: Part Two</h3>
        <div className="movie-card__meta">
          <span className="movie-card__rating">
            <FaStar className="star-icon" /> 8.7
          </span>
          <span className="movie-card__year">2024</span>
        </div>
      </div>
    </li>
  );
};

export { MovieCard };
