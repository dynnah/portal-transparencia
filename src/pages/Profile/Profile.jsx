import { useSelector } from "react-redux";

import { Main } from "../../components/Basic/Containers";
import { Text } from "../../components/Basic/Typography";

const Profile = () => {
  const { nome } = useSelector((state) => state.auth);
  return (
    <Main>
      <Text>Seja Bem vindo(a) {nome}</Text>
    </Main>
  );
};

export default Profile;
