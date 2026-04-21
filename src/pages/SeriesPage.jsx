import { useState, useEffect } from 'react';
import { getPopularSeries } from '@/api';
import { MovieList } from '@/features';
import { Pagination } from '@/shared';

const SeriesPage = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchTvSeries = async () => {
      try {
        const response = await getPopularSeries();

        setSeries(response.results);
      } catch (error) {
        console.log('🚀 ~ fetchTvSeries ~ error:', error);
      }
    };

    fetchTvSeries();

    return () => {};
  }, []);

  return (
    <>
      <div>SeriesPage</div>
      <section className="movies-section">
        {series && <MovieList moviesArr={series} />}

        <Pagination />
      </section>
    </>
  );
};

export default SeriesPage;
