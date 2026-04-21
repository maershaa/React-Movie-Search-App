import styled from '@emotion/styled';

const MoviePageWrapper = styled.div`
  .hero {
    display: flex;
    align-items: center;
    justify-content: left;

    margin-bottom: 50px;
    margin-left: 20px;
  }

  .end-message {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 30px 0;
    color: #999;
    font-size: 2rem;
  }

  .end-message::before,
  .end-message::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e0e0e0;
    margin: 0 12px;
  }
`;

export { MoviePageWrapper };
