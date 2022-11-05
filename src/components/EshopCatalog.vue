<template>
  <div class="catalog-wrapper">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="catalog-wrapper__show-cart">Cart: {{ CART.length }}</div>
    </router-link>

    <h1>Product catalog</h1>

    <div class="catalog-wrapper__row">
      <EshopCatalogItem
        v-for="(product, id) in PRODUCTS"
        :key="id"
        :productObj="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import EshopCatalogItem from "./EshopCatalogItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EshopCatalog",
  components: {
    EshopCatalogItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
};
</script>

<style lang="scss">
.catalog-wrapper {
  &__show-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: 1px solid $green;
    border-radius: 5px;
  }
  &__row {
    display: $d-flex;
    flex-wrap: $flex-wrap;
    width: 100%;
    justify-content: center;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
