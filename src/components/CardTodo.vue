<template>
  <div class="card">
    <div class="card__content">
      <input type="checkbox" />
      <input
        @blur.prevent="blurInput"
        @focus.prevent="focusInput"
        @keydown.enter.prevent="enterInput"
        ref="focusEdittext"
        class="content"
        v-model="content"
      />
    </div>
    <div class="card__actions">
      <Button
        v-if="confirmButton"
        :bgColor="BG_COLOR_CONFIRM"
        :content="CONFIRM"
        :clickEvent="enterInput"
       
      />
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
import { BUTTON_LABEL, BACKGROUND_COLOR } from "../constants";
import { ref } from "vue";
export default {
  props: {
    todo: {
      type: Function,
      default: function () {
        console.log("error todo");
      },
    },
  },
  components: { Button },
  setup(props, context) {
    const content = ref(props.todo.content);
    const focusEdittext = ref("");
    const confirmButton = ref(false);
    const eventEdit = async (id) => {
       console.log('eventE');
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
      confirmButton.value = true;
    };
    const focusInput = () => {
      confirmButton.value = true;
    };
    const blurInput = () => {
      setTimeout(()=>{
        confirmButton.value = false;
      },500)
    };
    const eventDelete = async (id) => {
      const response = await axios.delete(`${url}/${id}`, {
        headers: { Authorization: auth },
      });
      if (response.status === 204) {
        context.emit("reload");
      }
    };
    const enterInput = () => {
    
      eventEdit(props.todo.id);
      
    };
    return {
      content,
      BG_COLOR_DELETE: BACKGROUND_COLOR.BG_COLOR_DELETE,
      BG_COLOR_EDIT: BACKGROUND_COLOR.BG_COLOR_EDIT,
      BG_COLOR_CONFIRM: BACKGROUND_COLOR.BG_COLOR_CONFIRM,
      DELETE: BUTTON_LABEL.DELETE,
      CONFIRM: BUTTON_LABEL.CONFIRM,
      EDIT: BUTTON_LABEL.EDIT,
      eventDelete,
      toggleModal,
      eventEdit,
      focusEdittext,
      enterInput,
      confirmButton,
      blurInput,
      focusInput,
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
  transition: 0.4s ease-in-out;
}
.content:focus {
  outline: none;
  font-size: 24px;
  border-radius: 12px;
}

.edit-text {
  padding: 10px;
  width: 60%;
}
</style>