import { Link, useLocation } from 'react-router-dom';
import { Container } from './MoviePreviewModal.styled';
import { getMoviesGenres } from '@/api';
import { MediaGenres } from '@/features';
import { ModalCloseButton, getBgImage } from '@/shared';

import { useEffect, useMemo, useState } from 'react';
const MoviePreviewModal = ({ movie, closeModal }) => {
  const [genres, setGenres] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMoviesGenres()
      .then(resp => setGenres(resp.genres))
      .catch(err => console.error(err));
  }, []);

  const {
    original_title,
    adult,
    release_date,
    genre_ids,
    media_type = 'movie',
    overview,
    backdrop_path,
  } = movie;

  const genreNames = useMemo(() => {
    return genres.filter(genre => genre_ids?.includes(genre.id));
  }, [genres, genre_ids]);

  if (!movie) return null;

  const bgPoster = getBgImage(backdrop_path, 1280);

  return (
    <Container>
      <article>
        <header
          className="modal__header"
          style={{ backgroundImage: `url(${bgPoster})` }}
        >
          <ModalCloseButton closeModal={closeModal} />

          <h2 className="modal__title">{original_title}</h2>
        </header>

        <section className="modal__content">
          <div className="modal__info">
            <span className="modal__year">{release_date?.substring(0, 4)}</span>

            {adult && <span className="modal__age">18+</span>}
            <span className="modal__mediaType">{media_type}</span>

            <MediaGenres genres={genreNames} />
          </div>

          <p className="modal__overview">{overview}</p>

          <Link
            to={`/movies/${movie.id}`}
            state={{
              from: location.pathname + location.search,
            }}
            className="modal__info-btn"
          >
            More Info
          </Link>
        </section>
      </article>
    </Container>
  );
};

export { MoviePreviewModal };
