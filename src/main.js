import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueNotificationList from '@dafcoe/vue-notification'
createApp(App)
  .use(store)
  .use(router)
  .use(VueNotificationList)
  .mount("#app");

