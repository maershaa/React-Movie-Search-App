import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchInput, MovieList } from '@/features';
import { PageTitle, Loader, ErrorMessage } from '@/shared';
import { useInfiniteScroll } from '@/shared/hooks/useInfiniteScroll';
import { searchMovies, getTopRatedMovies } from '@/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

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

      <div className="hero">
        <PageTitle>
          {searchQuery ? 'Search Results' : 'Top Rated Movies'}
        </PageTitle>

        <SearchInput
          updateQueryString={handleSearch}
          placeholder="Search movies ..."
        />
      </div>
      <section className="movies-section">
        <MovieList moviesArr={movies} />
        <div ref={targetRef} />
        {totalPages !== null && currentPage >= totalPages && (
          <div className="end-message">
            <span>No more movies to load.</span>
          </div>
        )}
      </section>
    </>
  );
};

export default MoviesPage;
