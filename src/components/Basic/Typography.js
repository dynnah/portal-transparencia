import styled from "styled-components";

export const Highlight = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 60px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
`;

export const Title = styled.h1`
  font-size: 32px;
  letter-spacing: 0.3px;
  font-weight: 600px;
  color: #9c9c9c;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
`;

export const Text = styled.p`
  font-size: 12px;
  letter-spacing: 0.4px;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
`;
