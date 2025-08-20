  import { useMemo, useState } from 'react'
  import flowers from './data/flowers.js'
  import Header from './components/Header.jsx'
  import CategoryPills from './components/CategoryPills.jsx'
  import ProductGrid from './components/ProductGrid.jsx'

  export default function App() {
    const categories = useMemo(() => ['All', ...Array.from(new Set(flowers.map(f => f.category)))], [])
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('All')
    const [sort, setSort] = useState('name-asc')

    const filtered = useMemo(() => {
      let list = [...flowers]
      if (category !== 'All') list = list.filter(f => f.category === category)
      if (query.trim()) {
        const q = query.toLowerCase()
        list = list.filter(f => f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q))
      }
      switch (sort) {
        case 'name-desc': list.sort((a,b)=>b.name.localeCompare(a.name)); break
        case 'price-asc': list.sort((a,b)=>a.price - b.price); break
        case 'price-desc': list.sort((a,b)=>b.price - a.price); break
        default: list.sort((a,b)=>a.name.localeCompare(b.name))
      }
      return list
    }, [query, category, sort])

    return (
      <>
        <header>
          <div className="container nav">
            <div className="brand">
              <div className="logo">🌸</div>
              Bloom Basket
            </div>

            <div className="toolbar">
              <div className="search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <input placeholder="Search flowers, bouquets, colors..." value={query} onChange={e=>setQuery(e.target.value)} />
              </div>
            </div>
          </div>
        </header>

        <main className="container">
          <section className="hero">
            <h1>Fresh flowers for every occasion</h1>
            <div className="muted">Browse our hand‑picked collection: roses, lilies, orchids, bouquets and more.</div>

            <CategoryPills categories={categories} active={category} onChange={setCategory} />

            <div className="sort">
              <span className="muted">Sort by</span>
              <select className="select" value={sort} onChange={e=>setSort(e.target.value)}>
                <option value="name-asc">Name (A → Z)</option>
                <option value="name-desc">Name (Z → A)</option>
                <option value="price-asc">Price (Low → High)</option>
                <option value="price-desc">Price (High → Low)</option>
              </select>
              <span className="muted" style={{marginLeft: 'auto'}}>{filtered.length} item(s)</span>
            </div>
          </section>

          <ProductGrid items={filtered} />
        </main>

        <footer>
          <div className="container">
            © {new Date().getFullYear()} Bloom Basket — Catalog showcase demo.
          </div>
        </footer>
      </>
    )
  }