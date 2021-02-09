
import {Products} from './Products.js'
import {Cart} from './Cart.js'
import {Search} from './Search.js'
// import {CustomError} from './CustomError.js'

const Shop = {
    components: {
        // CustomError,
        Products,
        Cart,
        Search
    },
    data(){
        return {
            API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
            isError: false

        }
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(data => data.json())
                .catch(error => {
                    this.isError = true
                    console.log(error)

                })
        },
    },
};

Vue.createApp(Shop).mount('#app')

