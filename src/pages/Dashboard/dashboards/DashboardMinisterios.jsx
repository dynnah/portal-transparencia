import { Component, createRef } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { ChartContainer } from "../styles";

const YEARS = [
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
];

const MOCKED_CHART = {
  title: {
    text: "Gasto Anual por Ministério",
  },
  yAxis: {
    title: {
      text: "Milhões de R$",
    },
  },

  xAxis: {
    title: {
      text: "Ano",
    },
  },
  type: "line",
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2014,
    },
  },
  series: [
    {
      name: "Ministério da Defesa",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério da Educação",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério da Cidadania",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério do Meio Ambiente",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério de Minas e Energia",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério da Saúde",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério da Infraestrutura",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério da Agricultura, Pecuária e Abastecimento",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério das Relações Exteriores",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
    {
      name: "Ministério do Desenvolvimento Regional",
      data: YEARS.map(() => Math.round(Math.random() * 1000)),
    },
  ],
};

class DashboardMinisterios extends Component {
  baseURL = "https://damp-sea-62257.herokuapp.com";

  constructor() {
    super();
    this.highcharts = Highcharts;

    this.chart = createRef();
  }

  dashboardMinisterios() {
    var client = new XMLHttpRequest();
    client.open(
      "GET",
      this.baseURL + "/grafico/consultaTodosOrgaosSuperiores",
      false
    );
    client.send(null);
    let json = JSON.parse(client.responseText);

    return {
      title: {
        text: json.tituloGrafico,
      },
      series: [
        {
          depth: 45,
          data: json.data,
          keys: ["y", "name"],
          type: "pie",
        },
      ],
    };
  }

  dashboardGastosMinisterioEducacao() {
    var client = new XMLHttpRequest();
    client.open(
      "GET",
      this.baseURL + "/grafico/consultaPorOrgaoSuperior?codOrgaoSuperior=26000",
      false
    );
    client.send(null);
    let json = JSON.parse(client.responseText);

    return {
      title: {
        text: json.tituloGrafico,
      },
      series: [
        {
          depth: 45,
          data: json.data,
          keys: ["y", "name"],
          type: "bar",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <ChartContainer>
          <HighchartsReact
            highcharts={this.highcharts}
            constructorType={"chart"}
            options={this.dashboardMinisterios()}
            ref={this.chart}
          />
        </ChartContainer>
        <ChartContainer>
          <HighchartsReact
            highcharts={this.highcharts}
            constructorType={"chart"}
            options={this.dashboardGastosMinisterioEducacao()}
            ref={this.chart}
          />
        </ChartContainer>
        <ChartContainer>
          <HighchartsReact
            highcharts={this.highcharts}
            constructorType={"chart"}
            options={MOCKED_CHART}
            ref={this.chart}
          />
        </ChartContainer>
      </>
    );
  }
}

export default DashboardMinisterios;
