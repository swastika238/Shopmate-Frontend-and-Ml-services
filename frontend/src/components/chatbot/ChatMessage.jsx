import ProductGrid from '../product/ProductGrid.jsx'

function ChatMessage({ message }) {
  if (message.type === 'PRODUCT_LIST') {
    return (
      <div>
        {message.messageText && <p className="chat-bubble">{message.messageText}</p>}
        <ProductGrid products={message.products || []} />
      </div>
    )
  }

  return <div className="chat-bubble">{message.text}</div>
}

export default ChatMessage
