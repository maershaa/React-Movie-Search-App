import styled from '@emotion/styled';

const ReviewCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background-color: var(--card-secondary-color);
  box-shadow: var(--shadow);

  width: 100%;
  height: 100%;

  padding: 20px;
  transition: var(--transition);

  :hover {
    border-color: var(--primary-color);
    box-shadow: var(--glow);
    cursor: pointer;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  width: 100%;

  gap: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  width: 100%;

  .review__user-name {
    color: var(--text-color);
    font-weight: 700;
  }

  .review__date {
    color: var(--text-secondary);
    font-size: 0.85rem;
  }
`;

const ReviewBody = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  .review__text {
    padding: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word; //??

    text-align: left;
    line-height: 2;
    opacity: 0.8;
  }
`;

export { ReviewCard, ReviewHeader, UserInfo, ReviewBody };
