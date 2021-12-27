<template>
  <div>
    <div
      class="check__container"
      :class="{
        error: errors.has(checkObject.name)
      }"
    >
      <template v-for="(option, index) in checkObject.options">
        <label :key="index" class="check-label">
          <input
            type="checkbox"
            v-model.trim="checkObject.value"
            :name="checkObject.name"
            :data-vv-as="checkObject.displayName"
            v-validate="checkObject.validate"
            :value="option.value"
          />{{ option.label }}
        </label>
      </template>
    </div>
    <div class="error-text" v-if="errors.has(checkObject.name)">
      {{ errors.first(checkObject.name) }}
    </div>
    <span class="note" v-if="checkObject.example">{{
      checkObject.example
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'Check',
  inject: ['$validator'],
  props: {
    checkObject: {
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
    updateValue: function(e) {
      let value = this.checkObject.value
      e.target.checked
        ? value.push(e.target.value)
        : (value = value.filter(v => v !== e.target.value))
    }
  }
}
</script>
<style scoped lang="scss">
input[type='checkbox'] {
  transform: scale(1.5);
  margin: 10px 5px;
  cursor: pointer;
}
.check__container {
  .check-label {
    font-size: 16px;
    margin: 10px 10px 10px 0;
  }
}

.error {
  border: solid 2px red;
  background-color: #fee5e5;
  border-radius: 3px;
  margin-bottom: 10px;
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
</style>
