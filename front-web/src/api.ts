import axios from "axios";

const API_URL = 'https://geuel-sds2.herokuapp.com'

export function fetchProducts() {
  return axios(`${API_URL}/products`)
}