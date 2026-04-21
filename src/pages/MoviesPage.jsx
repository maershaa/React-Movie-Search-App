import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, MovieList, MoviePreviewModal } from '@/features';
import {
  PageTitle,
  Loader,
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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchQuery = searchParams.get('query') ?? '';

  const handleSearch = value => {
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

  const loadTopRatedMovies = useCallback(async page => {
    try {
      setLoading(true);
      setError('');
      const data = await getTopRatedMovies(page);
      setMovies(prevMovies => [
        ...prevMovies,
        ...data.results.filter(
          newMovie => !prevMovies.some(movie => movie.id === newMovie.id)
        ),
      ]);

      setTotalPages(data.total_pages);
    } catch {
      setError('Failed to load top rated movies');
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMoviesBySearch = useCallback(async (query, page) => {
    try {
      setLoading(true);
      setError('');

      const data = await searchMovies(query, page);
      console.log('🚀 ~ MoviesPage ~ page:', page);

      setMovies(prevMovies => {
        if (page === 1) {
          return data.results; // новый поиск полностью заменяет список
        }
        return [
          ...prevMovies,
          ...data.results.filter(
            newMovie => !prevMovies.some(movie => movie.id === newMovie.id)
          ),
        ];
      });

      setTotalPages(data.total_pages);
    } catch {
      setError('Failed to search movies');
    } finally {
      setLoading(false);
    }
  }, []);

  const { currentPage, setCurrentPage, targetRef } = useInfiniteScroll(
    loading,
    totalPages
  );

  const { selectedMovie, isModalOpen, openModal, closeModal } = useMovieModal();

  useEffect(() => {
    setMovies([]);
    setTotalPages(null);
    setCurrentPage(1);
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
        {loading && <Loader />}
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

        <MovieList moviesArr={movies} openModal={openModal} />

        <div ref={targetRef} />

        {totalPages !== null && currentPage >= totalPages && (
          <EndMessage text={'No more movies to load'}></EndMessage>
        )}

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
