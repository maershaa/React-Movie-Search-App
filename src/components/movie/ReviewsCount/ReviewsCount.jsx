import { ReviewsQty } from './ReviewsCount.styled';
import { FaRegCommentDots } from 'react-icons/fa';

const ReviewsCount = ({ count }) => {
  const safeCount = count ?? 0;

  const countQty =
    safeCount >= 1000
      ? `${(safeCount / 1000).toFixed(1).replace('.0', '')}K+`
      : safeCount;

  return (
    <ReviewsQty>
      <FaRegCommentDots /> {countQty} Review{safeCount === 1 ? '' : 's'}
    </ReviewsQty>
  );
};

export { ReviewsCount };
