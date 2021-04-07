<template>
  <nav class="main-nav">
    <div class="logo-router">
      <div class="logo">Todos</div>
      <router-link v-show="token" :to="{ name: 'Home' }">Home</router-link>
      <router-link @click="logout" v-show="token" :to="{ name: 'SignIn' }"
        >Log out</router-link
      >
    </div>
  </nav>
  <router-view />
  <vue-notification-list position="top-right"></vue-notification-list>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const token = computed(() => store.state.token.token);

    const logout = () => {
      store.dispatch("addToken", "");
    };

    return { token, logout };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .main-nav {
    background-color: #353a3e;
    padding: 22px 0;
    display: flex;
    align-items: center;
    .logo-router {
      display: flex;
      align-items: center;
      width: 80%;
      margin: auto;
      a {
        color: white;
        text-decoration: none;
        font-size: 24px;
        padding: 10px 20px;
        margin-left: 30px;
        &:hover {
          background-color: crimson;
          border-radius: 12px;
          transition: 0.4s;
        }
      }
      .logo {
        color: white;
        font-size: 30px;
      }
    }
  }
}
</style>
