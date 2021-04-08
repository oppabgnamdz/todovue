<template>
  <div class="card">
    <div class="card__content">
      <input type="checkbox" />
      <input
        @blur.prevent="handleBlurInput"
        @focus.prevent="handleInputEditted"
        @keydown.enter.prevent="handleEnterInput"
        ref="input"
        class="content"
        v-model="content"
      />
    </div>
    <div class="card__actions">
      <Button v-if="onFocusInput" dark :onClick="handleEnterInput"
        >CONFIRM</Button
      >
      <Button v-if="onFocusInput" secondary>CANCEL</Button>
      <Button v-if="!onFocusInput" danger @onClick="deleteTodo">DELETE</Button>
      <Button v-if="!onFocusInput" success @onClick="handleInputEditted"
        >EDIT</Button
      >
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import { ref } from "vue";
import { ApiDeleteTodo, ApiUpdateTodo } from "../uses/useTodo";
export default {
  props: {
    todo: {
      type: Object,
      default: function () {},
    },
  },

  components: { Button },

  setup(props, context) {
    const content = ref(props.todo.content);
    const input = ref("");
    const onFocusInput = ref(false);

    const handleInputEditted = () => {
      input.value.focus();
      onFocusInput.value = true;
    };

    const handleBlurInput = () => {
      setTimeout(() => {
        onFocusInput.value = false;
      }, 500);
    };

    const handleEnterInput = () => {
      updateTodo(props.todo.id);
    };

    const deleteTodo = async () => {
      const response = await ApiDeleteTodo(props.todo.id);
      response ? context.emit("refresh") : "";
    };

    const updateTodo = async (id) => {
      const response = await ApiUpdateTodo(content.value, id);
      response ? context.emit("refresh") : "";
    };

    return {
      content,
      deleteTodo,
      handleInputEditted,
      updateTodo,
      input,
      handleEnterInput,
      onFocusInput,
      handleBlurInput,
    };
  },
};
</script>

<style scoped lang='scss'>
.card {
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  &__content {
    .content {
      margin-left: 20px;
      border: none;
      padding: 10px;
    }
    &:focus {
      outline: none;
      border: 2px solid black;
    }
  }
}
</style>