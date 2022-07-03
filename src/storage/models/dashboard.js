const dashboard = {
  state: {
    ministerios: [],
    costs: {},
    functions: {},
    timeline: {},
    comparation: {},
    byYear: {},
    compareByYears: {},
  },
  reducers: {
    setMinisterios(state, payload) {
      return {
        ministerios: payload,
      };
    },
    setCostsData(state, payload) {
      const { data, tituloGrafico } = payload;
      return {
        ...state,
        costs: {
          title: {
            text: tituloGrafico,
          },
          chart: {
            width: 1000,
          },
          series: [
            {
              depth: 45,
              data: data,
              keys: ["name"],
              type: "bar",
            },
          ],
        },
      };
    },
    setFunctionsData(state, payload) {
      const { data, tituloGrafico } = payload;
      return {
        ...state,
        functions: {
          title: {
            text: tituloGrafico,
          },
          chart: {
            width: 1000,
          },
          series: [
            {
              data: data,
              keys: ["name"],
              type: "bar",
            },
          ],
        },
      };
    },
    setTimelineData(state, payload) {
      const { data, tituloGrafico } = payload;
      return {
        ...state,
        timeline: {
          title: {
            text: tituloGrafico,
          },
          chart: {
            width: 1000,
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
          series: data,
        },
      };
    },
    setComparationData(state, payload) {
      const { data, tituloGrafico } = payload;
      return {
        ...state,
        comparation: {
          title: {
            text: tituloGrafico,
          },
          chart: {
            width: 1000,
            type: "bar",
          },
          series: data,
        },
      };
    },
    setByYearData(state, payload) {
      const { data, tituloGrafico } = payload;
      return {
        ...state,
        byYear: {
          title: {
            text: tituloGrafico,
          },
          chart: {
            width: 1000,
            type: "bar",
          },
          series: [
            {
              data: data,
              keys: ["name"],
              type: "pie",
            },
          ],
        },
      };
    },
    setCompareByYearData(state, payload) {
      const { data, tituloGrafico } = payload;
      return {
        ...state,
        compareByYears: {
          title: {
            text: tituloGrafico,
          },
          chart: {
            width: 1000,
          },
          series: [
            {
              data: data,
              keys: ["name"],
              type: "bar",
            },
          ],
        },
      };
    },
  },
};

export default dashboard;