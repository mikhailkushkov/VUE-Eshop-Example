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
      @increment="increment(idx)"
      @decrement="decrement(idx)"
    />

    <div class="cart-wrapper__total">
      <p class="cart-wrapper__name">Total:</p>
      <p class="cart-wrapper__amount">{{ totalSumme }}</p>
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
    ...mapActions(["REMOVE_FROM_CART", "INCREMENT", "DECREMENT"]),
    removeFromCart(idx) {
      this.REMOVE_FROM_CART(idx);
    },
    increment(idx) {
      this.INCREMENT(idx);
    },
    decrement(idx) {
      this.DECREMENT(idx);
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
      let totalAmount = [];

      if (this.cart_data.length) {
        this.cart_data.forEach((element) => {
          totalAmount.push(element.price * element.quantity);
        });
      }

      totalAmount = totalAmount.reduce((acc, itemObj) => acc + itemObj, 0);
      return totalAmount.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-wrapper {
  padding-bottom: 55px;
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
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    padding: 0 $padding;
    display: flex;
    justify-content: end;
    background-color: $white;
    color: #ffffff;
    font-size: 27px;
    height: 50px;
    z-index: 100;
    width: 100%;
    line-height: 0px;

    &:after {
      content: "";
      width: 60%;
      height: inherit;
      position: absolute;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba($orange, 1)
      );
      z-index: -1;
    }
  }
  &__amount {
    padding-right: $padding * 3;
  }
  &__name {
    margin-right: $margin * 2;
  }
}
</style>
