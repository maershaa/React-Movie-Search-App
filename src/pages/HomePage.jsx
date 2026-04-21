import { MoviePageWrapper } from './MoviesPage.styled';
import { useEffect, useState } from 'react';
import { BaseModal, Loader, ErrorMessage, PageTitle } from '@/shared';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';
import { MovieList } from '@/features';
import { MoviePreviewModal } from '@/components';
import { getTrendingMovies } from '@/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [totalPages, setTotalPages] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = movie => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const loadTrendingMovies = async page => {
    try {
      setLoading(true);
      setError('');
      const data = await getTrendingMovies(page);

      const newMovies = data.results;
      setTrendingMovies(prevMovies => [
        ...prevMovies,
        ...newMovies.filter(
          newMovie => !prevMovies.some(movie => movie.id === newMovie.id)
        ),
      ]);
      setTotalPages(data.total_pages);
    } catch {
      setError('Failed to load trending movies');
    } finally {
      setLoading(false);
    }
  };

  const { currentPage, targetRef } = useInfiniteScroll(loading, totalPages);

  useEffect(() => {
    loadTrendingMovies(currentPage);
  }, [currentPage]);

  return (
    <MoviePageWrapper>
      <div className="hero">
        <PageTitle>{'Trending Movies'} </PageTitle>
      </div>

      <section className="movies-section">
        {loading && <Loader />}
        {error && (
          <ErrorMessage
            message={error}
            onRetry={() => loadTrendingMovies(currentPage)}
          />
        )}
        <MovieList moviesArr={trendingMovies} openModal={openModal} />
        {/* {loading && <Loader />} //loader для бесконечной прокрутки, чтобы */}
        {/* показывать его внизу списка, а не вверху */}
        <div ref={targetRef}></div>
        {totalPages !== null && currentPage >= totalPages && (
          <div className="end-message">
            <span>No more movies to load.</span>
          </div>
        )}
      </section>

      {isModalOpen && (
        <BaseModal closeModal={closeModal}>
          <MoviePreviewModal movie={selectedMovie} closeModal={closeModal} />
        </BaseModal>
      )}
    </MoviePageWrapper>
  );
};

export default HomePage;
