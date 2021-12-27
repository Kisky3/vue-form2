import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueScrollTo from 'vue-scrollto'

import VeeValidate, { Validator } from 'vee-validate'
import ja from 'vee-validate/dist/locale/ja'

Validator.localize('ja', ja)
Vue.use(VeeValidate, { locale: ja })
Vue.config.productionTip = false
Vue.use(VueScrollTo)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
