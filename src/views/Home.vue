<template>
  <div class="container mt-5">
    <div class="row text-center mb-4">
      <div class="col-12">
        <h1>Мои задачи</h1>
      </div>
    </div>

    <AddTodo />
    <AddCard />
    <SearchTodo />

    <div class="row mb-5">
      <div class="offset-md-4 col-md-4">
        <b-button
          variant="primary"
          v-bind:disabled="todos.length>1"
          v-on:click="asyncGetTodos"
          class="w-100"
        >Получить все задачи</b-button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 mb-2 pos-rel" v-for="card in cards" :key="card.id">
        <b-card v-bind:title="card.date">
          <b-button class="pos-abs" variant="danger" v-on:click="() => handleDeleteCard(card.id)">x</b-button>
          <b-card-text
            class="d-flex align-items-center justify-content-between"
            v-for="todo in todos.filter(todo => todo.card === card.date)"
            :key="todo.id"
          >
            <router-link :to="{ name: 'TodoPage', params: { id: todo.id } }">
              {{
              todo.title
              }}
            </router-link>
            <b-button variant="danger" v-on:click="() => handleDeleteTodo(todo.id)">x</b-button>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { BCard, BCardText, BButton } from "bootstrap-vue";
import AddTodo from "../components/AddTodo.vue";
import AddCard from "../components/AddCard.vue";
import SearchTodo from "../components/SearchTodo.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "home",
  components: { BCard, BCardText, BButton, AddTodo, AddCard, SearchTodo },
  computed: mapState({
    cards: state => state.cards.cards,
    todos: state =>
      state.todos.todos.filter(todo =>
        todo.title.toLowerCase().includes(state.todos.searchTodo.toLowerCase())
      )
  }),
  methods: {
    ...mapActions(["asyncGetTodos"]),
    handleDeleteTodo: function(todoId) {
      this.$store.dispatch("asyncDeleteTodo", todoId);
    },
    handleDeleteCard: function(cardId) {
      this.$store.dispatch("asyncDeleteCard", cardId);
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      this.$store.dispatch("asyncGetCards");
      this.$store.dispatch("asyncGetTodos");
    });
  }
};
</script>

<style>
.card-title {
  margin-bottom: 40px;
  font-size: 20px;
}
.card-body {
  background: #0d6efd;
  color: #fff;
}
.card-body a {
  color: #fff;
}
.pos-rel {
  position: relative;
}
.pos-abs {
  position: absolute;
  right: 16px;
  top: 16px;
}
</style>
