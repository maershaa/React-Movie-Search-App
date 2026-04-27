import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { getMovieCast } from '@/api';
import { Loader, ErrorMessage } from '@/shared';
import { CastListWrapper } from './CastList.styled';
import { CastListItem, NoCast } from '@/features';

const CastList = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCast = useCallback(async movieId => {
    try {
      setLoading(true);
      setError('');
      const data = await getMovieCast(movieId);
      setCast(data.cast);
    } catch {
      setError('Failed to load movie cast');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    loadCast(id);
  }, [id, loadCast]);

  if (loading) return <Loader />;
  if (error)
    return <ErrorMessage message={error} onRetry={() => loadCast(id)} />;

  if (cast.length === 0) {
    return <NoCast />;
  }

  return (
    <div className="cast__scroll-wrapper">
      <CastListWrapper>
        {cast.map(actor => (
          <CastListItem key={actor.cast_id} actor={actor}></CastListItem>
        ))}
      </CastListWrapper>
    </div>
  );
};

export default CastList;
