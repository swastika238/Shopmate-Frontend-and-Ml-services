import api from './axiosConfig.js'

// Hits API Gateway -> chatbot-service (which internally calls ml-service)
export const sendChatMessage = (query) => api.post('/chat', { query })
