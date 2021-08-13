import axios from "axios";
import { API } from "../../api/index.js";
const state = () => ({
  todos: [],
  searchTodo: ""
});
const getters = {
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === +id);
  }
};
const mutations = {
  fetchListTodos(state, todos) {
    state.todos = todos;
  },
  addTodo(state, todo) {
    state.todos = [...state.todos, todo];
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
  },
  searchTodo(state, todo) {
    state.searchTodo = todo;
  }
};
const actions = {
  asyncGetTodos({ commit }) {
    axios(`${API} /todos`).then(response => {
      commit("fetchListTodos", response.data);
    });
  },
  asyncGetTodo({ commit }, todoId) {
    axios(`${API}/todos/${todoId}`).then(response => {
      commit("addTodo", response.data);
    });
  },
  asyncAddTodo({ commit }, todo) {
    axios.post(`${API}/todos`, todo).then(response => {
      commit("addTodo", response.data);
    });
  },
  asyncDeleteTodo({ commit }, todoId) {
    axios
      .delete(`${API}/todos/${todoId}`)
      .then(() => {
        commit("deleteTodo", todoId);
      })
      .catch(error => {
        console.log(error.response);
        commit("deleteTodo", todoId);
      });
  }
};
export default {
  state,
  getters,
  actions,
  mutations
};
