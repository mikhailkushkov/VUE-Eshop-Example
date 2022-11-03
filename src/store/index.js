import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    PUSH_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_TO_CART: (state, product) => {
      if (state.cart.length) {
        let isProductInCart = false;
        state.cart.map((item) => {
          if (item.id === product.id) {
            isProductInCart = true;
            item.quantity++;
          }
        });
        if (!isProductInCart) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    UPDATE_CART: (state, idx) => {
      state.cart.splice(idx, 1);
    },
  },
  actions: {
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
  },
  modules: {},
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
