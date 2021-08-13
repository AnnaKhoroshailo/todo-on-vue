<template>
  <b-form class="row mt-2 mb-3">
    <div class="col-md-5">
      <b-form-input id="todo" v-model="todoTitle" placeholder="Введите задачу"></b-form-input>
    </div>
    <div class="col-md-4 d-flex">
      <b-form-select id="date" v-model="todoDate" class="w-100">
        <b-form-select-option value="null">Выберите дату</b-form-select-option>
        <b-form-select-option v-for="card in cards" :key="card.id" :value="card.date">{{card.date}}</b-form-select-option>
      </b-form-select>
    </div>
    <div class="col-md-3">
      <b-button variant="primary" class="w-100" v-on:click="handleAddToDo()">Добавить задачу</b-button>
    </div>
  </b-form>
</template>
<script>
import { BForm, BFormInput, BFormSelect, BButton } from "bootstrap-vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      todoTitle: "",
      todoDate: null
    };
  },
  computed: mapState({
    cards: state => state.cards.cards
  }),
  components: { BForm, BFormInput, BFormSelect, BButton },
  methods: {
    handleAddToDo: function() {
      let todo = {
        title: this.todoTitle,
        card: this.todoDate
      };
      this.$store.dispatch("asyncAddTodo", todo);
      this.todoTitle = "";
      this.todoDate = null;
    }
  }
};
</script>