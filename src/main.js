import Vue from "vue";
import store from "./store";
import VueRouter from "vue-router";
import "es6-promise/auto";

import App from "./App.vue";
import Home from "./views/Home.vue";
import TodoPage from "./views/TodoPage.vue";
import NotFound from "./views/NotFound.vue";

import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/todo/:id", name: "TodoPage", component: TodoPage },
  { path: "*", name: "NotFound", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
