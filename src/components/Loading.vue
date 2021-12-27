<template>
  <div class="loader_container">
    <div class="loader"></div>
  </div>
</template>
<style scoped>
.loader,
.loader:after {
  border-radius: 50%;
  width: 3em;
  height: 3em;
}
.loader {
  margin: 0 auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.5em solid rgba(255, 147, 0, 0.2);
  border-right: 0.5em solid rgba(255, 147, 0, 0.2);
  border-bottom: 0.5em solid rgba(255, 147, 0, 0.2);
  border-left: 0.5em solid #ff9300;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
