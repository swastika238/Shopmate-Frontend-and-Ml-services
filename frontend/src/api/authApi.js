import api from './axiosConfig.js'

export const login = (credentials) => api.post('/auth/login', credentials)
export const register = (userData) => api.post('/auth/register', userData)
export const refreshToken = () => api.post('/auth/refresh')
