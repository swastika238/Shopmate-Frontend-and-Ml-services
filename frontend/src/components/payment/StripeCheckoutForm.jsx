import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

function StripeCheckoutForm({ clientSecret, onSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setProcessing(true)
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    })

    if (result.error) {
      setError(result.error.message)
    } else if (result.paymentIntent.status === 'succeeded') {
      onSuccess?.(result.paymentIntent)
    }
    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Processing...' : 'Pay'}
      </button>
    </form>
  )
}

export default StripeCheckoutForm
