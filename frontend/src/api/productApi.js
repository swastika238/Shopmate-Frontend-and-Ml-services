import api from './axiosConfig.js'

export const getProducts = (params) => api.get('/products', { params })
export const getProductById = (id) => api.get(`/products/${id}`)
export const searchProducts = (filters) => api.post('/products/search', filters)
