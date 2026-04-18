import { MovieRuntime, MovieRevenue, MovieCountries } from '@/features';
import { MovieMetaWrapper } from './MovieMeta.styled';

const MovieMeta = ({ runtime, revenue, production_countries, tagline }) => {
  return (
    <MovieMetaWrapper>
      <MovieRuntime runtime={runtime} />
      <MovieRevenue revenue={revenue} />
      <MovieCountries countries={production_countries} />
      <p className="tagline">{tagline}</p>
    </MovieMetaWrapper>
  );
};

export { MovieMeta };
