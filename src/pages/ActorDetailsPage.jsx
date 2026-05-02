import { getActorDetails } from '@/api';
import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ActorFilmography, ActorInfo } from '@/features';
import { Loader, ErrorMessage } from '@/shared';

const ActorDetailsPage = () => {
  const { id } = useParams();
  const [actorInfo, setActorInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadActorDetails = useCallback(async (mediaId) => {
    try {
      setLoading(true);
      setError('');
      const data = await getActorDetails(mediaId);
      setActorInfo(data);
    } catch {
      setError('Failed to load actor details');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    loadActorDetails(id);
  }, [id, loadActorDetails]);

  if (loading) return <Loader />;

  if (error)
    return (
      <ErrorMessage message={error} onRetry={() => loadActorDetails(id)} />
    );

  if (!actorInfo) return null;

  return (
    <div>
      <ActorInfo actor={actorInfo} />
      <ActorFilmography />
    </div>
  );
};
export default ActorDetailsPage;
