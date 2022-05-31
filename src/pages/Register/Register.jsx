import * as yup from "yup";
import { useFormik } from "formik";

import { ButtonContainer, Form, Main } from "../../components/Basic/Containers";
import { Title } from "../../components/Basic/Typography";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { registerService } from "../../services/auth";

const validationSchema = yup.object({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: yup.string().required("Senha é obrigatório"),
  nome: yup.string().required("Nome é obrigatório"),
  senhaConfirm: yup
    .string()
    .oneOf([yup.ref("senha"), null], "As senhas devem ser iguais")
    .required("Senha é obrigatório"),
});

const initialValues = {
  email: "",
  senha: "",
  nome: "",
};

const Register = () => {
  const onSubmit = async (values) => {
    const { nome, email, senha } = values;
    const success = await registerService({
      nome,
      email,
      senha,
    });
  };

  const { errors, handleChange, handleSubmit } = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    validateOnChange: false,
  });

  return (
    <Main>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <Input
          label="Nome"
          onChange={handleChange}
          name="nome"
          error={errors.nome}
        />
        <Input
          label="Email"
          onChange={handleChange}
          name="email"
          error={errors.email}
        />
        <Input
          label="Senha"
          onChange={handleChange}
          name="senha"
          error={errors.senha}
          security
        />
        <Input
          label="Cofirme sua senha"
          onChange={handleChange}
          name="senhaConfirm"
          error={errors.senhaConfirm}
          security
        />
        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
      </Form>
    </Main>
  );
};

export default Register;
