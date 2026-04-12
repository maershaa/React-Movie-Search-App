import { BaseInputWrapper } from '@/assets/styles/BaseInput.styled';
const FilterInput = ({ placeholder = '', value, onSearchChange }) => {
  return (
    <BaseInputWrapper>
      <input
        type="text"
        className="filter-input"
        value={value}
        onChange={e => onSearchChange(e.target.value)}
        placeholder={placeholder}
      />
    </BaseInputWrapper>
  );
};
export { FilterInput };
