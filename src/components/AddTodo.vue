<template>
  <div class="add-todo">
    <input class="add-text" type="text" v-model="text" />
    <button @click="addTodo" class="btn-add">Add</button>
  </div>
</template>

<script>
import { url, auth } from "../constants";
import axios from "axios";
export default {
  data() {
    return {
      text: "",
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
          console.log('reload');
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