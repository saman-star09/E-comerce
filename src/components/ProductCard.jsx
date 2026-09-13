import { useEffect, useState } from 'react'
import { Star, ShoppingCart, Check } from 'lucide-react'
import ProductThumb from './ProductThumb.jsx'

export default function ProductCard({ product, onAddToCart }) {
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    if (!justAdded) return
    const timer = setTimeout(() => setJustAdded(false), 1400)
    return () => clearTimeout(timer)
  }, [justAdded])

  const handleAdd = () => {
    onAddToCart(product)
    setJustAdded(true)
  }

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border-2 border-ink/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <ProductThumb
          gradient={product.gradient}
          emoji={product.emoji}
          className="aspect-square w-full text-6xl transition duration-300 group-hover:scale-105"
        />

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm ${
              product.badge === 'Sale' ? 'bg-ink' : 'bg-coral-500'
            }`}
          >
            {product.badge}
          </span>
        )}

        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-ink shadow-sm">
          <Star className="h-3.5 w-3.5 fill-coral-500 text-coral-500" />
          {product.rating}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-ink/40">
          {product.category}
        </p>
        <h3 className="font-display text-base font-bold leading-snug text-ink">
          {product.title}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-coral-600">
              ${(product.discountPrice ?? product.price).toFixed(2)}
            </span>
            {product.discountPrice && (
              <span className="text-sm font-medium text-ink/35 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={`mt-2 flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-sm transition active:scale-95 ${
            justAdded ? 'bg-coral-600' : 'bg-ink hover:bg-coral-500'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="h-4 w-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  )
}
