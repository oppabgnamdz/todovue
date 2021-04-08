import axios from "axios";
import { URL, ROUTER_BASE } from "../constants";
import store from "../store";

const URl_TODOS = URL + ROUTER_BASE.TODOS;
const headers = (auth) => {
  return { headers: { Authorization: auth } };
};

export const getTodos = async () => {
  const token = store.getters.token;
  const response = await axios.get(URl_TODOS, headers(`Bearer ${token}`));
  const data = response.data.items.sort((todo1, todo2) => {
    let dateTime1 = new Date(todo1["created_at"]);
    let dateTime2 = new Date(todo2["created_at"]);
    let time1 = dateTime1.getTime();
    let time2 = dateTime2.getTime();
    return time1 - time2;
  });

  return data;
};

export const addTodo = async (content) => {
  const token = store.getters.token;
  const response = await axios.post(
    URl_TODOS,
    { content },
    headers(`Bearer ${token}`)
  );
  if (response.status === 201) {
    return true;
  }
};

export const ApiDeleteTodo = async (id) => {
  const token = store.getters.token;
  const response = await axios.delete(
    `${URl_TODOS}/${id}`,
    headers(`Bearer ${token}`)
  );
  if (response.status === 204) {
    return true;
  }
};

export const ApiUpdateTodo = async (content, id) => {
  const token = store.getters.token;
  const response = await axios.put(
    `${URl_TODOS}/${id}`,
    { content },
    headers(`Bearer ${token}`)
  );
  if (response.status === 200) {
    return true;
  }
};
