export default function ProductCard({ item }) {
  return (
    <article className="card">
      <img className="thumb" src={item.image} alt={item.name} loading="lazy" />
      <div className="card-body">
        <div className="title">{item.name}</div>
        <div className="desc">{item.description}</div>
        <div className="meta">
          <span className="muted">{item.category}</span>
          <span className="price">₹{item.price.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </article>
  )
}