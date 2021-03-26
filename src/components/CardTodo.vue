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
import { ref } from "vue";
export default {
  props: ["todo"],
  components: { Button },
  setup(props, context) {
    const showModelEdit = ref(false);
    const textEdit = ref("");
    const eventEdit = async (id) => {
      const response = await axios.put(
        `${url}/${id}`,
        { content: textEdit.value },
        {
          headers: { Authorization: auth },
        }
      );
      if (response.status === 200) {
        context.emit("reload");
        toggleModal();
      }
    };
    const toggleModal = () => {
      showModelEdit.value = !showModelEdit.value;
    };
    const eventDelete = async (id) => {
      const response = await axios.delete(`${url}/${id}`, {
        headers: { Authorization: auth },
      });
      if (response.status === 204) {
        context.emit("reload");
      }
    };
    return {
      showModelEdit,
      textEdit,
      BG_COLOR_DELETE,
      BG_COLOR_EDIT,
      BG_COLOR_CONFIRM,
      DELETE,
      CONFIRM,
      EDIT,
      eventDelete,
      toggleModal,
      eventEdit,
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
}

.content {
  margin-left: 20px;
}

.edit-text {
  padding: 10px;
  width: 60%;
}
</style>