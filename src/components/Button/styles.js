import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 15px 30px;
  border-radius: 4px;
  background-color: #cecece;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  &:hover {
    filter: contrast(0.5);
  }
`;

export const StyledDangerButton = styled.button`
  border: none;
  outline: none;
  padding: 15px 30px;
  border-radius: 4px;
  background-color: transparent;
  transition: all 300ms ease-in-out;
  color: #da4e4e;
  filter: contrast(0.9);
  cursor: pointer;
  &:hover {
    filter: contrast(1);
  }
`;
