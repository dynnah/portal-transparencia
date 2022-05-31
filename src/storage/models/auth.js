const auth = {
  state: {
    email: "",
    nome: "",
  },
  reducers: {
    setUser(state, payload) {
      const { email, nome } = payload;
      return {
        email,
        nome,
      };
    },
  },
};

export default auth;
