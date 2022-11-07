export default {
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
  INCREMENT_QUANTITY: (state, idx) => {
    state.cart[idx].quantity++;
  },
  DECREMENT_QUANTITY: (state, idx) => {
    if (state.cart[idx].quantity > 1) {
      state.cart[idx].quantity--;
    }
  },
};
