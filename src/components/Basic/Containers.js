import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin: 20px 0;
`;

export const Form = styled.form`
  border-radius: 20px;
  padding: 20px 40px;
  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.15);
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
