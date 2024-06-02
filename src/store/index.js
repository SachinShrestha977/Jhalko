// store/index.js
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      imageFile: null,
    };
  },
  mutations: {
    setImageFile(state, payload) {
      state.imageFile = payload;
    },
  },
  actions: {
    updateImageFile({ commit }, file) {
      commit("setImageFile", file);
    },
  },
  getters: {
    getImageFile(state) {
      return state.imageFile;
    },
  },
});
