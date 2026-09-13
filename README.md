# Kiwimarket — E-Commerce Storefront Template

A fast, mobile-first e-commerce storefront template built with React (Vite), Tailwind CSS v4, and [lucide-react](https://lucide.dev/) icons. Bright, jovial colors — no gradients-of-purple "AI" look here.

## Stack

- **React 19** + **Vite** for a fast dev loop
- **Tailwind CSS v4** (via `@tailwindcss/vite`) for styling
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Build for production with `npm run build`, preview it with `npm run preview`.

## Structure

```
src/
  components/
    StoreHeader.jsx    # top banner, nav, search, cart icon with badge
    HeroBanner.jsx      # promotional hero section
    ProductGrid.jsx     # responsive product grid + sort bar
    ProductCard.jsx      # individual product card
    ProductThumb.jsx     # gradient placeholder "image"
    CartDrawer.jsx      # slide-over cart with qty controls
    TrustBadges.jsx     # shipping / support / payment / returns row
    StoreFooter.jsx     # newsletter, links, payment icons
  data/
    products.js         # mock product catalog
  App.jsx                # lifts cart + search/filter state, composes the page
```

Cart state, search, and category filtering are all managed with plain React `useState` in `App.jsx` and passed down as props — no external state library needed for a template this size.
