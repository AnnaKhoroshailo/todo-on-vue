<template>
  <b-form class="row mt-2 mb-3">
    <div class="col-md-5">
      <b-form-input id="todo" v-model="cardDate" placeholder="Введите дату/название карточки"></b-form-input>
    </div>
    <div class="col-md-4">
      <b-button variant="primary" class="w-100" v-on:click="()=>handleAddCard()">Добавить карточку</b-button>
    </div>
  </b-form>
</template>
<script>
import { BForm, BFormInput, BFormSelect, BButton } from "bootstrap-vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "AddCard",
  data() {
    return {
      cardDate: ""
    };
  },
  computed: mapState({
    cards: state => state.cards.cards
  }),
  components: { BForm, BFormInput, BFormSelect, BButton },
  methods: {
    handleAddCard: function() {
      let card = {
        date: this.cardDate
      };
      this.$store.dispatch("asyncAddCard", card);
      this.cardDate = "";
    }
  }
};
</script>