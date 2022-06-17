import api from "./api";

export const loginService = async (credentials) => {
  try {
    const response = await api.post("/usuario/login/", credentials);
    if (response.status === 200) {
      return response.data;
    }
    return;
  } catch (error) {
    console.log(error);
    const {
      data: { message },
    } = error.response;
    if (message) {
      throw new Error(message);
    }
    throw new Error("Falha ao executar login.");
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
    const {
      data: { message },
    } = error.response;
    if (message) {
      throw new Error(message);
    }
    throw new Error("Falha ao cadastrar usuário.");
  }
};

export const editProfileService = async (id, profile) => {
  try {
    const response = await api.put(`/usuario/${id}`, profile);
    if (response.status === 200) {
      return response.data;
    }
    return;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserService = async (id) => {
  try {
    const response = await api.delete(`/usuario/${id}`);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
};
