import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import Todo from "../views/Todos";
import Page404 from "../views/Page404";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
      path:'/:catchAll(.*)',
      name:"Page404",
      component: Page404
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
