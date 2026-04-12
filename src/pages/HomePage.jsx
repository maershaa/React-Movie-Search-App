import { FilterInput, Pagination, Footer, MovieList } from '@/components';
import { HomePageWrapper } from './HomePage.styled';
import { useEffect, useState, useMemo } from 'react';
import { getTrendingMovies } from '@/api';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [query, setQuery] = useState('');

  const onSearchChange = value => setQuery(value);

  const visibleMovies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return trendingMovies.filter(movie => {
      const title = movie.title.toLowerCase();
      const originalTitle = movie.original_title.toLowerCase();

      return (
        title.includes(normalizedQuery) ||
        originalTitle.includes(normalizedQuery)
      );
    });
  }, [query, trendingMovies]);

  useEffect(() => {
    getTrendingMovies()
      .then(resp => {
        // console.log(resp);
        // const currentPage = resp.page;
        // const totalPages = resp.total_pages;
        // console.log('🚀 ~ HomePage ~ totalPages:', totalPages);
        const data = resp.results;
        setTrendingMovies(data);
      })
      .catch(err => console.error(err));
    return () => {
      // second;
    };
  }, []);

  return (
    <HomePageWrapper>
      <div className="hero">
        <h2 className="section-title">Trending Movies</h2>

        <FilterInput
          onSearchChange={onSearchChange}
          placeholder={'Filter movies by name'}
          value={query}
        />
      </div>

      <section className="movies-section">
        {trendingMovies && <MovieList moviesArr={visibleMovies} />}

        <Pagination />
      </section>
    </HomePageWrapper>
  );
};

export default HomePage;
