<template>
  <div class="select-wrap">
    <p class="select-wrap__title" @click="isVisible = !isVisible">
      {{ selected }}
    </p>
    <div class="select-wrap__options" v-if="isVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="emitSelectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EshopSelect",
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
    selected: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  methods: {
    emitSelectOption(option) {
      this.$emit("select", option);
      this.isVisible = false;
    },
    hideSelect() {
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrap {
  width: 150px;
  border: 1px solid green;
  position: relative;
  &__title {
    padding: 0;
    margin: 0;
  }
  &__options {
    border: 1px solid grey;
    position: absolute;
    top: 25px;
    left: -1px;
    width: inherit;
    z-index: 200;
    background-color: $white;
    p {
      padding: 10px;
      margin: 0;
      &:hover {
        background-color: #e7e7e7;
        cursor: pointer;
      }
    }
  }
}
</style>
