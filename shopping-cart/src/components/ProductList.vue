<template>
  <div>
    <h1>Products List</h1>
    <img
      v-if="loading"
      src="https://i.imgur.com/JfPpwOA.gif">
    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} – {{ product.price | currency }} - {{ product.inventory }}
        <button 
        @click="addProductToCart(product)"
        :disabled="!productIsInStock(product)">
          Add to cart
          </button>
      </li>
    </ul>
  </div>
</template>

<script> 

import {mapState, mapGetters, mapActions} from 'vuex';

export default {
  name: "ProductList",
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapState({
      products: 'products',
    }),

    ...mapGetters({
      productIsInStock: 'productIsInStock',
    }),
  },

  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      addProductToCart: 'addProductToCart'
    }),
  },

  created() {
    this.loading = true
    this.fetchProducts()
      .then(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>
