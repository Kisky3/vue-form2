<template>
  <div id="app">
    <shopsupport-download />
  </div>
</template>

<script>
import shopsupport_download from './pages/ShopsupportDownload.vue'
export default {
  name: 'app',
  components: {
    'shopsupport-download': shopsupport_download
  },
  computed: {
    contentsKey() {
      return this.$store.getters.contentsKey
    }
  }
}
</script>

<style>
body {
  font-size: 12px;
  font-family: 'Hiragino Sans', 'ヒラギノ角ゴシック', 'ＭＳ Ｐゴシック', verdana,
    arial, sans-serif;
  font-weight: 300;
  color: #212121;
}
/* for IE6 */
* html body {
  font-size: 75%;
}
/* for IE7 */
*:first-child + html body {
  font-size: 75%;
}
/*--- default */
body {
  background: #fff;
  color: #212121;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}
p,
span,
label {
  -webkit-font-feature-settings: unset;
  font-feature-settings: unset;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}
</style>
