import { useMemo, useState } from 'react'
import { SlidersHorizontal, PackageSearch } from 'lucide-react'
import ProductCard from './ProductCard.jsx'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'popularity', label: 'Popularity' },
  { value: 'category', label: 'Category' },
]

export default function ProductGrid({
  products,
  searchQuery,
  activeCategory,
  onAddToCart,
}) {
  const [sortBy, setSortBy] = useState('featured')

  const visibleProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    const filtered = products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory
      const matchesQuery =
        !query || product.title.toLowerCase().includes(query)
      return matchesCategory && matchesQuery
    })

    const sorted = [...filtered]
    switch (sortBy) {
      case 'price-asc':
        sorted.sort(
          (a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price),
        )
        break
      case 'price-desc':
        sorted.sort(
          (a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price),
        )
        break
      case 'popularity':
        sorted.sort((a, b) => b.popularity - a.popularity)
        break
      case 'category':
        sorted.sort((a, b) => a.category.localeCompare(b.category))
        break
      default:
        break
    }
    return sorted
  }, [products, searchQuery, activeCategory, sortBy])

  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
            {activeCategory === 'All' ? 'Shop Everything' : activeCategory}
          </h2>
          <p className="mt-1 text-sm font-medium text-ink/50">
            {visibleProducts.length} product
            {visibleProducts.length === 1 ? '' : 's'} found
          </p>
        </div>

        <label className="flex items-center gap-2 rounded-full border-2 border-ink/10 bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-sm">
          <SlidersHorizontal className="h-4 w-4 shrink-0 text-teal-600" />
          <span className="hidden text-ink/50 sm:inline">Sort by</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="cursor-pointer bg-transparent outline-none"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {visibleProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-3xl border-2 border-dashed border-ink/10 bg-white/60 py-20 text-center">
          <PackageSearch className="h-10 w-10 text-ink/25" />
          <p className="font-bold text-ink/60">No products match your search.</p>
          <p className="text-sm text-ink/40">Try a different keyword or category.</p>
        </div>
      )}
    </section>
  )
}
