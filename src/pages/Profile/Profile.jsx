import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import DashboardMinisterios from "./dashboards/DashboardMinisterios.jsx";


const App = () => (

  <div align="center">
    <DashboardMinisterios />
  </div>
);


render(<App />, document.getElementById("root"));

export default App;
