<template>
  <div class="input-item">
    <div v-if="isShowLable === true" class="sub-title">
      {{ inputObject.displayName }}
      <span v-if="isShowRequired" class="required">
        必須
      </span>
    </div>
    <div class="sub-content" :class="{ loading: inputLoading }">
      <input
        v-model.trim="inputObject.value"
        v-validate="inputObject.validate"
        :data-vv-as="inputObject.displayName"
        :name="inputObject.name"
        :class="{
          error: inputLoading ? false : errors.has(inputObject.name),
          disabled: disabled || inputLoading
        }"
        class="form-input"
        type="text"
        :disabled="disabled"
        @change="onChange($event)"
        @blur="onBlur($event)"
      />
    </div>
    <div
      v-if="errors.has(inputObject.name) && !inputLoading"
      class="error-text"
    >
      {{ errors.first(inputObject.name) }}
    </div>
    <span class="note" v-if="inputObject.example">
      {{ inputObject.example }}
    </span>
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  props: {
    inputObject: {
      type: Object
    },
    inputLoading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isShowLable: {
      type: Boolean,
      default: true
    },
    isShowRequired: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange($event) {
      this.$emit('on-change', $event)
    },
    onBlur($event) {
      this.$emit('on-blur', $event)
    }
  }
}
</script>
<style scoped src="@/css/shopsupport_download.css"></style>
<style scoped lang="scss">
@keyframes spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.input-item {
  margin-bottom: 20px;
  position: relative;

  &:nth-child(odd) {
    margin-right: 20px;
    @media screen and (min-width: 0) and (max-width: 768px) {
      margin-right: 10px;
    }
  }
  .sub-title {
    font-weight: normal;
    color: #212121;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 2;
  }
  .sub-content {
    .form-input {
      margin-bottom: 10px;
      padding: 0 10px;
      width: 100%;
      height: 40px;

      font-size: 16px;
      font-weight: normal;

      border: 1px solid #bcbcbc;
      border-radius: 2px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background: #ffffff;

      &.disabled {
        background: #d2d2d2;
        pointer-events: none;
      }

      &:focus-visible {
        border: 2px solid #0b4cca;
      }

      &.error {
        border: 2px solid #f00000;
        border-radius: 3px;
        background-color: #fee5e5;
        outline: none;
      }
    }
    &.loading {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 10px;
        right: 8px;
        width: 16px;
        height: 16px;

        border-radius: 999px;
        border: 3px solid transparent;
        border-right-color: white;
        border-top-color: white;
        animation: spinner-animation 1s infinite;
      }
    }
  }
  .note {
    color: #9d9d9d;
    font-size: 13px;
    display: block;
    white-space: inherit;
    line-break: inherit;
  }
  .error-text {
    color: #f00000;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 10px;
  }
}
</style>
