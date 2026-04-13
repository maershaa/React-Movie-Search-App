import { MovieRating, ReviewsCount } from '@/components/movie';

const MovieStats = ({ vote_average, vote_count }) => {
  return (
    <div>
      <MovieRating rating={vote_average} />
      <ReviewsCount count={vote_count} />
    </div>
  );
};

export { MovieStats };
