<template>
  <div class="sign-in">
    <h1>Sign up</h1>
    <form @submit.prevent="handleSignUp" class="form">
      <div class="username">
        <label class="label" for="username">User Name</label>
        <input v-model="userName" type="text" class="input" />
      </div>
      <div class="password">
        <label class="label" for="password">Password</label>
        <input v-model="password" type="password" class="input" />
      </div>
      <Button
        :bgColor="BG_COLOR_SIGNUP"
        :content="SIGNUP"
        :clickEvent="handleSignUp"
      />
    </form>
    <router-link :to="{ name: 'SignIn' }" class="signup"
      >Back to Sign in !</router-link
    >
  </div>
  <vue-notification-list position="top-right"></vue-notification-list>
</template>

<script>
import { ref } from "vue";
import Button from "../components/Button.vue";
import { BUTTON_LABEL, BACKGROUND_COLOR } from "../constants";
import "../common/signin.css";
import useSignUp from "../utils/useSignUp";

export default {
  components: { Button },

  name: "SignUp",

  setup() {
    const userName = ref("");
    const password = ref("");

    const handleSignUp = () => useSignUp(userName.value, password.value);

    return {
      BG_COLOR_SIGNUP: BACKGROUND_COLOR.BG_COLOR_SIGNIN,
      SIGNUP: BUTTON_LABEL.SIGNUP,
      userName,
      password,
      handleSignUp,
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