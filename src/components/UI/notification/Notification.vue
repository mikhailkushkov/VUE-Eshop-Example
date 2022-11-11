<template>
  <div class="notification-wrapper">
    <transition-group name="transition-animation" class="notifications">
      <div
        class="notification-wrapper__content"
        v-for="notification in notifications"
        :key="notification.id"
      >
        <div class="notification-wrapper__content-text">
          <span>{{ notification.name }}</span>
          <i class="material-icons">check_circle</i>
        </div>
      </div>
      <div class="notification-wrapper__buttons">
        <button v-if="rButton.length">{{ rButton }}</button>
        <button v-if="lButton.length">{{ lButton }}</button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Notification",
  components: {},
  data() {
    return {};
  },
  props: {
    notifications: {
      type: Array,
      default: () => {
        return [];
      },
    },
    rButton: {
      type: String,
      default: () => {
        return "";
      },
    },
    lButton: {
      type: String,
      default: () => {
        return "";
      },
    },
    timeout: {
      type: Number,
      default: () => {
        return 3000;
      },
    },
  },
  methods: {
    hideNotification() {
      if (this.notifications.length) {
        setTimeout(() => {
          this.notifications.splice(this.notifications.length - 1, 1);
        }, this.timeout);
      }
    },
  },
  watch: {
    notifications() {
      this.hideNotification();
    },
  },
};
</script>

<style lang="scss" scoped>
.notification-wrapper {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 200;
  padding: $padding;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  margin-top: 10px;

  .notifications {
    display: flex;
    flex-direction: column-reverse;
  }

  &__content {
    background-color: $green;
    padding: $padding * 2;
    border-radius: 3px;
    color: $white;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    &-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .material-icons {
        margin-left: 10px;
      }
    }
  }
  .transition-animation {
    &-enter {
      transform: translateX(120px);
      opacity: 0;
    }
    &-enter-active {
      transition: all 0.6s ease;
    }
    &-enter-to {
      opacity: 1;
    }
    &-leave {
      height: 50px;
      opacity: 1;
    }
    &-leave-active {
      transition: transform 0.6s ease, opacity 0.6s, height 0.6s, 2s;
    }
    &-leave-to {
      height: 0;
      transform: translateX(120px);
      opacity: 0;
    }
    &-move {
      transition: transform 0.6s ease;
    }
  }
}
</style>
