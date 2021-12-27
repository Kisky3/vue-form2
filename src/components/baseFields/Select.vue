<template>
  <div class="register-shop-select">
    <div class="select-wrapper">
      <div v-if="isShowLable === true" class="sub-title">
        {{ inputObject.displayName }}
      </div>
      <select
        class="form-select mb10px"
        v-model.trim="selectObject.value"
        :name="selectObject.name"
        :data-vv-as="selectObject.displayName"
        v-validate="selectObject.validate"
        :class="{ error: errors.has(selectObject.name) }"
        @change="onChange($event)"
        @blur="onBlur($event)"
      >
        <option
          v-for="option in selectObject.options"
          :value="option.value"
          :key="option.key"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="error-text" v-if="errors.has(selectObject.name)">
      {{ errors.first(selectObject.name) }}
    </div>
    <span class="note" v-if="selectObject.example">{{
      selectObject.example
    }}</span>
  </div>
</template>

<script>
export default {
  inject: ['$validator'],
  props: {
    selectObject: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isShowLable: {
      type: Boolean,
      default: true
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

<style scoped lang="scss">
@keyframes spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.register-shop-select {
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
  .select-wrapper {
    .form-select {
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
      -moz-appearance: none;
      -webkit-appearance: none;
      cursor: pointer;

      background-image: linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%);
      background-position: calc(100% - 12px) 16px, calc(100% - 7px) 16px;
      background-size: 5px 5px, 5px 5px;
      background-repeat: no-repeat;

      &::-ms-expand {
        display: none;
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
    white-space: pre-wrap;
  }
  .error-text {
    color: #f00000;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 10px;
  }
}
</style>
