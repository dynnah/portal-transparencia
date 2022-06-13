const auth = {
  state: {
    email: "",
    id: undefined,
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
        id: undefined,
        nome: "",
      };
    },
  },
};

export default auth;
