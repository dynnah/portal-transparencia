import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import { requestByYearDashboard } from "../../../services/dashboards";
import { ChartContainer } from "../styles";
import Select from "../../../components/Select";
import store from "../../../storage";

const { dispatch } = store;

const requestData = async (year) => {
  const data = await requestByYearDashboard(year);
  if (data) {
    dispatch.dashboard.setByYearData(data);
  }
};

const MIN_YEAR = 2014;
const LIMIT_YEAR = 2023;

const YEARS = Array.apply(null, Array(LIMIT_YEAR - MIN_YEAR)).map(
  (value, index) => {
    return {
      label: `${MIN_YEAR + index}`,
      value: `${MIN_YEAR + index}`,
    };
  }
);

const ByYearDashboard = () => {
  const { byYear } = useSelector((state) => state.dashboard);
  const [selected, setSelected] = useState("");
  const ref = useRef();

  useEffect(() => {
    setSelected(2014);
    requestData(2014);
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    requestData(value);
    setSelected(value);
  };

  return (
    <ChartContainer>
      <Select options={YEARS} selected={selected} handleChange={handleChange} />
      <HighchartsReact
        highcharts={Highcharts}
        options={byYear || {}}
        ref={ref.current}
      />
    </ChartContainer>
  );
};

export default ByYearDashboard;
