import { useState } from 'react'

function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onSend(value)
    setValue('')
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="e.g. I need a phone under 500"
        style={{ flex: 1 }}
        disabled={disabled}
      />
      <button type="submit" disabled={disabled}>Send</button>
    </form>
  )
}

export default ChatInput
