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
  const normalizedPopularity = (popularity / 10).toFixed(1);
  return (
    <ActorInfoSection>
      <ActorImageWrapper>
        <img src={actorImg} alt={name} />
      </ActorImageWrapper>

      <GeneralInfo>
        <div className="actor-header">
          <h2>{name}</h2>
          <span className="actor-role">{known_for_department}</span>
        </div>

        <div className="actor-meta">
          <p className="details__label">
            Popularity:{' '}
            <span className="details__value ">
              {popularity ? `${normalizedPopularity} / 10` : 'Unknown'}{' '}
            </span>
          </p>
          <ActorBirthInfo birthday={birthday} deathday={deathday} />
          <ActorDeathInfo deathday={deathday} />
          <p className="details__label">
            Birthplace:
            <span className="details__value">
              {' '}
              {place_of_birth || 'Unknown'}
            </span>
          </p>
        </div>
        <div className="actor-extra">
          <p className="details__label">
            Also known as:
            <span className="details__value ">
              {' '}
              {also_known_as?.length ? also_known_as.join(', ') : name}
            </span>
          </p>
        </div>
        <p className="actor-bio">{biography}</p>
        <Link to={homepage} />
      </GeneralInfo>
    </ActorInfoSection>
  );
};

export { ActorInfo };
