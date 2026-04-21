import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '@/api';
import { Loader, ErrorMessage } from '@/shared';
import { MovieInfo, DetailsTabs } from '@/features';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();

  const loadMovieDetails = async movieId => {
    try {
      setLoading(true);
      setError('');
      setMovie(null);
      const data = await getMovieDetails(movieId);
      setMovie(data);
    } catch {
      setError('Failed to load movie details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;

    loadMovieDetails(id);
  }, [id]);

  return (
    <div className="movie-details">
      {loading && <Loader />}
      {error && (
        <ErrorMessage message={error} onRetry={() => loadMovieDetails(id)} />
      )}

      <MovieInfo movie={movie} />
      <DetailsTabs />
    </div>
  );
};
export default MovieDetailsPage;
