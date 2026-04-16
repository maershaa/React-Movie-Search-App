import {
  MovieRating,
  ReviewsCount,
  MovieReleaseDate,
} from '@/components/movie';
import { MovieStatsWrapper, Divider } from './MovieStats.styled';

const MovieStats = ({ vote_average, vote_count, release_date }) => {
  return (
    <MovieStatsWrapper>
      <MovieRating rating={vote_average} />
      <Divider />
      <ReviewsCount count={vote_count} />
      <Divider />
      <MovieReleaseDate date={release_date} />
    </MovieStatsWrapper>
  );
};

export { MovieStats };
//
