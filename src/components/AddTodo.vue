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
import { ADD, BG_COLOR_ADD } from "../constants";
export default {
  components: { Button },
  data() {
    return {
      text: "",
      ADD,
      BG_COLOR_ADD,
    };
  },
  methods: {
    addTodo() {
      const postTodo = async () => {
        const response = await axios.post(
          url,
          { content: this.text },
          {
            headers: { Authorization: auth },
          }
        );

        if (response.status === 201) {
          console.log("reload");
          this.$emit("reload");
        }
      };
      postTodo();
    },
  },
};
</script>

<style scoped>
.btn-add {
  background: #2e7df4;
  padding: 10px;
  border: none;
  margin: 10px;
  border-radius: 10px;
}
.btn-add:focus {
  outline: none;
}
.add-text {
  padding: 10px;
}
</style>