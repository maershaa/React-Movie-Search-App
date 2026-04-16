import { Container, CloseBtn } from './MoviePreviewModal.styled';
import { Link } from 'react-router-dom';
import { BASE_IMG_URL } from '@/api/config';
import { IoClose } from 'react-icons/io5';
import { fetchGenres } from '@/api';
import { MovieGenres } from '@/components/movie';

import { useEffect, useMemo, useState } from 'react';
const MoviePreviewModal = ({ movie, closeModal }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres()
      .then(resp => setGenres(resp.genres))
      .catch(err => console.error(err));
  }, []);

  const {
    original_title,
    adult,
    release_date,
    genre_ids,
    media_type,
    overview,
    backdrop_path,
  } = movie;

  const genreNames = useMemo(() => {
    return genres.filter(genre => genre_ids?.includes(genre.id));
  }, [genres, genre_ids]);

  if (!movie) return null;

  const bgPoster = `${BASE_IMG_URL}w500/${backdrop_path}`;

  console.log('🚀 ~ MoviePreviewModal ~ genres:', genres);

  return (
    <Container>
      <article>
        <header
          className="modal__header"
          style={{ backgroundImage: `url(${bgPoster})` }}
        >
          <CloseBtn
            className="modal__close"
            onClick={closeModal}
            aria-label="Close"
          >
            <IoClose size={32} />
          </CloseBtn>

          <h2 className="modal__title">{original_title}</h2>
        </header>

        <section className="modal__content">
          <div className="modal__info">
            <span className="modal__year">{release_date?.substring(0, 4)}</span>

            {adult && <span className="modal__age">18+</span>}
            <span className="modal__mediaType">{media_type}</span>

            <MovieGenres genres={genreNames} />
          </div>

          <p className="modal__overview">{overview}</p>

          {/* !потом перепрооверить */}
          <Link to={`/movies/${movie.id}`} className="modal__info-btn">
            More Info
          </Link>
        </section>
      </article>
    </Container>
  );
};

export { MoviePreviewModal };
