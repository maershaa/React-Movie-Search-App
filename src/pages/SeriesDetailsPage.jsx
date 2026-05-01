import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSeriesDetails } from '@/api';
import { Loader, ErrorMessage } from '@/shared';
import { SeriesInfo, DetailsTabs, SimilarMediaList } from '@/features';

const SeriesDetailsPage = () => {
  const [seriesItem, setSeriesItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();

  const loadSeriesDetails = async (seriesId) => {
    try {
      setLoading(true);
      setError('');
      const data = await getSeriesDetails(seriesId);

      if (!data) {
        setError('Series not found');
        return;
      }

      setSeriesItem(data);
    } catch {
      setError('Failed to load series details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    loadSeriesDetails(id);
  }, [id]);

  if (loading) return <Loader />;
  if (error)
    return (
      <ErrorMessage message={error} onRetry={() => loadSeriesDetails(id)} />
    );
  if (!seriesItem) return null;

  return (
    <div>
      <SeriesInfo seriesItem={seriesItem} />
      <DetailsTabs />
      <SimilarMediaList />
    </div>
  );
};
export default SeriesDetailsPage;
