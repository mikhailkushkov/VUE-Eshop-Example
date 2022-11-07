import axios from "axios";

export default {
  async GET_PRODUCTS_FROM_API({ commit }) {
    try {
      const products = await axios("http://localhost:3000/products", {
        method: "GET",
      });
      commit("PUSH_PRODUCTS_TO_STATE", products.data);
      return products;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
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
