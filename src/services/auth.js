import api from "./api";

export const loginService = async (credentials) => {
  try {
    const response = await api.post("/usuario/login/", credentials);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const registerService = async (newUser) => {
  try {
    const response = await api.post("/usuario/", newUser);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};
