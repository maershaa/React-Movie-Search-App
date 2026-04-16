import { MovieRuntime, MovieRevenue, MovieCountries } from '@/components/movie';
import { MovieMetaWrapper } from './MovieMeta.styled';

const MovieMeta = ({ runtime, revenue, production_countries, tagline }) => {
  console.log(production_countries);
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
