<template>
  <div class="item">
    <!-- <div>
      <div
        class="image-liquid image-holder--original"
        :style="{
          'background-image':
            'url(' + require('../assets/images/' + productObj.image) + ')',
        }"
      ></div>
      <h1 class="item__title">{{ productObj.name }}</h1>
      <h4 class="item__description">{{ productObj.description }}</h4>
      <p class="item__price">Price: {{ priceFixed }} €</p>
      <button
        class="item__add-to-cart-button btn"
        @click="emitProductClick(productObj.id)"
      >
        Add to cart
      </button>
    </div> -->

    <article class="card-wrapper">
      <div class="image-holder">
        <div
          class="image-liquid image-holder--original"
          :style="{
            'background-image':
              'url(' + require('../assets/images/' + productObj.image) + ')',
          }"
        ></div>
      </div>

      <div class="product-description">
        <!-- title -->
        <h1 class="product-description__title">
          {{ productObj.name }}
        </h1>

        <!-- category and price -->
        <div class="row">
          <div class="col-xs-12 col-sm-4 product-description__price">
            Price: {{ priceFixed }} €
          </div>
          <h4 class="product-description__category secondary-text">
            {{ productObj.description }}
          </h4>
        </div>

        <!-- sizes -->
        <div class="sizes-wrapper">
          <b class="sizes-wrapper__title">Sizes</b>
          <ul class="sizes-wrapper__list">
            <li>xs,</li>
            <li>s,</li>
            <li>sm,</li>
            <li>m,</li>
            <li>l,</li>
            <li>xl,</li>
            <li>xxl</li>
          </ul>
        </div>

        <!-- colors -->
        <div class="colors-wrapper">
          <b class="colors-wrapper__title">Colors</b>
          <ul class="colors-wrapper__list">
            <li class="colors-list__item colors-list__item--red"></li>
            <li class="colors-list__item colors-list__item--blue"></li>
            <li class="colors-list__item colors-list__item--green"></li>
            <li class="colors-list__item colors-list__item--orange"></li>
            <li class="colors-list__item colors-list__item--purple"></li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "EshopCatalogItem",
  props: {
    productObj: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    emitProductClick(id) {
      this.$emit("addToBasket", id);
    },
  },
  computed: {
    priceFixed() {
      return Number(this.productObj.price.toFixed(2));
    },
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

hr {
  border-color: $bgColorDarken;
  margin: 15px 0;
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

// =============
// product card
// =============
.card-wrapper {
  position: relative;
  width: 100%;
  height: $cardHeight;
  border: 1px solid $bgColorDarken;
  border-bottom-width: 2px;
  border-bottom-color: $white;
  overflow: hidden;
  margin-bottom: 30px;
  // transition: transform $bezierDuration $bezierProperty;

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
    }

    .image-holder--original {
      transform: translateY(-15px);
    }

    .product-description {
      height: ($cardHeight / 2 - 10) + 20;

      @media (min-width: $screen-sm) {
        height: $cardHeight / 2 - 10;
      }
    }
  }
}

// =============
// image holder
// =============
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

  &:after {
    content: "+";
    font-family: "Raleway", sans-serif;
    font-size: 50px;
    color: $orange;
    text-align: center;
    position: absolute;
    top: ((($cardHeight / 2) / 2) + 10) - 20;
    left: 50%;
    width: 75px;
    height: 75px;
    line-height: 70px;
    background-color: $white;
    opacity: 0;
    border-radius: 50%;
    z-index: 10;
    transform: translate(-50%, 100%);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: all $bezierDuration - 0.2 ease-out;

    @media (min-width: $screen-sm) {
      top: (($cardHeight / 2) / 2);
    }
  }

  .image-holder--original {
    transition: transform $bezierDuration + 0.2 $bezierProperty;
  }
}

.image-liquid {
  width: 100%;
  height: $cardHeight - $cardDescriptionHeight;
  background-size: cover;
  background-position: center center;
}

// =============
// product description
// =============
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
  .product-description__title {
    font-family: "Raleway", sans-serif;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
    font-size: 16px;
    line-height: normal;
    text-align: left;

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

  // category
  .product-description__category {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 10px 0;
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
  }

  .colors-list__item {
    width: 25px;
    height: 10px;
    position: relative;
    z-index: 1;
    transition: all 0.2s;

    &:hover {
      width: 40px;
    }
  }
  .colors-list__item--red {
    background-color: #f44336;
  }
  .colors-list__item--blue {
    background-color: #448aff;
  }
  .colors-list__item--green {
    background-color: #cddc39;
  }
  .colors-list__item--orange {
    background-color: #ff9800;
  }
  .colors-list__item--purple {
    background-color: #673ab7;
  }
}
</style>
