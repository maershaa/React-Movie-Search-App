import { Container, CloseBtn } from './MoviePreviewModal.styled';
import { Link } from 'react-router-dom';
import { BASE_IMG_URL } from '@/api/config';
import { IoClose } from 'react-icons/io5';

const MoviePreviewModal = ({ movie, closeModal }) => {
  if (!movie) return null;

  const {
    original_title,
    adult,
    release_date,
    genre_ids,
    overview,
    backdrop_path,
  } = movie;

  const bgPoster = `${BASE_IMG_URL}w500/${backdrop_path}`;

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

            <ul className="modal__genres">
              {genre_ids.map(genre => (
                <li key={genre} className="modal__genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>

          <p className="modal__overview">{overview}</p>

          {/* !потом перепрооверить */}
          <Link to={`/movie/${movie.id}`} className="modal__info-btn">
            More Info
          </Link>
        </section>
      </article>
    </Container>
  );
};

export { MoviePreviewModal };
