import axios from "axios";

export default class Api {
  constructor() {
    this.PRODUCTS = '/products'
    this.axios = axios.create({ baseURL: process.env.VUE_APP_DB_URL || 'http://localhost:3000'})
  }

  getProducts(){
    return this.axios(this.PRODUCTS)
  }
}
