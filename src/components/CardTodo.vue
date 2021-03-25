<template>
  <div class="card">
    <div class="card__content">
      <input type="checkbox" />
      <span class="content">{{ todo.content }}</span>
    </div>
    <div class="card__actions">
      <button
        @click.prevent="eventDelete(todo.id)"
        class="card__actions--delete"
      >
        DELETE
      </button>
      <button @click.prevent="toggleModal" class="card__actions--edit">
        EDIT
      </button>
    </div>
  </div>
  <div v-if="showModelEdit" class="edit-todo">
    <input class="edit-text" type="text" v-model="textEdit" />
    <button @click.prevent="eventEdit(todo.id)" class="btn-edit">
      Confirm
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { url, auth } from "../constants";
export default {
  props: ["todo"],
  data() {
    return {
      showModelEdit: false,
      textEdit: "",
    };
  },
  methods: {
    eventEdit(id) {
      const editTodo = async () => {
        const response = await axios.put(
          `${url}/${id}`,
          { content: this.textEdit },
          {
            headers: { Authorization: auth },
          }
        );
        if(response.status===200){
          this.$emit('reload');
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