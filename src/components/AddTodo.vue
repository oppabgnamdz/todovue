<template>
  <div class="add-todo">
    <input class="add-text" type="text" v-model="text" />
    <Button primary @onClick="addTodo"> ADD </Button>
  </div>
</template>

<script>
import Button from "./Button";
import { ref } from "vue";

import { addTodo as add } from "../uses/useTodo";

export default {
  components: { Button },

  setup(props, context) {
    let text = ref("");

    const addTodo = async () => {
      const response = await add(text.value);
      response ? context.emit("refresh") : "";
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