const PRODUCTS = [
  { id: 1, name: 'Widget', description: 'A useful widget for everyday tasks.', price: '$9.99' },
  { id: 2, name: 'Gadget', description: 'A handy gadget that saves you time.', price: '$14.99' },
  { id: 3, name: 'Gizmo', description: 'A fun gizmo for tech enthusiasts.', price: '$19.99' },
  { id: 4, name: 'Doohickey', description: 'A simple doohickey that just works.', price: '$4.99' },
]

function Products() {
  return (
    <section className="page products-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {PRODUCTS.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button type="button">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
