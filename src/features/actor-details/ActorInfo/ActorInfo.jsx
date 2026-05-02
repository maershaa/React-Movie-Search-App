import { getImage } from '@/shared/helpers';
import { Link } from 'react-router-dom';
import {
  ActorInfoSection,
  ActorImageWrapper,
  GeneralInfo,
} from './ActorInfo.styled';
import { ActorBirthInfo, ActorDeathInfo } from '@/features';

const ActorInfo = ({ actor }) => {
  const {
    name,
    also_known_as,
    birthday,
    deathday,
    place_of_birth,
    popularity,
    profile_path,
    biography,
    known_for_department,
    homepage,
  } = actor;

  const actorImg = getImage(profile_path, 500);

  return (
    <ActorInfoSection>
      <ActorImageWrapper>
        <img src={actorImg} alt={name} />
      </ActorImageWrapper>
      <GeneralInfo>
        <h2 className="actor__name">{name}</h2>
        <p>
          Known for: <span>{known_for_department}</span>
        </p>
        <p>
          Popularity: <span>{popularity} </span>
        </p>
        <ActorBirthInfo birthday={birthday} deathday={deathday} />
        <ActorDeathInfo deathday={deathday} />
        <p>
          Birthplace: <span>{place_of_birth}</span>
        </p>
        <p>
          Also known as: <span>{also_known_as}</span>
        </p>
        <p>{biography}</p>
        <Link to={homepage} />
      </GeneralInfo>
    </ActorInfoSection>
  );
};

export { ActorInfo };
