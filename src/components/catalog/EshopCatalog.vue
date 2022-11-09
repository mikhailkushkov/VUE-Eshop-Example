<template>
  <div class="catalog-wrapper">
    <!-- Header -->
    <header class="catalog-wrapper__header">
      <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
        <div
          class="catalog-wrapper__show-cart"
          :class="{ cartActive: cartState }"
        >
          Cart: {{ CART.length }}
        </div>
      </router-link>
      <h1 class="catalog-wrapper__title">Product catalog</h1>
    </header>

    <!-- Filter -->
    <div class="catalog-wrapper__filter">
      <p class="catalog-wrapper__filter-title">Filter category:</p>
      <EshopSelect
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
    </div>

    <div class="catalog-wrapper__row">
      <p class="catalog-wrapper__selected">{{ selected }}</p>
    </div>

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
  &__header {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    padding: 10px 0;
  }
  &__show-cart {
    position: fixed;
    min-width: 70px;
    top: 10px;
    right: 20px;
    padding: $padding;
    //border: 1px solid $green;
    border-radius: 5px;
    background-color: $white;
    z-index: 100;
    color: $green;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  &__title {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 3px;
    margin: 0;
  }
  &__filter {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 10px;
    padding: 5px;
  }
  &__filter-title {
    text-align: left;
    margin: 0;
    margin-right: 10px;
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
  &__selected {
    margin: 5px 0;
  }
  .cartActive {
    color: red;
  }
}
</style>
