<template>
  <transition
    name="loadingIn"
    @before-enter="beforeEnter"
    @after-leave="afterLeave"
  >
    <div class="loading" v-if="show">
      <div class="loading-background"></div>
      <div class="loading-wrapper">
        <div class="loading-spinner">
          <div class="loading-spinner-content">
            <Spinner />
          </div>
        </div>
        <div class="loading-content">読み込み中...</div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import Spinner from './Spinner.vue'
export default {
  components: {
    Spinner
  },
  props: {
    show: {
      default: () => false,
      type: Boolean
    }
  },
  methods: {
    checkForm(e) {
      e.preventDefault()
      this.$validator.validateAll().then(result => {
        if (result) {
          this.submitForm()
        } else {
          this.scrollToError()
        }
      })
    },
    beforeEnter() {
      document.documentElement.classList.add('overflow-hidden')
    },
    afterLeave() {
      document.documentElement.classList.remove('overflow-hidden')
    }
  }
}
</script>
<style lang="scss" scoped>
.loading {
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  contain: strict;
  touch-action: none;
  user-select: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 40000;
  transition: opacity 0.3s ease;
  &-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    overflow-y: hidden;
  }

  &.loadingIn-enter {
    opacity: 0;
  }

  &.loadingIn-enter-to {
    opacity: 1;
  }

  &.loadingIn-leave {
    opacity: 1;
  }

  &.loadingIn-leave-to {
    opacity: 0;
  }

  &.loadingIn-leave-active {
    transition-delay: 50ms;
  }
  &-wrapper {
    height: 80px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 16px 20px 0px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 14px;
    max-height: 90%;
    max-width: 280px;
    min-height: auto;
    min-width: auto;
    overflow-wrap: break-word;
    padding: 24px;
    padding-inline-end: 24px;
    padding-inline-start: 24px;
    user-select: none;
    visibility: visible;
    z-index: 40001;
  }
  &-spinner {
    width: 40px;
    height: 40px;
    &-content {
      width: 100%;
      height: 100%;
    }
  }
  &-content {
    margin-left: 16px;
  }
}
</style>
