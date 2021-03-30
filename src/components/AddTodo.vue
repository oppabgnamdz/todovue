<template>
  <div class="add-todo">
    <input class="add-text" type="text" v-model="text" />
    <Button :bgColor="BG_COLOR_ADD" :content="ADD" :clickEvent="addTodo" />
  </div>
</template>

<script>
import Button from "./Button";
import { BUTTON_LABEL, BACKGROUND_COLOR } from "../constants";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  components: { Button },
  setup() {
    let text = ref("");
    const store = useStore();
    const addTodo = () => {
      store.dispatch("addTodo", text.value);
    };
    return {
      text,
      ADD: BUTTON_LABEL.ADD,
      BG_COLOR_ADD: BACKGROUND_COLOR.BG_COLOR_ADD,
      addTodo,
    };
  },
};
</script>

<style scoped>
.add-todo {
  display: flex;
  justify-content: space-around;
}
.add-text {
  padding: 10px;
  width: 70%;
}
</style>