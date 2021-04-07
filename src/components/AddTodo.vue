<template>
  <div class="add-todo">
    <input class="add-text" type="text" v-model="text" />
    <Button typeAdd :clickEvent="addTodo"> ADD </Button>
  </div>
</template>

<script>
import Button from "./Button";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { Button },

  setup() {
    let text = ref("");
    const store = useStore();

    const addTodo = () => {
      store.dispatch("addTodo", {
        content: text.value,
      });
    };

    return {
      text,
      addTodo,
    };
  },
};
</script>

<style scoped lang='scss'>
.add-todo {
  display: flex;
  justify-content: space-around;
  .add-text {
    padding: 10px;
    width: 70%;
  }
}
</style>