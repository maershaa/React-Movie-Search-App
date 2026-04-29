import { useState, useEffect, useCallback } from 'react';
import { getPopularSeries } from '@/api';
import { MediaList, SeriesPreviewModal } from '@/features';
import {
  MediaCardSkeleton,
  ErrorMessage,
  PageTitle,
  BaseModal,
  EndMessage,
} from '@/shared';
import { useInfiniteScroll, useMovieModal } from '@/shared/hooks';

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [totalPages, setTotalPages] = useState(null);

  const [initialLoading, setInitialLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState('');

  const { selectedMovie, isModalOpen, openModal, closeModal } = useMovieModal();
  const { currentPage, targetRef } = useInfiniteScroll(loadingMore, totalPages);

  const loadSeries = useCallback(async page => {
    try {
      if (page === 1) setInitialLoading(true);
      else setLoadingMore(true);

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
      setInitialLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    loadSeries(currentPage);
  }, [currentPage, loadSeries]);

  return (
    <>
      <div className="hero">
        <PageTitle>{'Popular Series'}</PageTitle>
      </div>
      <section className="movies-section">
        {series === 0 && initialLoading ? (
          <MediaCardSkeleton count={24} />
        ) : (
          <>
            <MediaList mediaArray={series} openModal={openModal} />

            {loadingMore && <MediaCardSkeleton count={6} />}
          </>
        )}

        {/* ---------------- ERROR ---------------- */}
        {error && (
          <ErrorMessage
            message={error}
            onRetry={() => loadSeries(currentPage)}
          />
        )}

        {/* ---------------- INFINITE SCROLL ---------------- */}
        <div ref={targetRef}></div>

        {/* ---------------- END MESSAGE ---------------- */}
        {totalPages !== null && currentPage >= totalPages && (
          <EndMessage text={'No more series to load'}></EndMessage>
        )}
      </section>

      {/* ---------------- MODAL ---------------- */}
      {isModalOpen && (
        <BaseModal closeModal={closeModal}>
          <SeriesPreviewModal
            seriesItem={selectedMovie}
            closeModal={closeModal}
          />
        </BaseModal>
      )}
    </>
  );
};

export default SeriesPage;
