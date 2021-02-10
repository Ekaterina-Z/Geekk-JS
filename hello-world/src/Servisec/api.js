import axios from "axios";

export default class Api {
  static getUrl() {
    return "product.json";
  }

  static getProducts() {
    return axios.get(Api.getUrl());
  }
}
