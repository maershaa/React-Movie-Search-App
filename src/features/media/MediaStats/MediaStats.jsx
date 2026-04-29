import { MediaRating, ReviewsCount, MovieReleaseDate } from '@/features';
import { MediaStatsWrapper, Divider } from './MediaStats.styled';
// MovieStats;
const MediaStats = ({ vote_average, vote_count, release_date }) => {
  return (
    <MediaStatsWrapper>
      <MediaRating rating={vote_average} />
      <Divider />
      <ReviewsCount count={vote_count} />
      <Divider />
      <MovieReleaseDate date={release_date} />
    </MediaStatsWrapper>
  );
};

export { MediaStats };
//
