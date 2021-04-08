import SignIn from "../utils/SignIn";
import SignUp from "../utils/SignUp";
import store from "../store";
import router from "../router";
import "@dafcoe/vue-notification/dist/vue-notification.css";
import { useNotificationStore } from "@dafcoe/vue-notification";
import { notification } from "../utils/Notification";
const { setNotification } = useNotificationStore();
const handleSignUp = async (userName, password) => {
  try {
    const responseSignUp = await SignUp(userName, password);
    const responseSignIn = await SignIn(userName, password);
    if (responseSignUp.status !== 201 || responseSignIn.status !== 201) return;
    store.dispatch("addToken", responseSignIn.data.token);
    router.push({ name: "Home" });
  } catch (e) {
    console.log(e.message);
    setNotification(notification);
  }
};

export default handleSignUp;
