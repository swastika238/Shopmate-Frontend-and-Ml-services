import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (product) => setItems((prev) => [...prev, product])
  const removeItem = (productId) =>
    setItems((prev) => prev.filter((p) => p.id !== productId))
  const clearCart = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
