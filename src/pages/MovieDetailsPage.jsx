// import {  Input, } from '@/components';
import { FaStar, FaRegCommentDots } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '@/api';

import { useEffect, useState } from 'react';
import { Loader, MovieMeta, MovieStats } from '@/components';

import { MovieHero, MovieInfo } from '@/pages/movie-details';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [isError, setError] = useState(null);

  const { id } = useParams();
  console.log('🚀 ~ MovieDetailsPage ~ id:', id);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        console.error(err);
        // setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (!movie) return null;

  return (
    <>
      <div className="movie-details">
        {isLoading && <Loader />}

        {/* <MovieHero movie={movie} /> */}
        <MovieInfo movie={movie} />
        <div className="tab-content">
          <ul>
            <li>{/* <Link to="cast">Cast</Link> */}</li>

            <hr className="divider" />

            <li>{/* <Link to="reviews">Reviews</Link> */}</li>
          </ul>

          <Outlet />
        </div>
      </div>
    </>
  );
};
export default MovieDetailsPage;
