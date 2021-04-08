<template>
  <div class="main-home">
    <div :class="{ blur: isLoading }">
      <AddTodo @refresh="refreshTodo" />
      <div v-for="todo in todos" :key="todo.id">
        <CardTodo @refresh="refreshTodo" :todo="todo" />
      </div>
    </div>
    <div class="loading" v-if="isLoading">
      <h1>Loading ....</h1>
    </div>
  </div>
</template>

<script>
import CardTodo from "../components/CardTodo";
import AddTodo from "../components/AddTodo";
import { onMounted, ref } from "vue";
import { getTodos } from "../uses/useTodo";

export default {
  components: { CardTodo, AddTodo },

  setup() {
    const todos = ref([]);
    const isLoading = ref(true);

    const refreshTodo = async () => {
      isLoading.value = true;
      console.log("refresh");
      const data = await getTodos();
      todos.value = data;
      isLoading.value = false;
    };

    onMounted(() => {
      refreshTodo();
    });

    return { todos, isLoading, refreshTodo };
  },
};
</script>

<style scoped lang='scss'>
.main-home {
  width: 80%;
  margin: auto;
  margin-top: 30px;
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
}
</style>