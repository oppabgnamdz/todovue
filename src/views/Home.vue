<template>
  <div class="main-home">
    <form action="">
      <div v-for="todo in todos" :key="todo.id">
       <CardTodo :content="todo.content"/>
      </div>
    </form>
    <div class="list-item">
    
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardTodo from "../components/CardTodo";
export default {
  components: { CardTodo },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    console.log("mounted");
    const url = "https://todo-mvc-api-typeorm.herokuapp.com/api/todos";
    const auth =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE1MTk5ZDBiLWE2NTQtNGFlZS1iYWRhLWUyZTI4MTM4NTcyYSIsImlhdCI6MTYxNjY1NDMzNiwiZXhwIjoxNjE3MjU5MTM2fQ.S8akmG2NcE8hVeiXEo548i-aofp91gA5vVH7la4sq_A";
    const getTodo = async () => {
      const response = await axios.get(url, {
        headers: { Authorization: auth },
      });

      this.todos = response.data;
    };
    getTodo();
  },
};
</script>

<style>
.main-home{
    width:80%;
    margin: auto;
    margin-top: 30px;
}
</style>