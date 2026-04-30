import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import { Container } from './SeriesPreviewModal.styled';
import { getSeriesGenres } from '@/api';
import { MediaGenres } from '@/features';
import { ModalCloseButton, getImage } from '@/shared';

const SeriesPreviewModal = ({ seriesItem, closeModal }) => {
  const [genres, setGenres] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getSeriesGenres()
      .then(data => setGenres(data.genres))
      .catch(err => console.error(err));
  }, []);

  const {
    original_name,
    first_air_date,
    adult,
    genre_ids,
    overview,
    backdrop_path,
  } = seriesItem;

  const genreNames = useMemo(() => {
    return genres.filter(genre => genre_ids?.includes(genre.id));
  }, [genres, genre_ids]);

  if (!seriesItem) return null;

  const bgPoster = getImage(backdrop_path, 1280);

  return (
    <Container>
      <article>
        <header
          className="modal__header"
          style={{ backgroundImage: `url(${bgPoster})` }}
        >
          <ModalCloseButton closeModal={closeModal} />

          <h2 className="modal__title">{original_name}</h2>
        </header>

        <section className="modal__content">
          <div className="modal__info">
            <span className="modal__year">
              {first_air_date?.substring(0, 4)}
            </span>

            {adult && <span className="modal__age">18+</span>}
            <span className="modal__mediaType">series</span>

            <MediaGenres genres={genreNames} />
          </div>

          <p className="modal__overview">{overview}</p>

          <Link
            to={`/series/${seriesItem.id}`}
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

export { SeriesPreviewModal };
