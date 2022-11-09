<template>
  <div class="modal-layer" ref="modal_layer">
    <div class="modal-wrapper">
      <div class="modal-wrapper__header">
        <span>{{ modalTitle }}</span>
        <span>
          <i
            class="material-icons modal-wrapper__header-close"
            @click="emitCloseModal"
            >close</i
          >
        </span>
      </div>
      <div class="modal-wrapper__body">
        <slot></slot>
      </div>
      <div class="modal-wrapper__footer">
        <button class="modal-wrapper__footer-btn" @click="emitModalBtnAction">
          {{ btnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EshopModal",
  data() {
    return {};
  },
  props: {
    btnTitle: {
      type: String,
      default: "Submit",
    },
    modalTitle: {
      type: String,
      default: "Modal title",
    },
  },
  methods: {
    emitCloseModal() {
      this.$emit("closeModal");
    },
    emitModalBtnAction() {
      this.$emit("addToCart");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", (item) => {
      if (item.target === vm.$refs["modal_layer"]) {
        vm.emitCloseModal();
      }
    });
  },
};
</script>

<style lang="scss">
.modal-layer {
  background: rgba(17, 17, 17, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;

  .modal-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 16px;
    z-index: 100;
    background-color: $white;
    box-shadow: $box-shadow-modal;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-close {
        &:hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }
    }
    &__body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      .image-holder--original {
        background-size: contain;
        background-repeat: no-repeat;
      }
      .modal-description-wrap {
        flex-direction: row;
        text-align: left;

        &__sizes-wrapper {
          ul {
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            padding: 0;

            li {
              margin-right: 5px;
            }
          }
        }
      }
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-btn {
        color: rgba($primaryText, 1);
        margin: 0;
        padding: 0;
        box-shadow: none;
        border: none;
        background: none;
        padding: 5px 10px;
        border-radius: 3px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
          rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

        &:hover {
          cursor: pointer;
          color: rgba($primaryText, 0.5);
        }
      }
    }
  }
}
</style>
