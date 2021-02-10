<template>
    <section v-if="products" class="center product-box">
       <product-card
               v-for="product in this.$store.state.products"
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
    import {mapActions} from 'vuex';
    export default {
        name: "CatalogBlock",
        components: {ProductCard},
        data () {
            return {

            }
    },
    computed:{},
    methods: {
            ...mapActions ([
               'GET_PRODUCTS_FROM_API'
                        ]),
            showChildIdConsol(data){
                console.log(data)
            }

    },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
        }
    }
</script>

<style scoped>

</style>