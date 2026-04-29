import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { getMovieCast, getSeriesCast } from '@/api';
import { Loader, ErrorMessage } from '@/shared';
import { CastListWrapper } from './CastList.styled';
import { CastListItem, NoCast } from '@/features';
import { CastItemSkeleton } from '@/shared';

const CastList = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const loadCast = useCallback(
    async movieId => {
      try {
        setLoading(true);
        setError('');

        if (location.pathname.includes('movies')) {
          const data = await getMovieCast(movieId);
          setCast(data.cast);
        } else if (location.pathname.includes('series')) {
          const data = await getSeriesCast(movieId);
          setCast(data.cast);
        }
      } catch {
        setError('Failed to load cast');
      } finally {
        setLoading(false);
      }
    },
    [location.pathname]
  );

  useEffect(() => {
    if (!id) return;

    loadCast(id);
  }, [id, loadCast]);

  if (loading) return <CastItemSkeleton count={cast.length} />;

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
