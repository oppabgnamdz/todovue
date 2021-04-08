import { createStore } from "vuex";
import token from "./modules/Token";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  modules: {
    token,
  },
  plugins: [
    createPersistedState({
      reducer: (persistedState) => {
        return {token:persistedState.token};
      },
    }),
  ],
});
