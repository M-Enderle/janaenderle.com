import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMobile: false,
    gridMode: false
  },
  mutations: {
    SET_IS_MOBILE(state, isMobile) {
      state.isMobile = isMobile
    },
    SET_GRID_MODE(state, gridMode) {
      state.gridMode = gridMode
    }
  },
  actions: {
    setIsMobile({ commit }, isMobile) {
      commit('SET_IS_MOBILE', isMobile)
    },
    setGridMode({ commit }, gridMode) {
      commit('SET_GRID_MODE', gridMode)
    }
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});