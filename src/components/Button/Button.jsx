import { StyledButton } from "./styles";

const Button = (props) => {
  const { children, onClick, type } = props;
  return (
    <StyledButton onClick={onClick} type={type} >{children}</StyledButton>
  )
};

export default Button;
