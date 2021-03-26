<template>
  <div class="card">
    <div class="card__content">
      <input type="checkbox" />
      <span class="content">{{ todo.content }}</span>
    </div>
    <div class="card__actions">
      <Button
        :bgColor="BG_COLOR_DELETE"
        :content="DELETE"
        :clickEvent="eventDelete"
        :id="todo.id"
      />
      <Button
        :bgColor="BG_COLOR_EDIT"
        :content="EDIT"
        :clickEvent="toggleModal"
      />
    </div>
  </div>
  <div v-if="showModelEdit" class="edit-todo">
    <input class="edit-text" type="text" v-model="textEdit" />
    <Button
      :bgColor="BG_COLOR_CONFIRM"
      :content="CONFIRM"
      :clickEvent="eventEdit"
      :id="todo.id"
    />
  </div>
</template>

<script>
import axios from "axios";
import { url, auth } from "../constants";
import Button from "./Button";
import {
  BG_COLOR_DELETE,
  BG_COLOR_CONFIRM,
  BG_COLOR_EDIT,
  DELETE,
  CONFIRM,
  EDIT,
} from "../constants";
export default {
  props: ["todo"],
  components: { Button },
  data() {
    return {
      showModelEdit: false,
      textEdit: "",
      BG_COLOR_DELETE,
      BG_COLOR_EDIT,
      BG_COLOR_CONFIRM,
      DELETE,
      CONFIRM,
      EDIT,
    };
  },
  methods: {
    clickDelete(e) {
      console.log("click me", e);
    },

    eventEdit(id) {
      const editTodo = async () => {
        const response = await axios.put(
          `${url}/${id}`,
          { content: this.textEdit },
          {
            headers: { Authorization: auth },
          }
        );
        if (response.status === 200) {
          this.$emit("reload");
          this.toggleModal();
        }
      };
      editTodo();
    },
    toggleModal() {
      this.showModelEdit = !this.showModelEdit;
    },
    eventDelete(id) {
      const deleteTodo = async () => {
        const response = await axios.delete(`${url}/${id}`, {
          headers: { Authorization: auth },
        });
        if (response.status === 204) {
          this.$emit("reload");
        }
      };
      deleteTodo();
    },
  },
};
</script>

<style scope>
.card {
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
}
.card__actions--delete {
  background-color: #cc434a;
  padding: 10px;
  color: white;
  border: none;
  margin: 0 10px;
  border-radius: 5px;
}
.card__actions--edit {
  background-color: #51a452;
  padding: 10px;
  color: white;
  border: none;
  margin: 0 10px;
  border-radius: 5px;
}
.content {
  margin-left: 20px;
}
.btn-edit {
  background: cyan;
  padding: 10px;
  border: none;
  margin: 10px;
  border-radius: 10px;
}
button:focus {
  outline: none;
}
.edit-text {
  padding: 10px;
  width: 60%;
}
</style>