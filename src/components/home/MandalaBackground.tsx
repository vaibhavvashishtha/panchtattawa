export function MandalaBackground({ className }: { className?: string }) {
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315]
  const petals = [0, 60, 120, 180, 240, 300]

  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Concentric rings */}
      {[240, 195, 155, 115, 78, 42].map((r, i) => (
        <circle
          key={r}
          cx="250"
          cy="250"
          r={r}
          fill="none"
          stroke="#E86830"
          strokeWidth="0.6"
          opacity={0.08 + i * 0.04}
        />
      ))}

      {/* Spokes */}
      {spokes.map((angle) => {
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={angle}
            x1="250"
            y1="250"
            x2={250 + 240 * Math.sin(rad)}
            y2={250 - 240 * Math.cos(rad)}
            stroke="#E86830"
            strokeWidth="0.5"
            opacity="0.1"
          />
        )
      })}

      {/* Lotus petals (6-fold) */}
      {petals.map((angle) => {
        const rad = (angle * Math.PI) / 180
        const cx = 250 + 55 * Math.sin(rad)
        const cy = 250 - 55 * Math.cos(rad)
        return (
          <ellipse
            key={angle}
            cx={cx}
            cy={cy}
            rx="55"
            ry="26"
            fill="none"
            stroke="#E86830"
            strokeWidth="0.6"
            opacity="0.18"
            transform={`rotate(${angle}, ${cx}, ${cy})`}
          />
        )
      })}

      {/* Outer petal ring (8-fold) */}
      {spokes.map((angle) => {
        const rad = (angle * Math.PI) / 180
        const cx = 250 + 155 * Math.sin(rad)
        const cy = 250 - 155 * Math.cos(rad)
        return (
          <ellipse
            key={`outer-${angle}`}
            cx={cx}
            cy={cy}
            rx="40"
            ry="18"
            fill="none"
            stroke="#E86830"
            strokeWidth="0.5"
            opacity="0.12"
            transform={`rotate(${angle}, ${cx}, ${cy})`}
          />
        )
      })}

      {/* Diamond markers at cardinal points */}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const cx = 250 + 195 * Math.sin(rad)
        const cy = 250 - 195 * Math.cos(rad)
        return (
          <rect
            key={`diamond-${angle}`}
            x={cx - 7}
            y={cy - 7}
            width="14"
            height="14"
            fill="rgba(201,169,110,0.08)"
            stroke="#E86830"
            strokeWidth="0.6"
            opacity="0.3"
            transform={`rotate(${angle + 45}, ${cx}, ${cy})`}
          />
        )
      })}

      {/* Centre */}
      <circle cx="250" cy="250" r="10" fill="none" stroke="#E86830" strokeWidth="0.8" opacity="0.3" />
      <circle cx="250" cy="250" r="4" fill="#E86830" opacity="0.35" />
    </svg>
  )
}
