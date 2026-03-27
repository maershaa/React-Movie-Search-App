import { Header, Input, Footer, Pagination, MovieCard } from '@/components';
import { FaStar, FaRegCommentDots } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { CastList, ReviewList } from '@/features';
const MovieDetailsPage = () => {
  return (
    <>
      <p>MovieDetailsPage</p>

      <Header />

      <main className="main-content">
        <Input />
        <div className="movie-details">
          {/* 1. Backdrop - большое фоновое изображение с градиентом */}
          <div className="movie-details__backdrop">
            <img src="backdrop-url.jpg" alt="Backdrop" />
            <div className="movie-details__overlay"></div>
          </div>

          <div className="container">
            {/* 2. Основной контент */}
            <main className="movie-details__main">
              {/* Левая колонка: Постер */}
              <aside className="movie-details__poster-column">
                <div className="movie-details__poster">
                  <img src="poster-url.jpg" alt="Oppenheimer" />
                </div>
              </aside>

              {/* Правая колонка: Инфо */}
              <section className="movie-details__info">
                <h1 className="movie-details__title">Oppenheimer</h1>

                <div className="movie-details__stats">
                  <div className="rating-badge">
                    <FaStar className="star-icon" />
                    <span>8.8</span>
                  </div>
                  <span className="movie-details__reviews-qty">
                    <FaRegCommentDots /> 5K+ Reviews
                  </span>
                </div>

                <p className="movie-details__description">
                  J. Robert Oppenheimer, a physicist during WWII, is recruited
                  to work on the Manhattan Project. Witness the internal
                  struggles and historical impact...
                </p>

                <ul className="movie-details__genres">
                  <li className="genre-tag">Biography</li>
                  <li className="genre-tag">Drama</li>
                  <li className="genre-tag">History</li>
                </ul>

                <button type="button" className="btn-back">
                  <IoMdArrowBack /> Back
                </button>

                {/* Секция вкладок или переключатель (Tabs) */}
                <div className="movie-details__tabs">
                  <button className="tab-btn active">Cast</button>
                  <button className="tab-btn">Reviews</button>
                </div>

                <div className="tab-content">
                  {/* --- СЕКЦИЯ CAST --- */}
                  <section className="cast">
                    <div className="cast__header">
                      <h3 className="section-title">Top Cast</h3>
                    </div>

                    {/* Контейнер для горизонтального скролла */}
                    <CastList />
                  </section>

                  <hr className="divider" />

                  {/* --- СЕКЦИЯ REVIEWS --- */}
                  <section className="reviews">
                    <h3 className="section-title">
                      User Reviews <span className="count">(12)</span>
                    </h3>

                    <ReviewList />

                    {/* Пагинация ОДНА на весь список отзывов */}
                    <Pagination />
                  </section>
                </div>
              </section>
            </main>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
export { MovieDetailsPage };
