export default {
  state: {
    loggedIn: "",
  },
  getters: {
    isLoggedIn: (s) => s.loggedIn,
  },
  mutations: {
    setLoggedIn: (s, value) => (s.loggedIn = value),
  },
  actions: {
    changeLoggedIn({ commit }, value) {
      commit("setLoggedIn", value);
    },
  },
};
