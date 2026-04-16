import styled from '@emotion/styled';
const FilterInputWrapper = styled.div`
  margin: 25px auto;
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
`;

export { FilterInputWrapper };
