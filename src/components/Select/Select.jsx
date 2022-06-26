import { StyledSelect } from "./styles";

const Select = (props) => {
  const { options = [], handleChange, selected } = props;

  return (
    <StyledSelect onChange={handleChange} value={selected} >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
