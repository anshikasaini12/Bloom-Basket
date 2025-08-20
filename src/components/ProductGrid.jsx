import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ items }) {
  if (!items.length) {
    return <p className="muted">No flowers match your filters.</p>
  }
  return (
    <div className="grid">
      {items.map(item => <ProductCard key={item.id} item={item} />)}
    </div>
  )
}