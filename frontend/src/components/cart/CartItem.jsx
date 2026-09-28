function CartItem({ item, onRemove }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
      <span>{item.name}</span>
      <span>${item.price}</span>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  )
}

export default CartItem
