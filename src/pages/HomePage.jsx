import { MovieList } from '@/features';
import { MoviePreviewModal } from '@/components';

import { BaseModal, Loader } from '@/shared';

import { HomePageWrapper } from './HomePage.styled';
import { useEffect, useState, useRef } from 'react';
import { getTrendingMovies } from '@/api';
import { useIntersection } from 'react-use';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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

  //! InfiniteScroll React на хуке useIntersection из библиотеки react-use
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '200px', //загрузка начнётся заранее, а не когда пользователь упёрся в конец
    threshold: 0,
  });

  useEffect(() => {
    if (
      intersection?.isIntersecting &&
      !isLoading &&
      (totalPages === null || page < totalPages)
    ) {
      setPage(prev => prev + 1);
    }
  }, [intersection, isLoading, page, totalPages]);
  // ! Конец InfiniteScroll

  // const searchedMovie = useMemo(
  //   () => trendingMovies.filter(movie => movie.id === selectedMovie),
  //   [selectedMovie, trendingMovies]
  // );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const resp = await getTrendingMovies(page);
        setTrendingMovies(prev => [...prev, ...resp.results]);
        setTotalPages(resp.total_pages);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <HomePageWrapper>
      <div className="hero">
        <h2 className="section-title">Trending Movies</h2>
      </div>

      <section className="movies-section">
        <MovieList moviesArr={trendingMovies} openModal={openModal} />
        {isLoading && <Loader />}
        <div ref={intersectionRef}></div>
        {page >= totalPages && (
          <div className="end-message">
            <span>THE END</span>
          </div>
        )}
      </section>

      {isModalOpen && (
        <BaseModal closeModal={closeModal}>
          <MoviePreviewModal movie={selectedMovie} closeModal={closeModal} />
        </BaseModal>
      )}
    </HomePageWrapper>
  );
};

export default HomePage;
