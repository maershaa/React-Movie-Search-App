import styled from '@emotion/styled';

const MovieItem = styled.li`
  width: 130px;

  overflow: hidden;

  .movie-card__poster-wrapper {
    width: 130px;
    height: 180px;
  }

  img {
    width: 130px;
    height: 180px;

    border-radius: 8px;
  }

  .movie-card__content {
  }

  h4 {
    white-space: nowrap;
    overflow: hidden; /* Скрыть текст, который не помещается */
    text-overflow: ellipsis; /* Добавить троеточие ... */
  }
  .movie-card__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
  }
  .movie-card__rating,
  .movie-card__year {
    color: var(--text-color);
  }
`;

export { MovieItem };
