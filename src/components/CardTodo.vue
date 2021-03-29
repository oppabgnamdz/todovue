<template>
  <div class="card">
    <div class="card__content">
      <input type="checkbox" />
      <input @keydown.enter.prevent="enterInput" ref="focusEdittext" class="content"  v-model="content"  />
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
    const content = ref(props.todo.content);
   
    const focusEdittext = ref("");
    const eventEdit = async (id) => {
      const response = await axios.put(
        `${url}/${id}`,
        { content: content.value },
        {
          headers: { Authorization: auth },
        }
      );
      if (response.status === 200) {
        context.emit("reload");
      
      }
    };
    const toggleModal = () => {
      focusEdittext.value.focus();
    };
    const eventDelete = async (id) => {
      const response = await axios.delete(`${url}/${id}`, {
        headers: { Authorization: auth },
      });
      if (response.status === 204) {
        context.emit("reload");
      }
    };
    const enterInput = ()=>{
      eventEdit(props.todo.id)
    }
    return {
      content,
      BG_COLOR_DELETE,
      BG_COLOR_EDIT,
      BG_COLOR_CONFIRM,
      DELETE,
      CONFIRM,
      EDIT,
      eventDelete,
      toggleModal,
      eventEdit,
      focusEdittext,
      enterInput
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
  border: none;
  padding: 10px;
}
.content:focus {
  outline: none;
}

.edit-text {
  padding: 10px;
  width: 60%;
}
</style>