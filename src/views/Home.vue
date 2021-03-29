<template>
  <div class="main-home">
    <div :class="{ blur: isLoading }">
      <AddTodo @reload="getTodo" />
      <form action="">
        <div v-for="todo in todos" :key="todo.id">
          <CardTodo :todo="todo" @reload="getTodo" />
        </div>
      </form>
      <div class="list-item"></div>
    </div>
    <div class="loading" v-if="isLoading">
      <h1>Loading ....</h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardTodo from "../components/CardTodo";
import AddTodo from "../components/AddTodo";
import { url, auth } from "../constants";
import { onMounted, ref, onUnmounted } from "vue";
export default {
  components: { CardTodo, AddTodo },
  setup() {
    const todos = ref([]);
    const isLoading = ref(true);
    const getTodo = async () => {
      isLoading.value = true;
      const response = await axios.get(url, {
        headers: { Authorization: auth },
      });
      todos.value = response.data.sort((todo1, todo2) => {
        let dateTime1 = new Date(todo1["created_at"]);
        let dateTime2 = new Date(todo2["created_at"]);
        let time1 = dateTime1.getTime();
        let time2 = dateTime2.getTime();
        return time1 - time2;
      });
      isLoading.value = false;
    };
    onMounted(() => {
      getTodo();
    });
    onUnmounted(() => {
      todos.value = [];
    });
    return { todos, isLoading, getTodo };
  },
};
</script>

<style>
.main-home {
  width: 80%;
  margin: auto;
  margin-top: 30px;
}
.blur {
  opacity: 0.2;
}
.loading {
  display: flex;
  height: 100vh;
  width: 80%;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0vh;
}

</style>