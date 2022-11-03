<template>
  <div class="main-wrapper">
    <EshopCart v-if="CART.length" :cart_data="CART" />
    <EshopCatalog />
  </div>
</template>

<script>
import EshopCatalog from "./EshopCatalog.vue";
import EshopCart from "./EshopCart.vue";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
