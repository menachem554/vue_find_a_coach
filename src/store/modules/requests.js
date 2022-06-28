export default {
  namespaced: true,
  state() {
    return {
      userId: 'c3',
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    },
  },
};
