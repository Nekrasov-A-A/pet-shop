export default {
  state: {
    loggedIn: "",
    userName: "",
  },
  getters: {
    isLoggedIn: (s) => s.loggedIn,
    getUserName: (s) => s.userName,
  },
  mutations: {
    setLoggedIn: (s, value) => (s.loggedIn = value),
    setUserName: (s, value) => (s.userName = value),
  },
  actions: {
    changeLoggedIn({ commit }, value) {
      commit("setLoggedIn", value);
    },
    changeUserName({ commit }, payload) {
      commit("setUserName", payload);
    },
  },
};
