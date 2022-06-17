import { Container, Logout, Title, UserContainer, Username } from "./styles";
import store from "../../storage";
import { useNavigate } from "react-router";

const Navbar = (props) => {
  const { userName } = props;
  const { dispatch } = store;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch.auth.logout();
    navigate("/");
  };

  return (
    <Container>
      <Title>PROJETO TRANSPARÊNCIA</Title>
      <UserContainer>
        <Username to="/edit-profile">{userName}</Username>
        <Logout onClick={handleLogout}>logout</Logout>
      </UserContainer>
    </Container>
  );
};

export default Navbar;
