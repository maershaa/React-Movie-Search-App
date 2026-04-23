import { MovieRuntime, MovieRevenue, MediaCountries } from '@/features';
import { MovieMetaWrapper } from './MovieMeta.styled';

const MovieMeta = ({ runtime, revenue, production_countries, tagline }) => {
  return (
    <MovieMetaWrapper>
      <MovieRuntime runtime={runtime} />
      <MovieRevenue revenue={revenue} />
      <MediaCountries countries={production_countries} />
      <p className="tagline">{tagline}</p>
    </MovieMetaWrapper>
  );
};

export { MovieMeta };
