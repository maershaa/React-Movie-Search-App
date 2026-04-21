import styled from '@emotion/styled';
const SearchInputWrapper = styled.div`
  margin: 0 auto 25px auto;
  max-width: 50vw;

  position: relative;

  &:focus-within {
    //focus-within - способ "поднять" состояние фокуса с input на родителя
    border-color: var(--primary-color);
    border-radius: var(--radius-lg);
    box-shadow: var(--focus-ring);
  }

  input {
    width: 100%;
    padding: 10px 44px 10px 14px; /* справа место под кнопку */
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    background-color: var(--input-bg);
    color: var(--text-color);
    font-family: var(--font-main);

    box-shadow: var(--shadow);
    outline: none;
    transition: var(--transition);
  }

  input::placeholder {
    color: var(--text-secondary);
  }

  input:focus {
    border-radius: var(--radius-lg);
    border-color: var(--primary-color);
    box-shadow: var(--focus-ring);
  }

  .search-icon {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);

    width: 34px;
    height: 34px;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--primary-color);
    color: var(--white);

    border-radius: 50%;
    cursor: pointer;

    transition: var(--transition);
  }

  .search-icon:hover {
    background-color: var(--accent-color);
    transform: translateY(-50%) scale(1.05);
  }
`;

export { SearchInputWrapper };
