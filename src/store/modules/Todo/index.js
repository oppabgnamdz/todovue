import axios from "axios";
import { URL } from "../../../constants";

const headers = (auth) => {
  return { headers: { Authorization: auth } };
};
const state = {
  todos: [],
};
const mutations = {
  GET_TODOS(state, payload) {
    state.todos = payload;
  },
  ADD_TODOS(state, payload) {
    state.todos.push(payload);
  },
  UPDATE_TODOS(state, { id, content }) {
    const todo = state.todos.find((item) => item.id === id);
    todo.content = content;
  },
  DELETE_TODOS(state, id) {
    const newTodos = state.todos.filter((todo) => todo.id !== id);
    state.todos = newTodos;
  },
};
const actions = {
  async getTodos({ commit }, auth) {
    const response = await axios.get(URL, headers(auth));
    const data = response.data.sort((todo1, todo2) => {
      let dateTime1 = new Date(todo1["created_at"]);
      let dateTime2 = new Date(todo2["created_at"]);
      let time1 = dateTime1.getTime();
      let time2 = dateTime2.getTime();
      return time1 - time2;
    });
    commit("GET_TODOS", data);
  },

  async addTodo({ commit }, { content, auth }) {
    const response = await axios.post(URL, { content }, headers(auth));
    if (response.status === 201) {
      commit("ADD_TODOS", response.data);
    }
  },

  async deleteTodo({ commit }, { id, auth }) {
    const response = await axios.delete(`${URL}/${id}`, headers(auth));
    if (response.status === 204) {
      commit("DELETE_TODOS", id);
    }
  },

  async updateTodos({ commit }, { id, content,auth }) {
    const response = await axios.put(`${URL}/${id}`, { content }, headers(auth));
    if (response.status === 200) {
      commit("UPDATE_TODOS", { id, content });
    }
  },
};

const getters = {
  todos: (state) => state.todos,
};

const Todos = {
  state,
  mutations,
  actions,
  getters,
};

export default Todos;
