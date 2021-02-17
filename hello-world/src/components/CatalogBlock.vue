<template>
    <section v-if="products" class="center product-box">
       <product-card
               v-for="product in products"
               :id="product.id"
               :name="product.name"
               :image="product.src"
               :price="product.price"
               :key="product.id"
               @sendId="showChildIdConsol"
       ></product-card>
        <button class="button">Browse All Products</button>
    </section>
    <h3 v-else>No products found</h3>
</template>

<script>

    import ProductCard from "./ProductCard";
    import { computed } from 'vue'
    import { useStore } from 'vuex'


    export default {
        name: "CatalogBlock",
        components: {ProductCard},
        setup() {
            const store = useStore()
            store.dispatch('GET_PRODUCTS_FROM_API')
            const products = computed(() => store.getters['PRODUCTS'])
            const showChildIdConsole = (data) => console.log(data)

            return { products, showChildIdConsole }
        }
    }
</script>

<style scoped>

</style>