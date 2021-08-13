<template>
  <b-form class="row mb-4">
    <div class="col-md-5">
      <b-form-input id="todo" v-model="todoSearch" placeholder="Введите задачу"></b-form-input>
    </div>
    <div class="col-md-4">
      <b-button variant="primary" class="w-100" v-on:click="()=>handleSearchTodo()">Поиск задачи</b-button>
    </div>
    <div class="col-md-3">
      <b-button variant="primary" class="w-100" v-on:click="()=>handleSearchReset()">Очистить</b-button>
    </div>
  </b-form>
</template>
<script>
import { BForm, BFormInput, BButton } from "bootstrap-vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "SearchTodo",
  data() {
    return {
      todoSearch: ""
    };
  },
  components: { BForm, BFormInput, BButton },
  methods: {
    handleSearchTodo: function() {
      this.$store.commit("searchTodo", this.todoSearch);
    },
    handleSearchReset: function() {
      this.todoSearch = "";
      this.$store.commit("searchTodo", this.todoSearch);
    }
  }
};
</script>