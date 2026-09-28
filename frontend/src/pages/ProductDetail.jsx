import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProductById } from '../api/productApi.js'

function ProductDetail() {
  const { id } = useParams()
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id).then((res) => res.data),
  })

  if (isLoading) return <p>Loading...</p>
  if (!product) return <p>Product not found.</p>

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <ul>
        {(product.features || []).map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductDetail
