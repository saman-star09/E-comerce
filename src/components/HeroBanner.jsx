import { ArrowRight, Star, Truck } from 'lucide-react'

export default function HeroBanner({ onShopClick }) {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-coral-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 h-80 w-80 rounded-full bg-sand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-coral-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center md:py-20 lg:px-8">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral-100 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-coral-700">
            Summer '26 Drop
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Sunshine styles for your{' '}
            <span className="text-coral-500">everyday adventures</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base text-ink/60 sm:text-lg md:mx-0">
            Bold colors, comfy fits, and prices that keep you smiling.
            Discover the new collection made for good vibes only.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <button
              type="button"
              onClick={onShopClick}
              className="group inline-flex items-center gap-2 rounded-full bg-coral-500 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-coral-500/30 transition hover:-translate-y-0.5 hover:bg-coral-600 active:translate-y-0"
            >
              Shop Collection
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-1.5 text-sm font-semibold text-ink/70">
              <div className="flex text-coral-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              4.9 from 2,400+ happy shoppers
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] border-4 border-white bg-gradient-to-br from-coral-300 to-sand-400 shadow-2xl shadow-coral-500/20">
            <div className="absolute inset-0 flex items-center justify-center text-[9rem] sm:text-[11rem]">
              🛍️
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20" />
          </div>

          <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl sm:-left-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral-100 text-coral-600">
              <Star className="h-4 w-4 fill-current" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-ink">4.9 / 5</p>
              <p className="text-xs text-ink/50">Loved by fans</p>
            </div>
          </div>

          <div className="absolute -bottom-4 right-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl sm:-right-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-100 text-sand-600">
              <Truck className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-ink">Free Shipping</p>
              <p className="text-xs text-ink/50">On orders $50+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
