import {Product} from './Product.js'

export const Products = {
    components: {
        Product
    },
    props:['catalog'],
    data(){
        return {
            products: [],
            filtered: [],
            catalogUrl: '/catalogData.json',
            imgCatalog: 'https://placehold.it/50x100',
        }
    },
    methods: {
        filterProducts(text){
            this.filtered = this.products.filter(product => new RegExp(text, 'i').test(product.product_name))
        },
    },
    mounted() {
        //получаем продукты каталога
        this.$root.getJson(`${this.$root.API + this.catalogUrl}`)
            .then(products => {
                for (let item of products){
                    this.products.push(item)
                    this.filtered.push(item)
                }
            })
    },
    template: `<div class="products">
                <Product v-for="item of filtered" :key="item.id" :product="item" :img="imgCatalog"></Product>  
              </div>`
}
