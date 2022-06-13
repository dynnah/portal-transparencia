import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  height: calc(80vh - 70px);
  margin-top: 70px;
  align-items: center;
  padding: 0 80px;
  position: relative;
  overflow: hidden;
`;

export const PartialContainer = styled.div`
  width: 50%;
`;

export const ChartContainer = styled.div`
  width: 70%;
  margin: 35px 0;
  align-self: center;
`;

export const EditLink = styled(Link)`
  margin-left: 10px;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WelcomeImage = styled.img`
  min-width: 400px;
  max-width: 900px;
  width: 64%;
  height: 100%;
  position: absolute;
  right: 0;
`;
