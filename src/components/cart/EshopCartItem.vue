<template>
  <div class="cart-item">
    <img
      :src="require('../../assets/images/' + cart_item_data.image)"
      alt="image"
      class="cart-item__image"
    />
    <div class="cart-item__description">
      <p class="cart-item__description-name">{{ cart_item_data.name }}</p>
      <p class="cart-item__description-price">
        {{ cart_item_data.price | toFix }}
      </p>
      <p class="cart-item__description-article">
        Article №: {{ cart_item_data.id }}
      </p>
    </div>
    <div class="cart-item__quantity">
      <p>Quantity</p>
      <span @click="decrement" class="cart-item__quantity-btn">−</span>
      {{ cart_item_data.quantity }}
      <span @click="increment" class="cart-item__quantity-btn">+</span>
    </div>
    <button @click="removeItem" class="cart-item__remove-btn">
      {{ removeFromCartBtnTitle }}
    </button>
  </div>
</template>

<script>
import toFix from "../../filters/toFixed";

export default {
  name: "EshopCartItem",
  data() {
    return {
      removeFromCartBtnTitle: "Delete Item",
    };
  },
  filters: {
    toFix,
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
    increment() {
      this.$emit("increment");
    },
    decrement() {
      this.$emit("decrement");
    },
    removeItem() {
      this.$emit("removeFromCart");
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
  &__quantity-btn {
    font-size: 16px;
    font-weight: 800;
    padding: 5px 10px;
    border-radius: 50%;
    border: 1px solid gray;
    cursor: pointer;
    margin: 0 5px;
  }
}
</style>
