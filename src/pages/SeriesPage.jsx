import { useState, useEffect, useCallback } from 'react';
import { getPopularSeries } from '@/api';
import { MediaList, MoviePreviewModal } from '@/features';
import {
  Loader,
  ErrorMessage,
  PageTitle,
  BaseModal,
  EndMessage,
} from '@/shared';
import { useInfiniteScroll, useMovieModal } from '@/shared/hooks';

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { selectedMovie, isModalOpen, openModal, closeModal } = useMovieModal();
  const { currentPage, targetRef } = useInfiniteScroll(loading, totalPages);

  const loadSeries = useCallback(async page => {
    try {
      setLoading(true);
      setError('');
      const data = await getPopularSeries(page);
      setSeries(prev => [
        ...prev,
        ...data.results.filter(
          newSeries => !prev.some(series => series.id === newSeries.id)
        ),
      ]);

      setTotalPages(data.total_pages);
    } catch {
      setError('Failed to fetch series');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSeries(currentPage);
  }, [currentPage, loadSeries]);

  return (
    <>
      {loading && <Loader />}
      {error && (
        <ErrorMessage message={error} onRetry={() => loadSeries(currentPage)} />
      )}

      <div className="hero">
        <PageTitle>{'Popular Series'}</PageTitle>
      </div>

      <section className="movies-section">
        <MediaList mediaArray={series} openModal={openModal} />

        <div ref={targetRef}></div>
        {totalPages !== null && currentPage >= totalPages && (
          <EndMessage text={'No more series to load'}></EndMessage>
        )}
      </section>

      {isModalOpen && (
        <BaseModal closeModal={closeModal}>
          <MoviePreviewModal movie={selectedMovie} closeModal={closeModal} />
        </BaseModal>
      )}
    </>
  );
};

export default SeriesPage;
