import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, MediaList, MoviePreviewModal } from '@/features';
import {
  PageTitle,
  MediaCardSkeleton,
  ErrorMessage,
  BaseModal,
  EndMessage,
} from '@/shared';
import { useInfiniteScroll, useMovieModal } from '@/shared/hooks';
import { searchMovies, getTopRatedMovies } from '@/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [initialLoading, setInitialLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState('');

  const searchQuery = searchParams.get('query') ?? '';

  const { currentPage, setCurrentPage, targetRef } = useInfiniteScroll(
    loadingMore,
    totalPages,
  );

  const { selectedMovie, isModalOpen, openModal, closeModal } = useMovieModal();

  const handleSearch = (value) => {
    const query = value.trim();

    setMovies([]);
    setTotalPages(null);
    setCurrentPage(1);

    if (!query) {
      setSearchParams({});
      return;
    }

    setSearchParams({ query });
  };

  const loadTopRatedMovies = useCallback(async (page) => {
    try {
      if (page === 1) setInitialLoading(true);
      else setLoadingMore(true);

      setError('');

      const data = await getTopRatedMovies(page);
      setMovies((prevMovies) => [
        ...prevMovies,
        ...data.results.filter(
          (newMovie) => !prevMovies.some((movie) => movie.id === newMovie.id),
        ),
      ]);

      setTotalPages(data.total_pages);
    } catch {
      setError('Failed to load top rated movies');
    } finally {
      setInitialLoading(false);
      setLoadingMore(false);
    }
  }, []);

  const loadMoviesBySearch = useCallback(async (query, page) => {
    try {
      if (page === 1) setInitialLoading(true);
      else setLoadingMore(true);

      setError('');

      const data = await searchMovies(query, page);

      setMovies((prevMovies) => {
        if (page === 1) {
          return data.results.sort((a, b) => b.popularity - a.popularity);
        }

        return [
          ...prevMovies,
          ...data.results
            .filter(
              (newMovie) =>
                !prevMovies.some((movie) => movie.id === newMovie.id),
            )
            .sort((a, b) => b.popularity - a.popularity),
        ];
      });

      setTotalPages(data.total_pages);
    } catch {
      setError('Failed to search movies');
    } finally {
      setInitialLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    setMovies([]);
    setTotalPages(null);
    setCurrentPage(1);
    setInitialLoading(false);
  }, [searchQuery, setCurrentPage]);

  useEffect(() => {
    if (searchQuery) {
      loadMoviesBySearch(searchQuery, currentPage);
    } else {
      loadTopRatedMovies(currentPage);
    }
  }, [currentPage, loadMoviesBySearch, loadTopRatedMovies, searchQuery]);

  return (
    <>
      <div className="movies_page__hero">
        <PageTitle>
          {searchQuery ? 'Search Results' : 'Top Rated Movies'}
        </PageTitle>

        <SearchInput
          updateQueryString={handleSearch}
          placeholder="Search movies ..."
        />
      </div>
      <section className="movies-section">
        {/* ---------------- INITIAL LOADING ---------------- */}
        {movies.length === 0 && initialLoading ? (
          <MediaCardSkeleton count={24} />
        ) : (
          <>
            <MediaList mediaArray={movies} openModal={openModal} />

            {loadingMore && <MediaCardSkeleton count={4} />}
          </>
        )}

        {/* ---------------- ERROR ---------------- */}
        {error && (
          <ErrorMessage
            message={error}
            onRetry={() =>
              searchQuery
                ? loadMoviesBySearch(searchQuery, currentPage)
                : loadTopRatedMovies(currentPage)
            }
          />
        )}

        {/* ---------------- INFINITE SCROLL ---------------- */}
        <div ref={targetRef} />

        {/* ---------------- END MESSAGE ---------------- */}
        {totalPages !== null && currentPage >= totalPages && (
          <EndMessage text={'No more movies to load'}></EndMessage>
        )}

        {/* ---------------- MODAL ---------------- */}
        {isModalOpen && (
          <BaseModal closeModal={closeModal}>
            <MoviePreviewModal movie={selectedMovie} closeModal={closeModal} />
          </BaseModal>
        )}
      </section>
    </>
  );
};

export default MoviesPage;
