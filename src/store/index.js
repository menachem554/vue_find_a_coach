import { createStore } from 'vuex';

import coaches from './modules/coaches';
import requests from './modules/requests';

const store = createStore({
  modules: {
    coaches,
    requests,
  },

  state: {},
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
