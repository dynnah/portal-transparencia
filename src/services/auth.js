import api from "./api";

export const loginService = async (credentials) => {
  try {
    const response = await api.post("/usuario/login/", credentials);
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
};
