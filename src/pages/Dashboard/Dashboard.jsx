import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { requestMinisterios } from "../../services/dashboards";
import store from "../../storage";
import DashboardMinisterios from "./dashboards/DashboardMinisterios.jsx";
import CostsDashboard from "./dashboards/CostsDashboard";
import TimelineDashboard from "./dashboards/TimelineDashboard.jsx";
import Intro from "./Intro.jsx";
import { Main } from "./styles.js";
import FunctionDashboard from "./dashboards/FunctionDashboard";
import ComparationDashboard from "./dashboards/ComparationDashboard";

const { dispatch } = store;

const requestAndFormatMinisterios = async () => {
  const data = await requestMinisterios();
  if (data) {
    const ministerios = data.map((ministerio) => ({
      label: ministerio.nom_org_sup,
      value: ministerio.cod_org_sup,
    }));
    dispatch.dashboard.setMinisterios(ministerios);
  }
};

const Dashboard = () => {
  const { nome } = useSelector((state) => state.auth);

  useEffect(() => {
    requestAndFormatMinisterios();
  }, []);

  return (
    <Main>
      <Navbar userName={nome} />
      <Intro />
      <DashboardMinisterios />
      <CostsDashboard />
      <FunctionDashboard />
      <TimelineDashboard />
      <ComparationDashboard />
    </Main>
  );
};

export default Dashboard;
