<template>
  <div class="add-todo">
    <input class="add-text" type="text" v-model="text" />
    <Button :bgColor="BG_COLOR_ADD" :content="ADD" :clickEvent="addTodo" />
  </div>
</template>

<script>
import { url, auth } from "../constants";
import axios from "axios";
import Button from "./Button";
import { BUTTON_LABEL, BACKGROUND_COLOR } from "../constants";
import { ref } from "vue";
export default {
  components: { Button },
  setup(props, context) {
    let text = ref("");
    const addTodo = async () => {
      const response = await axios.post(
        url,
        { content: text.value },
        {
          headers: { Authorization: auth },
        }
      );
      if (response.status === 201) {
        context.emit("reload");
      }
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
.add-text {
  padding: 10px;
}
</style>