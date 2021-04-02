import SignIn from "./SignIn";
import store from "../store";
import router from "../router";
import "@dafcoe/vue-notification/dist/vue-notification.css";
import { useNotificationStore } from "@dafcoe/vue-notification";
import { notification } from "./Notification";
const { setNotification } = useNotificationStore();
const handleSignIn = async (userName, password) => {
  try {
    const responseSignIn = await SignIn(userName, password);
    if (responseSignIn.status !== 201) return;
    store.dispatch("addToken", responseSignIn.data.token);
    router.push({ name: "Home" });
  } catch (e) {
    console.log(e.message);
    setNotification(notification);
  }
};

export default handleSignIn;
