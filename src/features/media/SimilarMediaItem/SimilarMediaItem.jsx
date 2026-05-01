import { getImage } from '@/shared';
import { MediaReleaseDate } from '@/features';
import { SimilarItem, Title } from './SimilarMediaItem.styled';
const SimilarMediaItem = ({ media, openModal }) => {
  const {
    poster_path,
    original_title,
    release_date,
    original_name,
    first_air_date,
  } = media;

  const poster = getImage(poster_path, 300);

  return (
    <SimilarItem onClick={() => openModal(media)}>
      <img src={poster} alt={original_title || original_name} />
      <Title> {original_title || original_name}</Title>
      <MediaReleaseDate date={release_date || first_air_date} />
    </SimilarItem>
  );
};

export { SimilarMediaItem };
