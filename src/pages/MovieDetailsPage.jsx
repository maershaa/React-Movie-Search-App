import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '@/api';
import { Loader } from '@/shared';
import { MovieInfo, DetailsTabs } from '@/features';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [isError, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(id);
        console.log('🚀 ~ loadMovie ~ data:', data);
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

        <MovieInfo movie={movie} />
        <DetailsTabs />
      </div>
    </>
  );
};
export default MovieDetailsPage;
