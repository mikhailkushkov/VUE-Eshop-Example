<template>
  <div class="catalog-wrapper">
    <h1>Catalog</h1>

    <div class="catalog-wrapper__row">
      <EshopCatalogItem
        v-for="(product, id) in products"
        :key="id"
        :productObj="product"
        @addToBasket="showChildId"
      />
    </div>
  </div>
</template>

<script>
import EshopCatalogItem from "./EshopCatalogItem.vue";

export default {
  name: "EshopCatalog",
  components: {
    EshopCatalogItem,
  },
  data() {
    return {
      products: [
        {
          image: "img-1.jpg",
          name: "Nike running",
          price: 45.555,
          description:
            "Tailored Fit. The first and most important part of a high quality shirt is a great tailored fit",
          id: "01",
          available: true,
          category: "Mens",
        },
        {
          image: "img-2.jpg",
          name: "Nike home",
          price: 34.666787,
          description: "High Quality Collar. Cleanly Finished Button Holes",
          id: "02",
          available: true,
          category: "Wemans",
        },
        {
          image: "img-3.jpg",
          name: "T-shirt 3",
          price: 12.4555,
          description: "High Quality Collar. Fine Stitching.",
          id: "03",
          available: false,
          category: "Wemans",
        },
        {
          image: "img-4.jpg",
          name: "T-shirt 4",
          price: 77.1333,
          description:
            "Fiber Weave. High-quality fabrics feature fibers that are closely and tightly woven together.",
          id: "04",
          available: true,
          category: "Mens",
        },
        {
          image: "img-5.jpg",
          name: "T-shirt 5",
          price: 65.565656,
          description:
            "High Quality Collar. Tailored Fit. The first and most important part of a high quality shirt is a great tailored fit.",
          id: "05",
          available: false,
          category: "Wemans",
        },
        {
          image: "img-6.jpg",
          name: "T-shirt 6",
          price: 99.333,
          description: "Premium Cotton Fabric.",
          id: "06",
          available: true,
          category: "Wemans",
        },
      ],
    };
  },
  methods: {
    showChildId(data) {
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
.catalog-wrapper {
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
