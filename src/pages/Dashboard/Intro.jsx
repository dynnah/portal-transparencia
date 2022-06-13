import { Highlight } from "../../components/Basic/Typography";
import { Container, PartialContainer, WelcomeImage } from "./styles";
import DashboardSVG from "../../assets/dashboard.svg";

const Intro = () => {
  return (
    <Container>
      <PartialContainer>
        <Highlight>
          Um projeto aberto que utiliza a tecnologia a fim de trazer informações
          de forma acessível a qualquer pessoa.
        </Highlight>
      </PartialContainer>
      <WelcomeImage src={DashboardSVG} />
    </Container>
  );
};

export default Intro;
