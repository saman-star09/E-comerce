import { Truck, Headphones, ShieldCheck, RotateCcw } from 'lucide-react'

const BADGES = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over $50',
    bg: 'bg-coral-100',
    fg: 'text-coral-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: "We're here whenever you need",
    bg: 'bg-teal-100',
    fg: 'text-teal-600',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payment',
    description: '100% protected checkout',
    bg: 'bg-sunny-100',
    fg: 'text-sunny-600',
  },
  {
    icon: RotateCcw,
    title: '30-Day Returns',
    description: 'Easy, no-questions-asked',
    bg: 'bg-berry-100',
    fg: 'text-berry-600',
  },
]

export default function TrustBadges() {
  return (
    <section className="border-y-2 border-ink/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {BADGES.map(({ icon: Icon, title, description, bg, fg }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${bg} ${fg}`}
              >
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-ink sm:text-base">
                  {title}
                </p>
                <p className="text-xs text-ink/50 sm:text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
