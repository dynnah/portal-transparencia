import { useCallback, useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import { requestComparationMinisterios } from "../../../services/dashboards";
import { ChartContainer } from "../styles";
import Select from "../../../components/Select";
import store from "../../../storage";
import { Row } from "../../../components/Basic/Containers";

const { dispatch } = store;

const requestData = async (id, gov1, gov2) => {
  const data = await requestComparationMinisterios(id, gov1, gov2);
  if (data) {
    dispatch.dashboard.setComparationData(data);
  }
};

const GOVERNMENT_OPTIONS = [
  {
    label: "Dilma",
    value: "DILMA",
  },
  {
    label: "Temer",
    value: "TEMER",
  },
  {
    label: "Bolsonaro",
    value: "BOLSONARO",
  },
];

const ComparationDashboard = () => {
  const { ministerios, comparation } = useSelector((state) => state.dashboard);
  const [selected, setSelected] = useState("");
  const [governmentOne, setGovernmentOne] = useState(
    GOVERNMENT_OPTIONS[0].value
  );
  const [governmentTwo, setGovernmentTwo] = useState(
    GOVERNMENT_OPTIONS[1].value
  );
  const ref = useRef();

  useEffect(() => {
    if (ministerios?.length > 0) {
      const { value } = ministerios[0];
      const gov1 = GOVERNMENT_OPTIONS[0].value;
      const gov2 = GOVERNMENT_OPTIONS[1].value;
      setSelected(value);
      requestData(value, gov1, gov2);
    }
  }, [ministerios]);

  const handleChange = useCallback(
    (event) => {
      const { value } = event.target;
      requestData(value, governmentOne, governmentTwo);
      setSelected(value);
    },
    [governmentOne, governmentTwo]
  );

  const handleGovernmentOneChange = useCallback(
    (event) => {
      const { value } = event.target;
      requestData(selected, value, governmentTwo);
      setGovernmentOne(value);
    },
    [governmentTwo, selected]
  );

  const handleGovernmentTwoChange = useCallback(
    (event) => {
      const { value } = event.target;
      requestData(selected, governmentOne, value);
      setGovernmentTwo(value);
    },
    [governmentOne, selected]
  );

  return (
    <ChartContainer>
      <Row>
        <Select
          options={ministerios}
          selected={selected}
          handleChange={handleChange}
        />
        <Select
          options={GOVERNMENT_OPTIONS}
          selected={governmentOne}
          handleChange={handleGovernmentOneChange}
        />
        <Select
          options={GOVERNMENT_OPTIONS}
          selected={governmentTwo}
          handleChange={handleGovernmentTwoChange}
        />
      </Row>
      <HighchartsReact
        highcharts={Highcharts}
        options={comparation || {}}
        ref={ref.current}
      />
    </ChartContainer>
  );
};

export default ComparationDashboard;
