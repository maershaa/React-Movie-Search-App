import styled from '@emotion/styled';

const ActorInfoSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 50px;

  margin-bottom: 30px;
`;

const ActorImageWrapper = styled.div`
  max-width: 400px;

  img {
    max-width: 400px;
    border-radius: var(--radius-lg);
  }
`;

const GeneralInfo = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  text-align: left;
`;
export { ActorInfoSection, ActorImageWrapper, GeneralInfo };
