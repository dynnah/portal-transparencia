import { Component, createRef } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { ChartContainer } from "../styles";

class DashboardMinisterios extends Component {
  baseURL = "https://damp-sea-62257.herokuapp.com";
  //baseURL = "http://localhost:8080";

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
          keys: ["name"],
          type: "bar",
        },
      ],
    };
  }

  dashboardLinhaMinisterios() {
    var client = new XMLHttpRequest();
    client.open(
      "GET",
      this.baseURL + "/grafico/consultaGraficoLinhaMinisterios",
      false
    );
    client.send(null);
    let json = JSON.parse(client.responseText);
    console.log(json.data);
    return {
      title: {
        text: json.tituloGrafico,
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
      series: json.data,
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
            options={this.dashboardLinhaMinisterios()}
            ref={this.chart}
          />
        </ChartContainer>
      </>
    );
  }
}

export default DashboardMinisterios;
