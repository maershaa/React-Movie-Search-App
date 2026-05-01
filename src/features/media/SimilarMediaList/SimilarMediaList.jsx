import { SimilarMediaItem } from '@/features';
import { Title, SimilarList } from './SimilarMediaList.styled';
import { useEffect, useState, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getSimilarMedia } from '@/api';
import { SimilarMediaItemSkeleton, ErrorMessage } from '@/shared';

const SimilarMediaList = () => {
  const { id } = useParams();
  const [similarMedia, setSimilarMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();

  const loadSimilarMedia = useCallback(async (mediaId, type) => {
    try {
      setLoading(true);
      setError('');
      const data = await getSimilarMedia(mediaId, type);
      setSimilarMedia(data.results);
    } catch {
      setError(`Failed to load similar media`);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    const type = location.pathname.includes('movie') ? 'movie' : 'tv';

    loadSimilarMedia(id, type);
  }, [id, loadSimilarMedia, location.pathname]);

  if (error)
    return (
      <ErrorMessage
        message={error}
        onRetry={() => {
          const type = location.pathname.includes('movie') ? 'movie' : 'tv';
          loadSimilarMedia({ mediaId: id, type });
        }}
      />
    );
  if (!similarMedia.length) return null;

  return (
    <div>
      <Title>More Like This</Title>

      {loading ? (
        <SimilarMediaItemSkeleton count={11} />
      ) : (
        <SimilarList>
          {similarMedia.map((item) => {
            return <SimilarMediaItem key={item.id} media={item} />;
          })}
        </SimilarList>
      )}
    </div>
  );
};
export { SimilarMediaList };
