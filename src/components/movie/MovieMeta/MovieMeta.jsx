import {
  MovieReleaseDate,
  MovieRuntime,
  MovieRevenue,
} from '@/components/movie';

const MovieMeta = ({
  release_date,
  runtime,
  revenue,
  origin_country,
  tagline,
}) => {
  return (
    <div className="movie-details__meta">
      <MovieReleaseDate date={release_date} />
      <MovieRuntime runtime={runtime} />
      <MovieRevenue revenue={revenue} />
      <p>{origin_country}</p>
      <p>{tagline}</p>
    </div>
  );
};

export { MovieMeta };
