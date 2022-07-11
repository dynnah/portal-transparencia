import { useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import { requestMinisteriosCosts } from "../../../services/dashboards";
import { ChartContainer } from "../styles";
import Select from "../../../components/Select";
import store from "../../../storage";

const { dispatch } = store;

const requestData = async () => {
  const data = await requestMinisteriosCosts();
  if (data) {
    dispatch.dashboard.setMinisteriosCostsData(data);
  }
};

const CHART_OPTIONS = [
  {
    label: "Pizza",
    value: "pie",
  },
  {
    label: "Barra",
    value: "bar",
  },
];

const MinisteriosCostsDashboard = () => {
  const { ministeriosCosts } = useSelector((state) => state.dashboard);
  const ref = useRef();

  useEffect(() => {
    requestData();
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch.dashboard.setMinisteriosCostsDisplayType({ type: value });
  };

  return (
    <ChartContainer>
      <Select
        options={CHART_OPTIONS}
        selected={ministeriosCosts?.chart?.type}
        handleChange={handleChange}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={ministeriosCosts || {}}
        ref={ref.current}
      />
    </ChartContainer>
  );
};

export default MinisteriosCostsDashboard;
