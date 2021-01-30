import shop from '@/api/shop'

export default { // like the methods
    fetchProducts ({commit}) {
        return new Promise((resolve, reject) => {
        shop.getProducts(products => {
            commit('setProducts', products)
            resolve()
        })
        })
    },

    addProductToCart ({state, getters, commit}, product) {
        if (getters.productIsInStock(product)) {
        const cartItem = state.cart.find(item => item.id === product.id);
        // find cartItem
        if (!cartItem) {
            commit('pushProductToCart', product.id)
        } else {
            commit('incrementItemQuantity', cartItem);
        }

        commit('decrementProductInventory', product);
        }
    },

    checkout ({state, commit}) {
        shop.buyProducts(
        state.cart,
        () => { // Success
            commit('emptyCart');
            commit('setCheckoutStatus', 'success');
        },
        () => { // error
            commit('setCheckoutStatus', 'fail');
        }
        )
    }
}