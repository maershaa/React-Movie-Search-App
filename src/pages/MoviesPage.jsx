import { SearchInput, Pagination, MovieList } from '@/components';
import { fetchMoviesByQuery } from '@/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader, ErrorMessage } from '@/components/layout';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = newQuery => {
    if (newQuery.trim() === '') {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: newQuery.trim() });
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setMovies([]);
      return;
    }

    const fetchMovies = async query => {
      setLoading(true);
      setError(null);
      try {
        console.log('🚀 ~ fetchMovies ~ query:', query);
        const data = await fetchMoviesByQuery(query);
        console.log('🚀 ~ fetchMovies ~ data:', data.results);
        setMovies(data.results);
      } catch (e) {
        console.log(`Request failed: ${e}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies(searchQuery);
  }, [searchQuery]);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <ErrorMessage
          message={error}
          onRetry={() => updateQueryString(searchQuery)}
        />
      )}

      <div className="hero">
        <h2 className="section-title">MoviesPage </h2>

        <SearchInput
          updateQueryString={updateQueryString}
          placeholder={'Search movies ...'}
        />
      </div>
      <section className="movies-section">
        {movies && <MovieList moviesArr={movies} />}

        <Pagination />
      </section>
    </>
  );
};

export default MoviesPage;
