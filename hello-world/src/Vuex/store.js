
import {createStore} from 'vuex';
import Api from "@/Servisec/api";

const api = new Api()

export default createStore({
    state: {
        products:[]
    },
    getters: {
        PRODUCTS: (state) => state.products
    },
    mutations: {
        SET_PRODUCTS_TO_STATE:(state, products) => {
            state.products = products
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return api.getProducts()
                .then((products)=>{
                    commit('SET_PRODUCTS_TO_STATE',products.data)
                    return products;
                })
                .catch((error)=>{
                    console.log(error);
                    return  error;

                })
        }
    },

});