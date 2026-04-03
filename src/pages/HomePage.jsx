import { Header, Input, Pagination, Footer, MovieCard } from '@/components';
import { HomePageWrapper } from './HomePage.styled';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '@/api/trending';
import { BASE_IMG_URL } from '@/api/config';
import { No_Poster } from '@/assets/images';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(resp => {
        console.log(resp);
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
        <Input />
      </div>

      <section className="movies-section">
        <ul className="movie-list">
          {trendingMovies.map(
            ({ id, title, poster_path, vote_average, release_date }) => (
              <MovieCard
                key={id}
                title={title}
                poster={
                  poster_path ? `${BASE_IMG_URL}${poster_path}` : No_Poster
                }
                rating={vote_average.toFixed(1)}
                release_year={release_date.substring(0, 4)}
              />
            )
          )}
          <MovieCard />
        </ul>

        <Pagination />
      </section>
    </HomePageWrapper>
  );
};

export default HomePage;
