import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthMiddleWare from "./middleware/auth-middleware.js";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/personal-account",
      name: "personal-account",
      meta: { middleware: AuthMiddleWare },
      component: () => import("../views/PersonalAccountView.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/OrderView.vue"),
    },
    {
      path: "/catalog",
      name: "catalog",
      component: () => import("../views/CatalogView.vue"),
    },
    {
      path: "/catalog/:category",
      name: "category",
      props: true,
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/lookbook",
      name: "lookbook",
      component: () => import("../views/LookbookView.vue"),
    },
    {
      path: "*",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});
