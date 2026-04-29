import { MoviePageWrapper } from './MoviesPage.styled';
import { useEffect, useState } from 'react';
import {
  BaseModal,
  MediaCardSkeleton,
  ErrorMessage,
  PageTitle,
  EndMessage,
} from '@/shared';
import { useInfiniteScroll, useMovieModal } from '@/shared/hooks';
import { MediaList, MoviePreviewModal } from '@/features';
import { getTrendingMovies } from '@/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const [initialLoading, setInitialLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState('');

  const { currentPage, targetRef } = useInfiniteScroll(loadingMore, totalPages);
  const { selectedMovie, isModalOpen, openModal, closeModal } = useMovieModal();

  const loadTrendingMovies = async page => {
    try {
      if (page === 1) setInitialLoading(true);
      else setLoadingMore(true);

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
      setInitialLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies(currentPage);
  }, [currentPage]);

  return (
    <MoviePageWrapper>
      <PageTitle>{'Trending Movies'} </PageTitle>
      <section className="movies-section">
        {/* ---------------- INITIAL LOADING ---------------- */}
        {trendingMovies.length === 0 && initialLoading ? (
          <MediaCardSkeleton count={24} />
        ) : (
          <>
            <MediaList mediaArray={trendingMovies} openModal={openModal} />

            {loadingMore && <MediaCardSkeleton count={6} />}
          </>
        )}

        {/* ---------------- ERROR ---------------- */}
        {error && (
          <ErrorMessage
            message={error}
            onRetry={() => loadTrendingMovies(currentPage)}
          />
        )}

        {/* ---------------- INFINITE SCROLL ---------------- */}
        <div ref={targetRef}></div>

        {/* ---------------- END MESSAGE ---------------- */}
        {totalPages !== null && currentPage >= totalPages && (
          <EndMessage text={'No more movies to load'}></EndMessage>
        )}
      </section>

      {/* ---------------- MODAL ---------------- */}
      {isModalOpen && (
        <BaseModal closeModal={closeModal}>
          <MoviePreviewModal movie={selectedMovie} closeModal={closeModal} />
        </BaseModal>
      )}
    </MoviePageWrapper>
  );
};

export default HomePage;
