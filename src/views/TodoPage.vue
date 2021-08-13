<template>
  <div class="container mt-5">
    <h2>Это страница плана {{ todo && todo.title }} c id {{ todo && todo.id }}</h2>
    <router-link to="/">К списку задач</router-link>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ToDoPage",
  data: function() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    todo() {
      return this.$store.getters.getTodoById(this.id);
    }
  },

  beforeMount() {
    if (!this.todo)
      this.$store
        .dispatch("asyncGetTodo", this.id)
        .then(this.$store.dispatch("asyncGetCards"));
  }
};
</script>
