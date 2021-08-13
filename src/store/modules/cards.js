import axios from "axios";
import { API } from "../../api/index.js";
const state = () => ({
  cards: []
});
const mutations = {
  fetchListCards(state, cards) {
    state.cards = cards;
  },
  addCard(state, card) {
    state.cards = [...state.cards, card];
  },
  deleteCard(state, id) {
    state.cards = state.cards.filter(card => card.id !== id);
  }
};
const actions = {
  asyncGetCards({ commit }) {
    axios(`${API}/cards`).then(response => {
      commit("fetchListCards", response.data);
    });
  },
  asyncAddCard({ commit }, card) {
    axios.post(`${API}/cards`, card).then(response => {
      commit("addCard", response.data);
    });
  },
  asyncDeleteCard({ commit }, cardId) {
    axios
      .delete(`${API}/cards/${cardId}`)
      .then(() => {
        commit("deleteCard", cardId);
      })
      .catch(error => {
        console.log(error.response);
        commit("deleteCard", cardId);
      });
  }
};
export default {
  state,
  actions,
  mutations
};
