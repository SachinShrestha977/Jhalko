// store/index.js
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      imageFile: null,
      selectedSize: "8x10", // Default selected size
      quantity: 1, // Default quantity
      sizes: {
        "8x10": 100,
        "8x12": 200,
        "10x12": 300,
        "10x15": 400,
        "12x15": 500,
        "12x18": 600,
      },
      totalPrice: 100, // Initial total price
    };
  },
  mutations: {
    setImageFile(state, payload) {
      state.imageFile = payload;
    },
    setSelectedSize(state, size) {
      state.selectedSize = size;
      state.totalPrice = state.sizes[size] * state.quantity;
    },
    setQuantity(state, quantity) {
      state.quantity = quantity;
      state.totalPrice = state.sizes[state.selectedSize] * quantity;
    },
    SET_TOTAL_PRICE(state) {
      state.totalPrice = state.sizes[state.selectedSize] * state.quantity;
    },
  },
  actions: {
    updateImageFile({ commit }, file) {
      commit("setImageFile", file);
    },
    updateSelectedSize({ commit }, size) {
      commit("setSelectedSize", size);
    },
    updateQuantity({ commit }, quantity) {
      commit("setQuantity", quantity);
    },
    calculateTotalPrice({ commit }) {
      commit("SET_TOTAL_PRICE");
    },
  },
  getters: {
    getImageFile(state) {
      return state.imageFile;
    },
    totalPrice(state) {
      return state.totalPrice;
    },

    totalQuantity(state) {
      return state.quantity;
    },
  },
});
