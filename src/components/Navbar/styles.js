import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 17px;
  box-sizing: border-box;
  position: fixed;
  z-index: 10;
`;

export const Title = styled.h3`
  color: inherit;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamily.comfortaa};
`;

export const Username = styled(Link)`
  color: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.015em;
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  text-decoration-color: ${({ theme }) => theme.colors.primary};
  transition: all 200ms ease-in-out;
  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.white};
  }
`;
