import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import { dashboardMinisteriosService, teste } from "../../../services/auth";

class DashboardMinisterios extends React.Component {

    baseURL = "https://damp-sea-62257.herokuapp.com";



    constructor() {
        super();
        this.highcharts = Highcharts;

        this.chart = React.createRef();


    }

    componentDidMount() {

    }

    dashboardMinisterios() {
        var client = new XMLHttpRequest();
        client.open('GET', this.baseURL + '/grafico/consultaTodosOrgaosSuperiores', false);
        client.send(null);
        let json = JSON.parse(client.responseText);

        return {
            title: {
                text: json.tituloGrafico
            },
            series: [
                {
                    depth: 45,
                    data: json.data,
                    keys: ["y", "name"],
                    type: "pie"
                }
            ]
        };
    }

    render() {
        let dados = this.dashboardMinisterios();

        return (
            <HighchartsReact
                highcharts={this.highcharts}
                constructorType={"chart"}
                options={this.dashboardMinisterios()}
                ref={this.chart}
            />
        );
    }
}

export default DashboardMinisterios;
