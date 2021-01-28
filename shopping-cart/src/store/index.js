import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // like the data
    products: [],
  },

  getters: { // like the computed properties
    availableProducts (state, getters) {
      return state.products.filter(product => product.inventory > 0);
    }
  },

  actions: { // like the methods
    fetchProducts ({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    },
  },

  mutations: {
    setProducts(state, products) {
      // update products
      state.products = products;
    }
  }
})
