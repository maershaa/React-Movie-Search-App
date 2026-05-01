import {
  SimilarMediaItem,
  MoviePreviewModal,
  SeriesPreviewModal,
} from '@/features';
import { Title, SimilarList } from './SimilarMediaList.styled';
import { useEffect, useState, useCallback } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getSimilarMedia } from '@/api';
import { BaseModal, SimilarMediaItemSkeleton, ErrorMessage } from '@/shared';
import { useMovieModal } from '@/shared/hooks';

const SimilarMediaList = () => {
  const { id } = useParams();
  const [similarMedia, setSimilarMedia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { selectedMovie, isModalOpen, openModal, closeModal } = useMovieModal();

  const location = useLocation();
  const isMovie = location.pathname.includes('movie');
  const type = isMovie ? 'movie' : 'tv';

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

    loadSimilarMedia(id, type);
  }, [id, loadSimilarMedia, type]);

  if (error)
    return (
      <ErrorMessage
        message={error}
        onRetry={() => loadSimilarMedia(id, type)}
      />
    );

  if (!loading && !similarMedia.length) return null;

  return (
    <section>
      <Title>More Like This</Title>

      {loading ? (
        <SimilarMediaItemSkeleton count={11} />
      ) : (
        <SimilarList>
          {similarMedia.map((item) => {
            return (
              <SimilarMediaItem
                key={item.id}
                media={item}
                openModal={openModal}
              />
            );
          })}
        </SimilarList>
      )}

      {/* ---------------- MODAL ---------------- */}
      {isModalOpen && (
        <BaseModal closeModal={closeModal}>
          {type === 'movie' ? (
            <MoviePreviewModal movie={selectedMovie} closeModal={closeModal} />
          ) : (
            <SeriesPreviewModal
              seriesItem={selectedMovie}
              closeModal={closeModal}
            />
          )}
        </BaseModal>
      )}
    </section>
  );
};
export { SimilarMediaList };
