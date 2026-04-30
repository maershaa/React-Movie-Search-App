import { InfoSection, DetailsContent, Hero } from './SeriesInfo.styled';
import { SeriesMeta, MediaStats, MediaGenres } from '@/features';
import { Container, BackButtonComponent, getImage, getBgImage } from '@/shared';

const SeriesInfo = ({ seriesItem }) => {
  const {
    backdrop_path,
    poster_path,
    name,
    number_of_seasons,
    number_of_episodes,
    vote_average,
    vote_count,
    overview,
    first_air_date,
    production_countries,
    tagline,
    genres,
  } = seriesItem;

  const bgPoster = getImage(backdrop_path, 1280);
  const poster = getBgImage(poster_path, 500);

  return (
    <InfoSection>
      <Hero style={{ backgroundImage: `url(${bgPoster})` }}>
        <Container>
          <div className="media-content">
            <img
              src={poster}
              alt={name}
              className="media-poster"
              loading="lazy"
            />

            <DetailsContent>
              <h1 className="media__title">{name}</h1>
              <MediaStats
                vote_average={vote_average}
                vote_count={vote_count}
                release_date={first_air_date}
              />
              <p className="media__overview">{overview}</p>
              <MediaGenres genres={genres} />

              <SeriesMeta
                seasons={number_of_seasons}
                episodes={number_of_episodes}
                countries={production_countries}
                tagline={tagline}
              />

              <BackButtonComponent fallback={'series'} />
            </DetailsContent>
          </div>
        </Container>
      </Hero>
    </InfoSection>
  );
};

export { SeriesInfo };
