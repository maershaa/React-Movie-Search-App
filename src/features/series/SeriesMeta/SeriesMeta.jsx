import { MediaCountries } from '@/features';
import { SeriesMetaWrapper, Divider } from './SeriesMeta.styled';

const SeriesMeta = ({ seasons, episodes, countries, tagline }) => {
  return (
    <SeriesMetaWrapper>
      <div className="meta__main">
        <div className="meta__item">
          <span className="details__value">{seasons} </span>
          <span className="details__label"> seasons</span>
        </div>
        <Divider />
        <div className="meta__item">
          <span className="details__value">{episodes} </span>
          <span className="details__label">episodes</span>
        </div>
      </div>

      <MediaCountries countries={countries} />
      <p className="tagline">{tagline}</p>
    </SeriesMetaWrapper>
  );
};

export { SeriesMeta };
