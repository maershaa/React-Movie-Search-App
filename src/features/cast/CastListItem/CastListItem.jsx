import { getAvatar } from '@/shared';
import { CastItem, CastInfo, LinkWrapper } from './CastListItem.styled';
import { Avatar } from '@/shared';
import { Link } from 'react-router-dom';

const CastListItem = ({ actor }) => {
  const { id, original_name, character, profile_path } = actor;
  const avatar = getAvatar(profile_path, 185);

  return (
    <CastItem>
      <LinkWrapper as={Link} to={`/actor/${id}`}>
        <div className="cast__avatar-wrapper">
          <Avatar
            src={avatar}
            name={original_name}
            size={'145px'}
            variant="circle"
          />
        </div>
        <CastInfo>
          <h4 className="cast__actor-name">{original_name}</h4>
          <p className="cast__character-name">{character}</p>
        </CastInfo>
      </LinkWrapper>
    </CastItem>
  );
};

export { CastListItem };
