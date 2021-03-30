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
import CardTodo from "../components/CardTodo";
import AddTodo from "../components/AddTodo";
import { onMounted, ref, onUnmounted, computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  components: { CardTodo, AddTodo },
  setup() {
    const store = useStore();
    const todos = computed(() => store.state.todos.todos);
    const isLoading = ref(true);
    const getTodo = () => {
      isLoading.value = true;
      store.dispatch("getTodos");
    };
    watch(todos, () => {
      isLoading.value = false;
    });
    onMounted(() => {
      store.dispatch("getTodos");
      isLoading.value = false;
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