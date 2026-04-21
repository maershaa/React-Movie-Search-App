import { MoviePageWrapper } from './MoviesPage.styled';
import { useEffect, useState } from 'react';
import {
  BaseModal,
  Loader,
  ErrorMessage,
  PageTitle,
  EndMessage,
} from '@/shared';
import { useInfiniteScroll, useMovieModal } from '@/shared/hooks';
import { MovieList, MoviePreviewModal } from '@/features';
import { getTrendingMovies } from '@/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
  const { selectedMovie, isModalOpen, openModal, closeModal } = useMovieModal();

  useEffect(() => {
    loadTrendingMovies(currentPage);
  }, [currentPage]);

  return (
    <MoviePageWrapper>
      <PageTitle>{'Trending Movies'} </PageTitle>

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
          <EndMessage text={'No more movies to load'}></EndMessage>
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
