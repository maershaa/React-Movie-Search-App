import { MovieInfoSection, MovieDetailsContent } from './MovieInfo.styled';
import { MovieMeta, MovieStats, MovieGenres } from '@/features';

import { Container, BackButtonComponent } from '@/shared';

import { No_Poster } from '@/assets/images';
import { BASE_IMG_URL } from '@/api/config';
import { MovieHero } from './MovieInfo.styled';

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

  const bgPoster = `${BASE_IMG_URL}w1280${backdrop_path}`;
  const poster = poster_path ? `${BASE_IMG_URL}w500${poster_path}` : No_Poster;
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
              <MovieStats
                vote_average={vote_average}
                vote_count={vote_count}
                release_date={release_date}
              />
              <p className="movie__overview">{overview}</p>
              <MovieGenres genres={genres} />

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
