import styled from "styled-components";

export const StyledSelect = styled.select`
  min-width: 300px;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  padding: 8px 2px;
  border-radius: 4px;
  background-color: transparent;
  margin-bottom: 15px;
  option {
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
  }
`;
