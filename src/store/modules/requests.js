export default {
  namespaced: true,
  state() {
    return {
      request: [],
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.request.push(payload);
    },
  },
  actions: {
    contactCoach(context, data) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: data.coachId,
        userEmail: data.email,
        userMessage: data.message,
      };

      console.log(newRequest);
      context.commit('addRequest', newRequest);
      Math.floor
    },
  },
  getters: {},
};
