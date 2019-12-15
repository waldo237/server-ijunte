import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/aldea",
    name: "aldea",
    component: () =>
      import(/* webpackChunkName: "aldea" */ "../views/Aldea.vue"),
    meta: {
      requiresAuth: true,
      resquiresValidation: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "aldea" */ "../views/Login.vue"),
    meta: {
      requiresAuth: true,
      resquiresValidation: true
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "aldea" */ "../views/Profile.vue"),
    meta: {
      requiresAuth: true,
      resquiresValidation: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: "",
  routes
});

export default router;
