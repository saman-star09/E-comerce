import { useState } from 'react'
import StoreHeader from './components/StoreHeader.jsx'
import HeroBanner from './components/HeroBanner.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import TrustBadges from './components/TrustBadges.jsx'
import StoreFooter from './components/StoreFooter.jsx'
import { products } from './data/products.js'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [...current, { ...product, qty: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQty = (id, delta) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    )
  }

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id))
  }

  const scrollToShop = () => {
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  const cartCount = cartItems.reduce((total, item) => total + item.qty, 0)

  return (
    <div className="min-h-screen bg-cream">
      <StoreHeader
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main>
        <HeroBanner onShopClick={scrollToShop} />
        <ProductGrid
          products={products}
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onAddToCart={addToCart}
        />
        <TrustBadges />
      </main>

      <StoreFooter />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={updateQty}
        onRemove={removeFromCart}
      />
    </div>
  )
}
