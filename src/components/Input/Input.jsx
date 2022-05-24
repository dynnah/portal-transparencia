import { Container, Label, StyledInput } from './styles';

const Input = (props) => {
  const { label, security } = props;
  return (
    <Container>
      <Label>
        {label}
      </Label>
      <StyledInput type={security ? "password" : "text"} />
    </Container>
  )
};

export default Input;
