<template>
  <div class="sign-in">
    <h1>Login</h1>
    <form class="form">
      <div class="username">
        <label class="label" for="username">User Name</label>
        <input v-model="userName" type="text" class="input" />
      </div>
      <div class="password">
        <label class="label" for="password">Password</label>
        <input v-model="password" type="password" class="input" />
      </div>
      <Button
        :bgColor="BG_COLOR_SIGNIN"
        :content="SIGNIN"
        :clickEvent="handleSignIn"
        >Sign in</Button
      >
    </form>
    <span>If you don't have account. Please </span>
    <router-link :to="{ name: 'SignUp' }" class="signup">Sign up !</router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import Button from "../components/Button.vue";
import { BUTTON_LABEL, BACKGROUND_COLOR } from "../constants";
import { useRouter } from "vue-router";
import SignIn from "../utils/SignIn";
import { useStore } from "vuex";
import "../common/signin.css";

export default {
  components: { Button },

  name: "SignIn",

  setup() {
    const store = useStore();
    const userName = ref("");
    const password = ref("");
    const router = useRouter();

    const handleSignIn = async () => {
      try {
        const responseSignIn = await SignIn(userName.value, password.value);
        if (responseSignIn.status !== 201) return;
        localStorage.setItem("token", responseSignIn.data.token);
        store.dispatch("addToken", responseSignIn.data.token);
        router.push({ name: "Home" });
      } catch (e) {
        console.log(e.message);
        alert("Your account invalid");
      }
    };

    return {
      BG_COLOR_SIGNIN: BACKGROUND_COLOR.BG_COLOR_SIGNIN,
      SIGNIN: BUTTON_LABEL.SIGNIN,
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