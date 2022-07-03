import api from "./api";

export const requestMinisterios = async () => {
  try {
    const response = await api.get("/grafico/listaOrgaosSuperiores");
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestCostsMinisterios = async (id) => {
  try {
    const response = await api.get(
      `/grafico/consultaPorOrgaoSuperior?codOrgaoSuperior=${id}`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestFuctionsMinisterios = async (id) => {
  try {
    const response = await api.get(
      `/grafico/consultaPorFuncao?codOrgaoSuperior=${id}&codFuncao=1`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestTimelineMinisterios = async (id) => {
  try {
    const response = await api.get(
      `/grafico/linhaDoTempoMinisterio?cod_org_sup=${id}`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestComparationMinisterios = async (id, gov1, gov2) => {
  try {
    const response = await api.get(
      `/grafico/comparacaoGastosMinisterioGoverno?cod_org_sup=${id}&governo1=${gov1}&governo2=${gov2}`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestByYearDashboard = async (year) => {
  try {
    const response = await api.get(
      `/grafico/consultaGastosPeriodoAno?ano1=${year}`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const requestCompareByYearsDashboard = async (year1, year2) => {
  try {
    const response = await api.get(
      `/grafico/consultaGastosPeriodoAnos?ano1=${year1}&ano2=${year2}`
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
