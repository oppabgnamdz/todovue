import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Todo from "../views/Todos";
import Page404 from "../views/Page404";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";

const requiredAuth = (to, from, next) => {
  const token = localStorage.getItem("token");
  token ? next() : next({ name: "SignIn" });
};
const clearToken = (to, from, next) => {
  localStorage.clear();
 
  next();
};

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
    beforeEnter: clearToken,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: requiredAuth,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
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
