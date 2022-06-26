import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import { requestCostsMinisterios } from "../../../services/dashboards";
import { ChartContainer } from "../styles";
import Select from "../../../components/Select";
import store from "../../../storage";

const { dispatch } = store;

const requestData = async (id) => {
  const data = await requestCostsMinisterios(id);
  if (data) {
    dispatch.dashboard.setCostsData(data);
  }
};

const CostsDashboard = () => {
  const { ministerios, costs } = useSelector((state) => state.dashboard);
  const [selected, setSelected] = useState("");
  const ref = useRef();

  useEffect(() => {
    if (ministerios?.length > 0) {
      const { value } = ministerios[0];
      setSelected(value);
      requestData(value);
    }
  }, [ministerios]);

  const handleChange = (event) => {
    const { value } = event.target;
    requestData(value);
    setSelected(value);
  };

  return (
    <ChartContainer>
      <Select
        options={ministerios}
        selected={selected}
        handleChange={handleChange}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={costs || {}}
        ref={ref.current}
      />
    </ChartContainer>
  );
};

export default CostsDashboard;
