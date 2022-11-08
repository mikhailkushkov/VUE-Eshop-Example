export default {
  ADD_TO_CART({ commit }, product) {
    commit("SET_TO_CART", product);
  },
  REMOVE_FROM_CART({ commit }, idx) {
    commit("UPDATE_CART", idx);
  },
  INCREMENT({ commit }, idx) {
    commit("INCREMENT_QUANTITY", idx);
  },
  DECREMENT({ commit }, idx) {
    commit("DECREMENT_QUANTITY", idx);
  },
};
