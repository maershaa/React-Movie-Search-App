import { FaStar } from 'react-icons/fa';
import { RatingStarsWrapper } from './RatingStars.styled';

const RatingStars = ({ rating }) => {
  const stars = Math.round(rating / 2);

  return (
    <RatingStarsWrapper>
      {[...Array(stars)].map((__, index) => (
        <FaStar key={index} className="star-icon" />
      ))}
    </RatingStarsWrapper>
  );
};

export { RatingStars };
