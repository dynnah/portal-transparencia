import * as yup from "yup";
import { useFormik } from "formik";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { ButtonContainer, Form, Main, Title } from "./styles";
import { loginService } from "../../services/auth";

const validationSchema = yup.object({
  email: yup.string().email("Email invalido").required("Email é requerido"),
  senha: yup.string().required("Senha é obrigatório"),
});

const initialValues = {
  email: "",
  senha: "",
};

const Login = () => {
  const onSubmit = async (values) => {
    const data = loginService(values);
  };

  const { errors, handleChange, values, handleSubmit } = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Title>Portal Transparência</Title>
        <Input label="Email" onChange={handleChange} name="email" />
        <Input label="Senha" security onChange={handleChange} name="senha" />
        <ButtonContainer>
          <Button type="submit">Login</Button>
        </ButtonContainer>
      </Form>
    </Main>
  );
};

export default Login;
