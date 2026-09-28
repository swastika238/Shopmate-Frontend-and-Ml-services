function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: '1rem' }}>
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <ul>
        {(product.features || []).map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductCard
