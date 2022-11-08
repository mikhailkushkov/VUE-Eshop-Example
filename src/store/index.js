import Vue from "vue";
import Vuex from "vuex";

import apiRequests from "./actions/apiRequests";
import commonActions from "./actions/actions";
import mutations from "./mutations/mutations";
import getters from "./getters/getters";

const actions = { ...apiRequests, ...commonActions };

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations,
  actions,
  getters,
});

export default store;
