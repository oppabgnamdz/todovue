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
      <Button v-if="onFocusInput" typeConfirm :clickEvent="enterInput"
        >CONFIRM</Button
      >
      <Button v-if="onFocusInput" typeCancel :content="CANCEL">CANCEL</Button>
      <Button
        v-if="!onFocusInput"
        typeDelete
        :clickEvent="eventDelete"
        :id="todo.id"
        >DELETE</Button
      >
      <Button
        v-if="!onFocusInput"
        typeEdit
        :content="EDIT"
        :clickEvent="editInput"
        >EDIT</Button
      >
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    todo: {
      type: Object,
      default: function () {},
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
      });
    };

    const eventEdit = (id) => {
      store.dispatch("updateTodos", {
        id,
        content: content.value,
      });
    };

    return {
      content,
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