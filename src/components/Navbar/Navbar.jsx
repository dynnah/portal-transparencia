import { Container, Title, Username } from "./styles";

const Navbar = (props) => {
  const { userName } = props;
  return (
    <Container>
      <Title>PROJETO TRANSPARÊNCIA</Title>
      <Username to="/edit-profile">{userName}</Username>
    </Container>
  );
};

export default Navbar;
