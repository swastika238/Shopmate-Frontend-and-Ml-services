import { useState } from 'react'
import { sendChatMessage } from '../api/chatApi.js'

export function useChat() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async (text) => {
    setMessages((prev) => [...prev, { type: 'TEXT', role: 'user', text }])
    setLoading(true)
    try {
      const { data } = await sendChatMessage(text)
      setMessages((prev) => [...prev, { role: 'bot', ...data }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: 'TEXT', role: 'bot', text: 'Something went wrong. Try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  return { messages, sendMessage, loading }
}
