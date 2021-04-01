const state = {
  token: "",
};

const mutations = {
  ADD_TOKEN(state, token) {
    state.token = token;
  },
};

const actions = {
  addToken({ commit }, token) {
    commit("ADD_TOKEN", token);
  },
};

const getters = {
  token: (state) => state.token,
};

const Token = {
  state,
  mutations,
  actions,
  getters,
};

export default Token