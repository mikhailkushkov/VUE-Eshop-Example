<template>
  <div>
    <router-link :to="{ name: 'catalog' }">
      <div class="catalog-wrapper__show-cart">Back to catalog</div>
    </router-link>

    <p>cart :</p>
    <h3 v-if="!cart_data.length">Cart is empty</h3>

    <EshopCartItem
      v-for="(item, idx) in cart_data"
      :key="item.id"
      :cart_item_data="item"
      @removeFromCart="removeFromCart(idx)"
    />
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
};
</script>

<style lang="scss" scoped></style>
