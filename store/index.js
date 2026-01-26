import { createStore } from 'vuex';

const store = createStore({
  state: {
    isMobile: false,
  },
  mutations: {
    setIsMobile(state, value) {
      state.isMobile = value;
    },
  },
  actions: {
    updateIsMobile({ commit }, value) {
      commit('setIsMobile', value);
    },
  },
});

export default store;