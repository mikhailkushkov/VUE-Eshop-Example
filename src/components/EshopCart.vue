<template>
  <div class="cart-wrapper">
    <router-link :to="{ name: 'catalog' }">
      <div class="catalog-wrapper__show-cart">Back to catalog</div>
    </router-link>

    <p class="cart-wrapper__title">cart</p>
    <h3 v-if="!cart_data.length">Cart is empty</h3>

    <EshopCartItem
      v-for="(item, idx) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @removeFromCart="removeFromCart(idx)"
    />

    <div class="cart-wrapper__total">
      <p class="cart-wrapper__name">Total:</p>
      <p>{{ totalSumme }}</p>
    </div>
  </div>
</template>

<script>
import EshopCartItem from "./EshopCartItem.vue";
import { mapActions } from "vuex";

export default {
  name: "EshopCart",
  components: {
    EshopCartItem,
  },
  methods: {
    ...mapActions(["REMOVE_FROM_CART"]),
    removeFromCart(idx) {
      this.REMOVE_FROM_CART(idx);
    },
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    totalSumme() {
      let summe = this.cart_data.reduce(
        (acc, itemObj) => acc + itemObj.price * itemObj.quantity,
        0
      );
      return summe.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-wrapper {
  margin-bottom: 10px;
  &__title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 3px;
  }
  h3 {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -25%);
  }
  &__total {
    position: static;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $padding * 2;
    display: flex;
    justify-content: end;
    background-color: $white;
    border-top: 1px solid rgba(18, 130, 18, 1);
    color: rgba(18, 130, 18, 1);
    font-size: 22px;
  }
  &__name {
    margin-right: $margin * 2;
  }
}
</style>
