<template>
  <div class="spinner">
    <div></div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style lang="scss" scoped>
@keyframes o-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.spinner {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #005ebb;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: o-spin 0.8s linear infinite;
}
</style>
