<template>
  <div v-if="!isLoading" class="main-home">
    <AddTodo @reload="getTodo"/>
    <form action="">
      <div v-for="todo in todos" :key="todo.id">
        <CardTodo :todo="todo" @reload="getTodo" />
      </div>
    </form>
    <div class="list-item"></div>
  </div>
  <div v-else>
    <h1>Loading ....</h1>
  </div>
</template>

<script>
import axios from "axios";
import CardTodo from "../components/CardTodo";
import AddTodo from "../components/AddTodo";
import { url, auth } from "../constants";
export default {
  components: { CardTodo, AddTodo },
  data() {
    return {
      todos: [],
      isLoading: true,
    };
  },
  methods: {
    async getTodo() {
      console.log("home todo");
      const response = await axios.get(url, {
        headers: { Authorization: auth },
      });
      console.log(response.data);
      this.todos = response.data.filter((todo) => todo.status === "active");
      this.isLoading = false;
    },

  },
  mounted() {
    const getTodo = async () => {
      const response = await axios.get(url, {
        headers: { Authorization: auth },
      });
      console.log(response.data);
      this.todos = response.data.filter((todo) => todo.status === "active");
      this.isLoading = false;
    };
    getTodo();
  },
  unmounted() {
    this.todos = [];
  },
};
</script>

<style>
.main-home {
  width: 80%;
  margin: auto;
  margin-top: 30px;
}
</style>