import { ButtonContainer, Form, Main, Title } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = () => {
  return (
    <Main>
      <Form>
        <Title>Portal Transparência</Title>
        <Input label="Email" />
        <Input label="Senha" security />
        <ButtonContainer>
          <Button type="submit">Login</Button>
        </ButtonContainer>
      </Form>
    </Main>
  )
};

export default Login;
