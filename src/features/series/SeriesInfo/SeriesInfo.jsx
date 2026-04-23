import {
  MovieInfoSection,
  MovieDetailsContent,
  MovieHero,
} from './SeriesInfo.styled';
import { SeriesMeta, MovieStats, MediaGenres } from '@/features';
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
  console.log('seriesItem в SeriesInfo:', seriesItem);

  const bgPoster = getImage(backdrop_path, 1280);
  const poster = getBgImage(poster_path, 500);

  return (
    <MovieInfoSection>
      <MovieHero
        className="movie-details__backdrop"
        style={{ backgroundImage: `url(${bgPoster})` }}
      >
        <Container>
          <div className="movie-content">
            <img
              src={poster}
              alt={name}
              className="movie-poster"
              loading="lazy"
            />

            <MovieDetailsContent>
              <h1 className="movie__title">{name}</h1>
              <MovieStats
                vote_average={vote_average}
                vote_count={vote_count}
                release_date={first_air_date}
              />
              <p className="movie__overview">{overview}</p>
              <MediaGenres genres={genres} />

              <SeriesMeta
                seasons={number_of_seasons}
                episodes={number_of_episodes}
                countries={production_countries}
                tagline={tagline}
              />

              <BackButtonComponent />
            </MovieDetailsContent>
          </div>
        </Container>
      </MovieHero>
    </MovieInfoSection>
  );
};

export { SeriesInfo };
