import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar.jsx";
// import Highcharts from "highcharts/highstock";
// import HighchartsReact from "highcharts-react-official";
import DashboardMinisterios from "./dashboards/DashboardMinisterios.jsx";
import Intro from "./Intro.jsx";
import { Main } from "./styles.js";

const Dashboard = () => {
  const { nome } = useSelector((state) => state.auth);
  return (
    <Main>
      <Navbar userName={nome} />
      <Intro />
      <DashboardMinisterios />
    </Main>
  );
};

export default Dashboard;
