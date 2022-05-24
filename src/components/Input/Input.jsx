import { Container, Label, StyledInput } from "./styles";

const Input = (props) => {
  const { label, security, onChange, name, value } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput
        type={security ? "password" : "text"}
        onChange={onChange}
        name={name}
      />
    </Container>
  );
};

export default Input;
