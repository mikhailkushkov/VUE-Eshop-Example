<template>
  <div class="catalog-wrapper">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div
        class="catalog-wrapper__show-cart"
        :class="{ cartActive: cartState }"
      >
        Cart: {{ CART.length }}
      </div>
    </router-link>

    <h1 class="catalog-wrapper__title">Product catalog</h1>

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
    return {
      isEmpty: true,
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    cartState() {
      console.log(this.CART.length);
      return this.CART.length === 0 ? this.isEmpty : !this.isEmpty;
    },
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
    position: fixed;
    top: 10px;
    right: 10px;
    padding: $padding;
    border: 1px solid $green;
    border-radius: 5px;
    background-color: $white;
    z-index: 100;
  }
  &__title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 3px;
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
  .cartActive {
    border-color: red;
  }
}
</style>
