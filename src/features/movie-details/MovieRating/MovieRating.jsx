import { RatingBadge } from './MovieRating.styled';
import { FaStar } from 'react-icons/fa';

const MovieRating = ({ rating }) => {
  return (
    <RatingBadge>
      <FaStar className="star-icon" />
      <span>{rating.toFixed(1)}</span>
    </RatingBadge>
  );
};
export { MovieRating };
