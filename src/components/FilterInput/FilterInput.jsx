// Нигде не используется

import { FilterInputWrapper } from './FilterInput.styled';
const FilterInput = ({ placeholder = '', value, onSearchChange }) => {
  return (
    <FilterInputWrapper>
      <input
        type="text"
        className="filter-input"
        value={value}
        onChange={e => onSearchChange(e.target.value)}
        placeholder={placeholder}
      />
    </FilterInputWrapper>
  );
};
export { FilterInput };
