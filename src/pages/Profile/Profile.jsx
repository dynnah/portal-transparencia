import { useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";

import { EditLink } from "./styles";
import { Main } from "../../components/Basic/Containers";
import { Text } from "../../components/Basic/Typography";

const Profile = () => {
  const { nome } = useSelector((state) => state.auth);
  return (
    <Main>
      <Text>Seja Bem vindo(a) {nome}</Text>
      <EditLink to="/edit-profile">
        <MdEdit />
      </EditLink>
    </Main>
  );
};

export default Profile;
