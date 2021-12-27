export default {
  state: {
    id: null,
    token: null,
    step: 0,
    loading: false,
    shopRegister: null,
    error: null,
    progress: 0
  },
  getters: {
    id: state => state.id,
    token: state => state.token,
    step: state => state.step,
    shopRegister: state => state.shopRegister,
    loading: state => state.loading,
    error: state => state.error,
    progress: state => state.progress
  },
  mutations: {
    nextStep(state) {
      state.step++
    },
    prevStep(state) {
      state.step--
    },
    moveToStep(state, step) {
      state.step = step
    },
    loading(state, loading) {
      state.loading = loading
    },
    id(state, id) {
      state.id = id
    },
    token(state, token) {
      state.token = token
    },
    shopRegister(state, shopRegister) {
      state.shopRegister = shopRegister
    },
    error(state, error) {
      state.error = error
    },
    progress(state, progress) {
      state.progress = progress
    }
  },
  actions: {
    nextStep({ commit }) {
      commit('nextStep')
    },
    prevStep({ commit }) {
      commit('prevStep')
    },
    moveToStep({ commit }, step) {
      commit('moveToStep', step)
    },
    loading({ commit }, loading) {
      commit('loading', loading)
    },
    id({ commit }, id) {
      commit('id', id)
    },
    token({ commit }, token) {
      commit('token', token)
    },
    shopRegister({ commit }, shopRegister) {
      commit('shopRegister', shopRegister)
    },
    error({ commit }, error) {
      commit('error', error)
    },
    progress({ commit }, progress) {
      commit('progress', progress)
    }
  }
}
