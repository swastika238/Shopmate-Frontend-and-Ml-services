import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../api/orderApi.js'

function OrderHistory() {
  const { data: orders, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: () => getOrders().then((res) => res.data),
  })

  if (isLoading) return <p>Loading orders...</p>

  return (
    <div>
      <h2>Order History</h2>
      {(orders || []).map((order) => (
        <div key={order.id} style={{ borderBottom: '1px solid #eee', padding: '0.5rem 0' }}>
          <p>Order #{order.id} — {order.status}</p>
        </div>
      ))}
    </div>
  )
}

export default OrderHistory
