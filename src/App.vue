<template>
  <div id="app">
    <EshopMainWrapper />
  </div>
</template>

<script>
import EshopMainWrapper from "./components/EshopMainWrapper.vue";

export default {
  components: { EshopMainWrapper },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
