import { MovieInfoSection, MovieDetailsContent } from './MovieInfo.styled';
import { MovieMeta, MediaStats, MediaGenres } from '@/features';

import { Container, BackButtonComponent } from '@/shared';

import { MovieHero } from './MovieInfo.styled';
import { getImage, getBgImage } from '@/shared';

const MovieInfo = ({ movie }) => {
  if (!movie) return null;
  const {
    backdrop_path,
    poster_path,
    original_title,
    vote_average,
    vote_count,
    overview,
    release_date,
    runtime,
    revenue,
    production_countries,
    tagline,
    genres,
  } = movie;

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
              alt={original_title}
              className="movie-poster"
              loading="lazy"
            />

            <MovieDetailsContent>
              <h1 className="movie__title">{original_title}</h1>
              <MediaStats
                vote_average={vote_average}
                vote_count={vote_count}
                release_date={release_date}
              />
              <p className="movie__overview">{overview}</p>
              <MediaGenres genres={genres} />

              <MovieMeta
                runtime={runtime}
                revenue={revenue}
                production_countries={production_countries}
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
export { MovieInfo };
