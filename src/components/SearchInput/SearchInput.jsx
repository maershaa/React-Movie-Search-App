import { GoSearch } from 'react-icons/go';
import { BaseInputWrapper } from '@/assets/styles/BaseInput.styled';
import { useState } from 'react';

const SearchInput = ({ placeholder = '', updateQueryString }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onSearchButtonClick(searchValue);
    }
  };

  const clearInput = () => {
    setSearchValue('');
  };

  const onSearchButtonClick = value => {
    if (!value) return;
    console.log('Клик по SearchButton');

    updateQueryString(value);
    clearInput();
  };

  return (
    <BaseInputWrapper>
      <input
        type="text"
        className="search-input"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />

      <button type="button" onClick={() => onSearchButtonClick(searchValue)}>
        <GoSearch className="search-icon" />
      </button>
    </BaseInputWrapper>
  );
};

export { SearchInput };
