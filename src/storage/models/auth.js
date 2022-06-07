const auth = {
  state: {
    email: "",
    id: "",
    nome: "",
  },
  reducers: {
    setUser(state, payload) {
      const { email, id, nome } = payload;
      return {
        email,
        id,
        nome,
      };
    },
    logout() {
      return {
        email: "",
        id: "",
        nome: "",
      };
    },
  },
};

export default auth;
