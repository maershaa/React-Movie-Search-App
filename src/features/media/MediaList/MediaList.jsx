import { MediaCard } from '@/features';
import { MediaListContainer } from './MediaList.styled';
const MediaList = ({ mediaArray, openModal }) => {
  return (
    <MediaListContainer>
      {mediaArray.map(item => (
        <MediaCard key={item.id} movie={item} openModal={openModal} />
      ))}
    </MediaListContainer>
  );
};

export { MediaList };
