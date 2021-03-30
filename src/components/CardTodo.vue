<template>
  <div class="card">
    <div class="card__content">
      <input type="checkbox" />
      <input
        @blur.prevent="blurInput"
        @focus.prevent="editInput"
        @keydown.enter.prevent="enterInput"
        ref="input"
        class="content"
        v-model="content"
      />
    </div>
    <div class="card__actions">
      <Button
        v-if="_onFocusInput"
        :bgColor="BG_COLOR_CONFIRM"
        :content="CONFIRM"
        :clickEvent="enterInput"
      />
      <Button
        v-if="_onFocusInput"
        :bgColor="BG_COLOR_CANCEL"
        :content="CANCEL"
      />
      <Button
        v-if="!_onFocusInput"
        :bgColor="BG_COLOR_DELETE"
        :content="DELETE"
        :clickEvent="eventDelete"
        :id="todo.id"
      />
      <Button
        v-if="!_onFocusInput"
        :bgColor="BG_COLOR_EDIT"
        :content="EDIT"
        :clickEvent="editInput"
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
    const input = ref("");
    const _onFocusInput = ref(false);
    const editInput = () => {
      input.value.focus();
      _onFocusInput.value = true;
    };
    const blurInput = () => {
      setTimeout(() => {
        _onFocusInput.value = false;
      }, 500);
    };
    const enterInput = () => {
      eventEdit(props.todo.id);
    };
    const eventDelete = async (id) => {
      const response = await axios.delete(`${url}/${id}`, {
        headers: { Authorization: auth },
      });
      if (response.status === 204) {
        context.emit("reload");
      }
    };
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
    return {
      content,
      BG_COLOR_DELETE: BACKGROUND_COLOR.BG_COLOR_DELETE,
      BG_COLOR_EDIT: BACKGROUND_COLOR.BG_COLOR_EDIT,
      BG_COLOR_CONFIRM: BACKGROUND_COLOR.BG_COLOR_CONFIRM,
      BG_COLOR_CANCEL: BACKGROUND_COLOR.BG_COLOR_CANCEL,
      DELETE: BUTTON_LABEL.DELETE,
      CONFIRM: BUTTON_LABEL.CONFIRM,
      EDIT: BUTTON_LABEL.EDIT,
      CANCEL: BUTTON_LABEL.CANCEL,
      eventDelete,
      editInput,
      eventEdit,
      input,
      enterInput,
      _onFocusInput,
      blurInput,
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
  border: 2px solid black;
}

.edit-text {
  padding: 10px;
  width: 60%;
}
</style>