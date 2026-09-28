import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import StripeCheckoutForm from '../components/payment/StripeCheckoutForm.jsx'
import { createOrder } from '../api/orderApi.js'
import { createPaymentIntent } from '../api/paymentApi.js'

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

function Checkout() {
  const [clientSecret, setClientSecret] = useState(null)

  useEffect(() => {
    async function initOrder() {
      const { data: order } = await createOrder({ items: [] }) // wire up real cart items
      const { data: intent } = await createPaymentIntent(order.id)
      setClientSecret(intent.clientSecret)
    }
    initOrder()
  }, [])

  return (
    <div>
      <h2>Checkout</h2>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <StripeCheckoutForm
            clientSecret={clientSecret}
            onSuccess={() => alert('Payment successful!')}
          />
        </Elements>
      ) : (
        <p>Preparing checkout...</p>
      )}
    </div>
  )
}

export default Checkout
