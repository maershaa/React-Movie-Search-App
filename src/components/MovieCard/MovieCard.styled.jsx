import styled from '@emotion/styled';

const MovieItem = styled.li`
  width: 300px;

  overflow: hidden;

  cursor: pointer;

  .movie-card__poster-wrapper {
    /* width: 130px;
    height: 180px; */
  }

  img {
    width: 300px;
    /* height: 180px; */

    border-radius: 8px;
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
  /* .movie-card__rating,
  .movie-card__year {
    color: var(--text-color);
  } */

  /* span {
    color: var(--text-color);
    font-size: 1rem;
  } */
`;

export { MovieItem };
