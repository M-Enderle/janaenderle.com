import { createStore } from 'vuex'

const store = createStore({
  state: {
    isMobile: false
  },
  mutations: {
    SET_IS_MOBILE(state, isMobile) {
      state.isMobile = isMobile
    }
  },
  actions: {
    setIsMobile({ commit }, isMobile) {
      commit('SET_IS_MOBILE', isMobile)
    }
  }
})

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
  });
