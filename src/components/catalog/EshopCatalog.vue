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

    <p class="catalog-wrapper__filter-title">Filter:</p>
    <EshopSelect
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
    <p>{{ selected }}</p>

    <div class="catalog-wrapper__row">
      <EshopCatalogItem
        v-for="(product, id) in filteredProducts"
        :key="id"
        :productObj="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import EshopCatalogItem from "./EshopCatalogItem.vue";
import EshopSelect from "../UI/select/EshopSelect.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "EshopCatalog",
  components: {
    EshopCatalogItem,
    EshopSelect,
  },
  data() {
    return {
      isEmpty: true,
      categories: [
        { name: "ALL", value: "ALL" },
        { name: "Mens", value: "M" },
        { name: "Womans", value: "W" },
      ],
      selected: "ALL",
      sortedProducts: [],
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    cartState() {
      return this.CART.length === 0 ? this.isEmpty : !this.isEmpty;
    },
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      this.PRODUCTS.map((item) => {
        if (item.category === category.name) {
          this.sortedProducts.push(item);
        }
      });
      this.selected = category.name;
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
  &__filter-title {
    text-align: left;
    margin: 0;
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
