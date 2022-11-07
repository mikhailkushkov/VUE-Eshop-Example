<template>
  <div class="item">
    <!-- card-wrapper -->
    <article class="card-wrapper">
      <!-- image-holder -->
      <div class="image-holder">
        <div
          class="image-liquid image-holder--original"
          :style="{
            'background-image':
              'url(' + require('../assets/images/' + productObj.image) + ')',
          }"
        ></div>

        <!-- Add to cart btn -->
        <button
          class="add-to-cart btn"
          @click="emitAddToCart"
          :class="{ activeBtnClass: isActive }"
        >
          +
        </button>
      </div>

      <!-- product-description -->
      <div class="product-description">
        <!-- title -->
        <h1 class="product-description__title">
          {{ productObj.name }}
        </h1>

        <!-- price and description-->
        <div class="row">
          <div class="col-xs-12 col-sm-4 product-description__price">
            Price: {{ priceFixed }} €
          </div>
          <h4 class="product-description__text secondary-text">
            {{ productObj.description }}
          </h4>
        </div>

        <!-- sizes list-->
        <div class="sizes-wrapper">
          <b class="sizes-wrapper__title">Sizes</b>
          <ul v-for="(size, id) in sizes" :key="id" class="sizes-wrapper__list">
            <li>{{ size }}</li>
          </ul>
        </div>

        <!-- colors palette-->
        <div class="colors-wrapper">
          <b class="colors-wrapper__title">Colors</b>
          <ul class="colors-wrapper__list">
            <li class="colors-wrapper__item colors-wrapper__item--red"></li>
            <li class="colors-wrapper__item colors-wrapper__item--lime"></li>
            <li class="colors-wrapper__item colors-wrapper__item--blue"></li>
            <li class="colors-wrapper__item colors-wrapper__item--yellow"></li>
            <li class="colors-wrapper__item colors-wrapper__item--grey"></li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "EshopCatalogItem",
  data() {
    return {
      sizes: ["xs", "s", "m", "l", "xl", "xxl"],
      isActive: false,
    };
  },
  props: {
    productObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    emitAddToCart() {
      this.$emit("addToCart", this.productObj);
      this.isActive = !this.isActive;
      setTimeout(() => {
        if (this.isActive === true) {
          this.isActive = false;
        }
      }, 150);
    },
  },
  computed: {
    priceFixed() {
      return Number(this.productObj.price.toFixed(2));
    },
  },
  mounted() {
    this.$set(this.productObj, "quantity", 1);
  },
};
</script>

<style lang="scss">
.item {
  box-shadow: $box-shadow-item;
  flex-basis: 25%;
  padding: $padding;
  margin: $margin;
}

.secondary-text {
  color: $secondaryText;
}

.list-inline {
  margin: 0;

  li {
    padding: 0;
  }
}

// product wrapper
.card-wrapper {
  position: relative;
  width: 100%;
  height: $cardHeight;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity $bezierDuration $bezierProperty;
  }

  &:hover {
    &:after {
      opacity: 1;
    }

    .image-holder {
      &:before {
        opacity: 0.75;
      }
      &:after {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
      &--original {
        transform: translateY(-15px);
      }
    }

    .product-description {
      height: ($cardHeight / 2 - 10) + 20;

      @media (min-width: $screen-sm) {
        height: $cardHeight / 2 - 10;
      }
    }
    .add-to-cart {
      opacity: 1;
      transition: all $bezierDuration ease;
      cursor: pointer;
    }
  }
}

// image holder
.image-holder {
  display: block;
  position: relative;
  width: 100%;
  height: $cardHeight - $cardDescriptionHeight - 15;
  background-color: $white;
  z-index: 1;

  @media (min-width: $screen-sm) {
    height: $cardHeight - $cardDescriptionHeight;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $orange;
    opacity: 0;
    z-index: 5;
    transition: opacity $bezierDuration;
  }

  .image-holder--original {
    transition: transform $bezierDuration + 0.2 $bezierProperty;
  }
}

.add-to-cart {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, 100%);
  transition: all $bezierDuration - 0.2 ease;
  font-size: 35px;
  color: $orange;
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 47px;
  background-color: $white;
  opacity: 0;
  border-radius: 50%;
  border-color: transparent;
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  @media (min-width: $screen-sm) {
    top: 10%;
  }
}
.activeBtnClass {
  box-shadow: none;
  width: 48px;
  height: 48px;
  line-height: 45px;
  font-size: 32px;
}

.image-liquid {
  width: 100%;
  height: $cardHeight - $cardDescriptionHeight;
  background-size: cover;
  background-position: center center;
}

// product description
.product-description {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: $cardDescriptionHeight + 15;
  padding: 0 10px;
  overflow: hidden;
  background-color: $bgColor;
  border-top: 1px solid $bgColorDarken;
  transition: height $bezierDuration $bezierProperty;
  z-index: 2;

  @media (min-width: $screen-sm) {
    height: $cardDescriptionHeight;
  }

  // title
  &__title {
    font-family: "Raleway", sans-serif;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
    font-size: 16px;
    line-height: normal;
    text-align: left;
    margin-bottom: 20px;

    &:after {
      content: "";
      width: 60px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba($orange, 1)
      );
    }
  }

  // text
  .product-description__text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 10px 0;
    text-align: left;
  }

  // price
  .product-description__price {
    color: $orange;
    text-align: left;
    font-weight: 700;
    font-size: 14px;
    margin-top: 5px;

    @media (min-width: $screen-sm) {
      text-align: right;
    }
  }

  // sizes
  .sizes-wrapper {
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    &__title {
      text-align: left;
      display: block;
      font-size: 14px;
    }
    &__list {
      list-style: none;
      display: flex;
      padding-left: 10px;
      margin: 0;
    }
  }

  .colors-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    &__title {
      text-align: left;
      display: block;
      font-size: 14px;
    }

    &__list {
      list-style: none;
      display: flex;
      padding-left: 10px;
      margin: 0;
    }

    &__item {
      width: 25px;
      height: 10px;
      position: relative;
      z-index: 1;
      transition: all 0.2s;

      &:hover {
        width: 40px;
      }
      &--red {
        background-color: #f44336;
      }
      &--lime {
        background-color: rgb(87, 227, 48);
      }
      &--blue {
        background-color: rgb(36, 103, 218);
      }
      &--yellow {
        background-color: rgb(238, 242, 8);
      }
      &--grey {
        background-color: rgb(169, 166, 166);
      }
    }
  }
}
</style>
