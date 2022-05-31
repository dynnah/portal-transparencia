import { Error, Container, Label, StyledInput } from "./styles";

const Input = (props) => {
  const { label, security, onChange, name, error } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput
        type={security ? "password" : "text"}
        onChange={onChange}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
