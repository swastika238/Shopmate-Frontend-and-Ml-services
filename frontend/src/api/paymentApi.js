import api from './axiosConfig.js'

export const createPaymentIntent = (orderId) =>
  api.post('/payments/create-intent', { orderId })
