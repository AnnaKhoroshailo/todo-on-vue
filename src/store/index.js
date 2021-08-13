import Vue from "vue";
import Vuex from "vuex";
import cards from "./modules/cards";
import todos from "./modules/todos";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    cards,
    todos
  }
});
