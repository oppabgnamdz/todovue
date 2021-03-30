import Vuex from "vuex";
import todos from "./modules/Todo";
const store = new Vuex.Store({
  modules: {
    todos,
  },
});
export default store;
