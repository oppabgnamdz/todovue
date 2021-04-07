<template>
  <div class="sign-in">
    <h1>Login</h1>
    <form @submit.prevent="handleSignIn" class="form">
      <div class="username">
        <label class="label" for="username">User Name</label>
        <input v-model="userName" type="text" class="input" />
      </div>
      <div class="password">
        <label class="label" for="password">Password</label>
        <input v-model="password" type="password" class="input" />
      </div>
      <Button typeSignIn :clickEvent="handleSignIn">SIGN IN</Button>
    </form>
    <span>If you don't have account. Please </span>
    <router-link :to="{ name: 'SignUp' }" class="signup">Sign up !</router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../components/Button.vue";
import "../common/signin.css";
import useSignIn from "../utils/useSignIn";

export default {
  components: { Button },

  name: "SignIn",

  setup() {
    const userName = ref("");
    const password = ref("");

    const handleSignIn = () => useSignIn(userName.value, password.value);

    return {
      userName,
      password,
      handleSignIn,
    };
  },
};
</script>

<style scoped lang='scss'>
.sign-in {
  max-width: 400px;
  margin: auto;
  .form {
    .label {
      display: block;
      margin: 20px;
      font-size: 24px;
      text-align: left;
      margin-left: 0px;
    }
    .input {
      padding: 10px;
      width: 100%;
    }
  }
  .signup {
    color: blue;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>