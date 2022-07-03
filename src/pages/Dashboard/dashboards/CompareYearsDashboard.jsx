import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import { requestCompareByYearsDashboard } from "../../../services/dashboards";
import { ChartContainer } from "../styles";
import Select from "../../../components/Select";
import store from "../../../storage";
import { Row } from "../../../components/Basic/Containers";
import { useCallback } from "react";

const { dispatch } = store;

const requestData = async (year1, year2) => {
  const data = await requestCompareByYearsDashboard(year1, year2);
  if (data) {
    dispatch.dashboard.setCompareByYearData(data);
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

const CompareYearsDashboard = () => {
  const { compareByYears } = useSelector((state) => state.dashboard);
  const [year1, setYear1] = useState("");
  const [year2, setYear2] = useState("");
  const ref = useRef();

  useEffect(() => {
    setYear1(2014);
    setYear2(2015);
    requestData(2014, 2015);
  }, []);

  const handleChangeYear1 = useCallback(
    (event) => {
      const { value } = event.target;
      requestData(value, year2);
      setYear1(value);
    },
    [year2]
  );

  const handleChangeYear2 = useCallback(
    (event) => {
      const { value } = event.target;
      requestData(year1, value);
      setYear2(value);
    },
    [year1]
  );

  return (
    <ChartContainer>
      <Row>
        <Select
          options={YEARS}
          selected={year1}
          handleChange={handleChangeYear1}
        />
        <Select
          options={YEARS}
          selected={year2}
          handleChange={handleChangeYear2}
        />
      </Row>
      <HighchartsReact
        highcharts={Highcharts}
        options={compareByYears || {}}
        ref={ref.current}
      />
    </ChartContainer>
  );
};

export default CompareYearsDashboard;
