import axios from "axios";

const API_URL = 'https://geuel-sds2.herokuapp.com';

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: null) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}