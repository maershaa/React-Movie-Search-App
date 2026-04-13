// import {  Input, } from '@/components';
import { FaStar, FaRegCommentDots } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '@/api';
import { No_Poster } from '@/assets/images';
import { BASE_IMG_URL } from '@/api/config';
import { useEffect, useState } from 'react';
import { Loader, MovieMeta, MovieStats } from '@/components';

import { MovieGenres } from '../components/movie';

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

  const {
    backdrop_path,
    poster_path,
    genres,
    original_title,
    overview,
    vote_count,
    release_date,
    vote_average,
    revenue,
    runtime,
    origin_country,
    tagline,
  } = movie;

  const bgPoster = `${BASE_IMG_URL}w500/${backdrop_path}`;
  return (
    <>
      <div className="movie-details">
        {isLoading && <Loader />}
        <div
          className="movie-details__backdrop"
          style={{ backgroundImage: `url(${bgPoster})` }}
        >
          <img
            src={poster_path ? `${BASE_IMG_URL}w300/${poster_path}` : No_Poster}
            alt={original_title}
          />

          <h1 className="movie-details__title">{original_title}</h1>
        </div>

        <section className="movie-details__info">
          <MovieStats vote_average={vote_average} vote_count={vote_count} />

          <p>{overview}</p>

          <MovieMeta
            release_date={release_date}
            runtime={runtime}
            revenue={revenue}
            origin_country={origin_country}
            tagline={tagline}
          />

          <MovieGenres genres={genres} />
          <button type="button" className="btn-back">
            <IoMdArrowBack /> Back
          </button>
          {/* Секция вкладок или переключатель (Tabs) */}
          <div className="movie-details__tabs">
            <button className="tab-btn active">Cast</button>
            <button className="tab-btn">Reviews</button>
          </div>
          <div className="tab-content">
            <ul>
              <li>{/* <Link to="cast">Cast</Link> */}</li>

              <hr className="divider" />

              <li>{/* <Link to="reviews">Reviews</Link> */}</li>
            </ul>

            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
};
export default MovieDetailsPage;
