<template>
  <div class="cart-item">
    <img
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="image"
      class="cart-item__image"
    />
    <div class="cart-item__description">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ priceToFix }}</p>
      <p>{{ cart_item_data.id }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Quantity</p>
      {{ cart_item_data.quantity }}
    </div>
    <button @click="removeItem" class="cart-item__remove-btn">
      {{ removeFromCartBtnTitle }}
    </button>
  </div>
</template>

<script>
export default {
  name: "EshopCartItem",
  data() {
    return {
      removeFromCartBtnTitle: "Delete Item",
    };
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    removeItem() {
      this.$emit("removeFromCart");
    },
  },
  computed: {
    priceToFix() {
      return this.cart_item_data.price.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: $box-shadow-item;

  &__image {
    max-width: 85px;
  }

  &__remove-btn {
    padding: 0;
    margin: 0;
    box-shadow: none;
    background: none;
    border: none;
    padding: 0.5rem;
    background-color: $red;
    color: $white;
    border-radius: 3px;
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
