import styled from '@emotion/styled';

const ActorInfoSection = styled.section`
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 50px;

  margin-bottom: 30px; */
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;

  padding: 2rem;
  position: relative;
  overflow: hidden;

  border-radius: var(--radius-lg);
  box-shadow: var(--glow);

  margin-bottom: 50px;
`;

const ActorImageWrapper = styled.div`
  /* max-width: 400px;

  img {
    max-width: 400px;
    border-radius: var(--radius-lg);
  } */
  position: relative;

  img {
    width: 100%;
    border-radius: var(--radius-lg);
    object-fit: cover;
  }
`;

const GeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .actor-header {
    display: flex;
    flex-direction: column;
    gap: 6px;

    h2 {
      font-size: 2rem;
      margin: 0;
    }

    .actor-role {
      color: var(--primary-color);
      font-weight: 600;
    }
  }

  .actor-meta {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    .details__label {
      background: var(--accent);
      padding: 12px;
      border-radius: var(--radius-md);

      display: block;
      font-size: 1rem;
      color: var(--text-secondary);

      .details__value {
        font-size: 1rem;
        color: var(--text-color);
      }
    }
  }

  .actor-extra {
    color: var(--text-secondary);
    font-size: 1rem;

    .details__value {
      color: var(--primary-color);
      font-size: 1.1rem;
      font-weight: 700;
    }
  }

  .actor-bio {
    max-height: 300px;
    overflow-y: auto;

    padding-left: 16px;
    padding-right: 10px;

    border-left: 3px solid var(--primary-color);

    line-height: 1.7;
    font-size: 0.95rem;

    color: var(--text-secondary);

    text-align: left;
    font-style: italic;
  }
`;
export { ActorInfoSection, ActorImageWrapper, GeneralInfo };
