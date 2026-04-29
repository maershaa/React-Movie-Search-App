import { RatingBadge } from './MediaRating.styled';
import { FaStar } from 'react-icons/fa';

const MediaRating = ({ rating }) => {
  return (
    <RatingBadge>
      <FaStar className="star-icon" />
      <span>{rating.toFixed(1)}</span>
    </RatingBadge>
  );
};
export { MediaRating };
