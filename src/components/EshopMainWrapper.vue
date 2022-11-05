<template>
  <div class="main-wrapper">
    <!-- keep-alive wrapper: to keep condition if url changes -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "EshopMainWrapper",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
