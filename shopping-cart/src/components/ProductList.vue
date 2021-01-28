<template>
  <div>
    <h1>Products List</h1>
    <ul>
      <li v-for="product in products">{{ product.title }} – {{ product.price }}</li>
    </ul>
  </div>
</template>

<script>
import shop from "../api/shop";

export default {
  name: "ProductList",
  data () {
    return {
      products: [],
    }
  },
  created() {
    shop.getProducts(products => {
      this.products = products;
    })
  }
}
</script>

<style scoped>

</style>
