import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSeriesDetails } from '@/api';
import { Loader, ErrorMessage } from '@/shared';
import { SeriesInfo, DetailsTabs } from '@/features';

const SeriesDetailsPage = () => {
  const [seriesItem, setSeriesItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { id } = useParams();

  console.log('🚀 ~ SeriesDetailsPage ~ id:', id);

  const loadSeriesDetails = async seriesId => {
    try {
      setLoading(true);
      setError('');
      const data = await getSeriesDetails(seriesId);

      if (!data) {
        setError('Series not found');
        return;
      }

      setSeriesItem(data);
      console.log('🚀 ~ SeriesDetailsPage ~ data:', data);
    } catch {
      setError('Failed to load series details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    console.log('Делаем запрос в useEffect ');
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
      {console.log('seriesItem', seriesItem)}

      <SeriesInfo seriesItem={seriesItem} />
      <DetailsTabs />
    </div>
  );
};
export default SeriesDetailsPage;
