import { MediaList } from '@/features';
import { useMovieModal } from '@/shared/hooks';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmography } from '@/api';
import { Loader, ErrorMessage } from '@/shared';

const ActorFilmography = () => {
  const [mediaArr, setMediaArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { openModal } = useMovieModal();
  const { id } = useParams();

  const loadFilmography = useCallback(async (actorId) => {
    try {
      setLoading(true);
      setError('');
      const data = await getFilmography(actorId);

      const filmography = data.cast
        .filter((film) => film.vote_count > 100 && film.poster_path !== null)
        .sort((a, b) => b.vote_count - a.vote_count)
        .filter(
          (film, index, array) =>
            index === array.findIndex((t) => t.id === film.id), // Убираем дубли
        )
        .slice(0, 20); // Ограничиваем отображаемое количество

      setMediaArr(filmography);
    } catch {
      setError('Failed to load actor details');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    loadFilmography(id);
  }, [id, loadFilmography]);

  if (loading) return <Loader />;

  if (error)
    return <ErrorMessage message={error} onRetry={() => loadFilmography(id)} />;

  if (mediaArr.length === 0) {
    return null;
  }
  return <MediaList mediaArray={mediaArr} openModal={openModal}></MediaList>;
};

export { ActorFilmography };
