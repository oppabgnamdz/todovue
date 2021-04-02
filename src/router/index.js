import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Page404 from "../views/Page404";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import store from "../store";


const requiredAuth = (to, from, next) => {
  store.getters.token ? next() : next({ name: "SignIn" });
};

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: requiredAuth,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/:catchAll(.*)",
    name: "Page404",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
