<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
        <li v-for="product in products" :key="product.title">
            {{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
        </li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <p v-if="checkoutStatus">{{ checkoutStatus }} </p>
    <button @click="checkout()">Checkout</button>
  </div>
</template>

<script>

import {mapState, mapGetters, mapActions} from 'vuex';

export default {
    name: 'ShoppingCart',
    computed: {
        ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotal'
        }),

        ...mapState({
            checkoutStatus: state => state.cart.checkoutStatus,
        })
    },
    methods: {
        ...mapActions({
            checkout: 'checkout'
        })
    }
}
</script>

<style scoped>

</style>
