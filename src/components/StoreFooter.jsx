import { useState } from 'react'
import {
  ShoppingBag,
  Globe,
  MessageCircle,
  Send,
  Mail,
  CreditCard,
} from 'lucide-react'

const SHOP_LINKS = ['New Arrivals', 'Featured', 'Sale', 'Best Sellers']
const SERVICE_LINKS = [
  'Contact Us',
  'FAQs',
  'Shipping & Returns',
  'Track My Order',
]
const PAYMENT_METHODS = ['Visa', 'Mastercard', 'PayPal', 'Apple Pay']

export default function StoreFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-xl font-extrabold text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-coral-500 text-white">
                <ShoppingBag className="h-4 w-4" />
              </span>
              Kiwi<span className="text-coral-400">market</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Bold colors, comfy fits, and prices that keep you smiling.
              Good vibes, delivered to your door.
            </p>
            <div className="mt-5 flex gap-3">
              {[Globe, MessageCircle, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-coral-500"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-cream/40">
              Shop
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SHOP_LINKS.map((link) => (
                <li key={link}>
                  <a href="#shop" className="transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-cream/40">
              Customer Service
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 p-6">
            <h3 className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-wide text-coral-400">
              <Mail className="h-4 w-4" />
              Stay in the loop
            </h3>
            <p className="mt-2 text-sm">
              Get 10% off your first order plus sunny deals in your inbox.
            </p>
            {subscribed ? (
              <p className="mt-4 rounded-full bg-coral-500/20 px-4 py-2.5 text-center text-sm font-bold text-coral-300">
                🎉 You're subscribed!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex items-center gap-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full min-w-0 rounded-full border-2 border-white/10 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-cream/40 outline-none focus:border-coral-400"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-coral-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-coral-600"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t-2 border-white/10 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Kiwimarket. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-bold text-cream/70"
              >
                <CreditCard className="h-3.5 w-3.5" />
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
