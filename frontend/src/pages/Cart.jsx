import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'
import CartItem from '../components/cart/CartItem.jsx'
import { Link } from 'react-router-dom'

function Cart() {
  const { items, removeItem } = useContext(CartContext)

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={removeItem} />
      ))}
      {items.length > 0 && <Link to="/checkout">Checkout</Link>}
    </div>
  )
}

export default Cart
