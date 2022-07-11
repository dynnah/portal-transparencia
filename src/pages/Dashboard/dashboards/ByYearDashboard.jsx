import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import { requestByYearDashboard } from "../../../services/dashboards";
import { ChartContainer } from "../styles";
import Select from "../../../components/Select";
import store from "../../../storage";
import { Row } from "../../../components/Basic/Containers";

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

  const handleDisplayTypeChange = (event) => {
    const { value } = event.target;
    dispatch.dashboard.setByYearDisplayType({ type: value });
  };

  return (
    <ChartContainer>
      <Row>
        <Select
          options={YEARS}
          selected={selected}
          handleChange={handleChange}
        />
        <Select
          options={CHART_OPTIONS}
          selected={byYear?.chart?.type}
          handleChange={handleDisplayTypeChange}
        />
      </Row>
      <HighchartsReact
        highcharts={Highcharts}
        options={byYear || {}}
        ref={ref.current}
      />
    </ChartContainer>
  );
};

export default ByYearDashboard;
