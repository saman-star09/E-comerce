import { useState } from 'react'
import { Search, ShoppingCart, ShoppingBag, X, Sparkles } from 'lucide-react'

const NAV_LINKS = ['New Arrivals', 'Featured', 'Sale']

export default function StoreHeader({
  cartCount,
  onCartClick,
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}) {
  const [bannerOpen, setBannerOpen] = useState(true)

  return (
    <header className="sticky top-0 z-40">
      {bannerOpen && (
        <div className="relative flex items-center justify-center gap-2 bg-sunny-400 px-4 py-2 text-center text-sm font-bold text-ink">
          <Sparkles className="hidden h-4 w-4 shrink-0 sm:block" />
          <span>Free shipping on orders over $50 — treat yourself! 🎉</span>
          <button
            type="button"
            onClick={() => setBannerOpen(false)}
            aria-label="Dismiss banner"
            className="absolute right-3 rounded-full p-1 transition hover:bg-ink/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="border-b-2 border-ink/5 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-4 sm:gap-6">
            <a
              href="#top"
              className="flex shrink-0 items-center gap-2 font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-coral-500 to-berry-500 text-white shadow-md shadow-coral-500/30">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <span>
                Kiwi<span className="text-coral-500">market</span>
              </span>
            </a>

            <div className="relative hidden flex-1 sm:block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for sneakers, totes, sunnies..."
                className="w-full rounded-full border-2 border-ink/10 bg-white py-2.5 pl-11 pr-4 text-sm font-medium text-ink placeholder:text-ink/40 outline-none transition focus:border-coral-400 focus:ring-4 focus:ring-coral-100"
              />
            </div>

            <button
              type="button"
              onClick={onCartClick}
              aria-label="Open cart"
              className="relative ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-white shadow-md transition hover:-translate-y-0.5 hover:bg-teal-600 active:translate-y-0"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-cream bg-berry-500 px-1 text-[11px] font-extrabold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="relative pb-3 sm:hidden">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border-2 border-ink/10 bg-white py-2.5 pl-11 pr-4 text-sm font-medium text-ink placeholder:text-ink/40 outline-none transition focus:border-coral-400 focus:ring-4 focus:ring-coral-100"
            />
          </div>

          <nav className="no-scrollbar flex items-center gap-6 overflow-x-auto pb-3 text-sm font-bold uppercase tracking-wide">
            {NAV_LINKS.map((link) => {
              const isActive = activeCategory === link
              return (
                <button
                  key={link}
                  type="button"
                  onClick={() => onCategoryChange(isActive ? 'All' : link)}
                  className={`shrink-0 border-b-2 pb-1 transition ${
                    isActive
                      ? link === 'Sale'
                        ? 'border-berry-500 text-berry-600'
                        : 'border-coral-500 text-coral-600'
                      : 'border-transparent text-ink/50 hover:text-ink'
                  }`}
                >
                  {link}
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
