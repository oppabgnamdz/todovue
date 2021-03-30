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
        v-if="onFocusInput"
        :bgColor="BG_COLOR_CONFIRM"
        :content="CONFIRM"
        :clickEvent="enterInput"
      />
      <Button
        v-if="onFocusInput"
        :bgColor="BG_COLOR_CANCEL"
        :content="CANCEL"
      />
      <Button
        v-if="!onFocusInput"
        :bgColor="BG_COLOR_DELETE"
        :content="DELETE"
        :clickEvent="eventDelete"
        :id="todo.id"
      />
      <Button
        v-if="!onFocusInput"
        :bgColor="BG_COLOR_EDIT"
        :content="EDIT"
        :clickEvent="editInput"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import { BUTTON_LABEL, BACKGROUND_COLOR } from "../constants";
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      default: function () {
        console.log("error todo");
      },
    },
  },
  components: { Button },
  setup(props) {
    const store = useStore();
    const content = ref(props.todo.content);
    const input = ref("");
    const onFocusInput = ref(false);

    const editInput = () => {
      input.value.focus();
      onFocusInput.value = true;
    };

    const blurInput = () => {
      setTimeout(() => {
        onFocusInput.value = false;
      }, 500);
    };

    const enterInput = () => {
      eventEdit(props.todo.id);
    };

    const eventDelete = (id) => {
      store.dispatch("deleteTodo", {
        id,
        auth: `Bearer ${localStorage.getItem("token")}`,
      });
    };

    const eventEdit = (id) => {
      store.dispatch("updateTodos", {
        id,
        content: content.value,
        auth: `Bearer ${localStorage.getItem("token")}`,
      });
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
      onFocusInput,
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