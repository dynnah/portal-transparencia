import { StyledButton, StyledDangerButton } from "./styles";

const DefaultButton = (props) => {
  const { children, onClick, type, loading } = props;

  return (
    <StyledButton onClick={onClick} type={type} disabled={loading}>
      {loading ? "Carregando" : children}
    </StyledButton>
  );
};

const DangerButton = (props) => {
  const { children, onClick, type } = props;
  return (
    <StyledDangerButton onClick={onClick} type={type}>
      {children}
    </StyledDangerButton>
  );
};

const Button = (props) => {
  const { type } = props;

  switch (type) {
    case "danger":
      return <DangerButton {...props} />;
    default:
      return <DefaultButton {...props} />;
  }
};

export default Button;
