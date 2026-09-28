import { useState } from 'react'
import ChatMessage from './ChatMessage.jsx'
import ChatInput from './ChatInput.jsx'
import { useChat } from '../../hooks/useChat.js'

function ChatWidget() {
  const [open, setOpen] = useState(false)
  const { messages, sendMessage, loading } = useChat()

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
      {open && (
        <div
          style={{
            width: 320,
            height: 420,
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: 12,
            display: 'flex',
            flexDirection: 'column',
            padding: '0.75rem',
            marginBottom: '0.5rem',
          }}
        >
          <strong>ShopMate Assistant</strong>
          <div style={{ flex: 1, overflowY: 'auto', margin: '0.5rem 0' }}>
            {messages.map((m, i) => (
              <ChatMessage key={i} message={m} />
            ))}
            {loading && <p className="chat-bubble">Typing...</p>}
          </div>
          <ChatInput onSend={sendMessage} disabled={loading} />
        </div>
      )}
      <button onClick={() => setOpen((o) => !o)}>
        {open ? 'Close' : 'Chat'}
      </button>
    </div>
  )
}

export default ChatWidget
