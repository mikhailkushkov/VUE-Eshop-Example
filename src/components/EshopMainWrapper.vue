<template>
  <div class="main-wrapper">
    <EshopCart />
    <EshopCatalog />
  </div>
</template>

<script>
import EshopCatalog from "./EshopCatalog.vue";
import EshopCart from "./EshopCart.vue";

export default {
  name: "EshopMainWrapper",
  components: {
    EshopCart,
    EshopCatalog,
  },
  data() {
    return {};
  },
  props: {},
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
