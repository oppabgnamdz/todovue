import axios from "axios";
import { url, auth } from "../../../constants";
const state = {
  todos: [],
};
const mutations = {
  GET_TODOS(state, payload) {
    state.todos = payload;
  },
  UPDATE_TODOS(state, payload) {
    state.todos = payload;
  },
  DELETE_TODOS(state, payload) {
    state.todos = payload;
  },
};
const actions = {
  async getTodos({ commit }) {
    const response = await axios.get(url, {
      headers: { Authorization: auth },
    });
    const data = response.data.sort((todo1, todo2) => {
      let dateTime1 = new Date(todo1["created_at"]);
      let dateTime2 = new Date(todo2["created_at"]);
      let time1 = dateTime1.getTime();
      let time2 = dateTime2.getTime();
      return time1 - time2;
    });
    commit("GET_TODOS", data);
  },

  //   async updateTodos({ commit }, todo) {
  //     const response = await axios.put(
  //       `${url}/${todo.id}`,
  //       { content: todo.content },
  //       {
  //         headers: { Authorization: auth },
  //       }
  //     );
  //   },
};
const getters = {
  todos: (state) => state.todos,
};

const Todos = {
    state,
    mutations,
    actions,
    getters
}
export default Todos;