import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import ProductThumb from './ProductThumb.jsx'

const FREE_SHIPPING_THRESHOLD = 50

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemove,
}) {
  const subtotal = items.reduce(
    (sum, item) => sum + (item.discountPrice ?? item.price) * item.qty,
    0,
  )
  const remainingForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal,
  )
  const shippingProgress = Math.min(
    100,
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
  )

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b-2 border-ink/5 px-5 py-4 sm:px-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
            <ShoppingBag className="h-5 w-5 text-coral-500" />
            Your Cart
            {items.length > 0 && (
              <span className="rounded-full bg-coral-100 px-2 py-0.5 text-xs font-extrabold text-coral-600">
                {items.reduce((n, i) => n + i.qty, 0)}
              </span>
            )}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-full p-2 text-ink/50 transition hover:bg-ink/5 hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length > 0 ? (
          <>
            <div className="border-b-2 border-ink/5 bg-white px-5 py-3 sm:px-6">
              {remainingForFreeShipping > 0 ? (
                <p className="text-xs font-bold text-ink/60">
                  Add{' '}
                  <span className="text-coral-600">
                    ${remainingForFreeShipping.toFixed(2)}
                  </span>{' '}
                  more for free shipping!
                </p>
              ) : (
                <p className="text-xs font-extrabold text-coral-600">
                  🎉 You've unlocked free shipping!
                </p>
              )}
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-ink/10">
                <div
                  className="h-full rounded-full bg-coral-500 transition-all duration-500"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            <ul className="flex-1 divide-y-2 divide-ink/5 overflow-y-auto px-5 sm:px-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 py-4">
                  <ProductThumb
                    gradient={item.gradient}
                    emoji={item.emoji}
                    className="h-20 w-20 shrink-0 rounded-2xl text-3xl"
                  />

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold leading-snug text-ink">
                        {item.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        aria-label={`Remove ${item.title}`}
                        className="shrink-0 text-ink/30 transition hover:text-coral-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="mt-0.5 text-sm font-extrabold text-coral-600">
                      ${(item.discountPrice ?? item.price).toFixed(2)}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 rounded-full border-2 border-ink/10 bg-white p-1">
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.id, -1)}
                          aria-label="Decrease quantity"
                          className="flex h-6 w-6 items-center justify-center rounded-full text-ink/60 transition hover:bg-ink/5"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-5 text-center text-sm font-bold text-ink">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQty(item.id, 1)}
                          aria-label="Increase quantity"
                          className="flex h-6 w-6 items-center justify-center rounded-full text-ink/60 transition hover:bg-ink/5"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-extrabold text-ink">
                        $
                        {(
                          (item.discountPrice ?? item.price) * item.qty
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t-2 border-ink/5 bg-white px-5 py-5 sm:px-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-bold text-ink/60">Subtotal</span>
                <span className="font-display text-xl font-extrabold text-ink">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-coral-500/30 transition hover:-translate-y-0.5 hover:bg-coral-600 active:translate-y-0"
              >
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="mt-3 text-center text-xs text-ink/40">
                Taxes and shipping calculated at checkout
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-coral-100 text-coral-500">
              <ShoppingBag className="h-8 w-8" />
            </span>
            <p className="font-display text-lg font-extrabold text-ink">
              Your cart is empty
            </p>
            <p className="text-sm text-ink/50">
              Go find something sunny to add to it!
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 rounded-full bg-ink px-6 py-2.5 text-sm font-bold text-white transition hover:bg-coral-500"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
