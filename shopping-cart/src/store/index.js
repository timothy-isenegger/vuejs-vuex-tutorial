import Vuex from 'vuex'
import vue from 'vue'

Vue.use(Vuex);

new Vuex.Store({
  state: { // like the data
    products: [],
  },

  getters: { // like the computed properties
    productsCount() {

    }
  },

  actions: { // like the methods
    fetchProducts() {

    }
  },

  mutations: {
    setProducts() {

    }
  }
})
