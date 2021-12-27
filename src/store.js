import Vue from 'vue'
import Vuex from 'vuex'
import shopRegister from './store/shopRegister'
Vue.use(Vuex)
/**
 * from data は各コンポーネントがpropsで渡している
 */
export default new Vuex.Store({
  modules: {
    shopRegister: shopRegister
  },
  state: {
    holidayFlg: false
  },
  getters: {
    isDevlope: state => state.isDevlope,
    contentsKey: state => state.contentsKey
  },
  mutations: {
    contentsKey(state, { key }) {
      state.contentsKey = key
    }
  },
  actions: {
    contentsKey({ commit }, key) {
      commit('contentsKey', { key: key })
    }
  }
})
