import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router";

import { ButtonContainer, Form, Main } from "../../components/Basic/Containers";
import { Title } from "../../components/Basic/Typography";
import { deleteUserService, editProfileService } from "../../services/auth";
import store from "../../storage";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  nome: Yup.string().required("O nome é obrigatório."),
});

const EditProfile = () => {
  const { id, nome } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { dispatch } = store;

  const onSubmit = async (values) => {
    const data = await editProfileService(id, values);
    if (data) {
      dispatch.auth.setUser(data);
      navigate("/dashboard");
    }
  };

  const { errors, handleChange, handleSubmit } = useFormik({
    validationSchema,
    validateOnChange: false,
    onSubmit,
    initialValues: {
      nome,
    },
  });

  const handleDelete = async () => {
    const success = await deleteUserService(id);
    if (success) {
      toast.success("Usuário deletado com sucesso!");
      dispatch.auth.logout();
      navigate("/");
    }
  };

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Title>Perfil</Title>
        <Input
          label="Nome"
          onChange={handleChange}
          name="nome"
          error={errors.nome}
          defaultValue={nome}
        />
        <ButtonContainer>
          <Button type="submit">Salvar</Button>
        </ButtonContainer>
      </Form>
      <ButtonContainer>
        <Button type="danger" onClick={handleDelete}>
          Deletar conta
        </Button>
      </ButtonContainer>
    </Main>
  );
};

export default EditProfile;
