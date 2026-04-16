import { ReviewsQty } from './ReviewsCount.styled';

const ReviewsCount = ({ count }) => {
  const safeCount = count ?? 0;

  const countQty =
    safeCount >= 1000
      ? `${(safeCount / 1000).toFixed(1).replace('.0', '')}K+`
      : safeCount;

  return (
    <ReviewsQty>
      {countQty} Review{safeCount === 1 ? '' : 's'}
    </ReviewsQty>
  );
};

export { ReviewsCount };
