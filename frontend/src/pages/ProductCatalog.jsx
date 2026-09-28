import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/productApi.js'
import ProductGrid from '../components/product/ProductGrid.jsx'

function ProductCatalog() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts().then((res) => res.data),
  })

  if (isLoading) return <p>Loading products...</p>
  if (error) return <p>Failed to load products.</p>

  return (
    <div>
      <h2>Products</h2>
      <ProductGrid products={data || []} />
    </div>
  )
}

export default ProductCatalog
