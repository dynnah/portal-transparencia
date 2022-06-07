import { Error, Container, Label, StyledInput } from "./styles";

const Input = (props) => {
  const { defaultValue, label, security, onChange, name, error } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput
        type={security ? "password" : "text"}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
