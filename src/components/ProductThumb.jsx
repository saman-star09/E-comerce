// Bright gradient placeholder used in place of real product photography.
export default function ProductThumb({ gradient, emoji, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
    >
      <span className="drop-shadow-sm" role="img" aria-hidden="true">
        {emoji}
      </span>
    </div>
  )
}
