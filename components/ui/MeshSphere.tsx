export default function MeshSphere({ className }: { className?: string }) {
  const cx = 300, cy = 300, r = 272;

  // Latitude lines — horizontal ellipses at different heights
  const latLines: { y: number; rx: number; ry: number }[] = [];
  for (let step = -9; step <= 9; step++) {
    const ratio = step / 9;
    const y = cy + ratio * r;
    const rx = Math.sqrt(Math.max(0, r * r - (y - cy) * (y - cy)));
    const ry = rx * 0.26;
    if (rx > 10) latLines.push({ y, rx, ry });
  }

  // Longitude lines — ellipses rotated around vertical axis
  const lonAngles = Array.from({ length: 10 }, (_, i) => i * 18);

  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sph-bg" cx="38%" cy="36%" r="65%">
          <stop offset="0%" stopColor="#1e2438" />
          <stop offset="55%" stopColor="#0d1120" />
          <stop offset="100%" stopColor="#060912" />
        </radialGradient>
        <radialGradient id="sph-shine" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id="sph-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(201,243,29,0.08)" />
          <stop offset="100%" stopColor="rgba(201,243,29,0)" />
        </radialGradient>
        <clipPath id="sph-clip">
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>

      {/* Outer glow */}
      <circle cx={cx} cy={cy} r={r + 50} fill="url(#sph-glow)" />

      {/* Base sphere */}
      <circle cx={cx} cy={cy} r={r} fill="url(#sph-bg)" />

      {/* Mesh grid clipped to sphere */}
      <g clipPath="url(#sph-clip)" fill="none">
        {latLines.map((l, i) => (
          <ellipse
            key={`lat-${i}`}
            cx={cx} cy={l.y}
            rx={l.rx} ry={l.ry}
            stroke="rgba(201,243,29,0.10)"
            strokeWidth="0.7"
          />
        ))}
        {lonAngles.map((angle, i) => (
          <ellipse
            key={`lon-${i}`}
            cx={cx} cy={cy}
            rx={r * 0.32} ry={r}
            stroke="rgba(201,243,29,0.07)"
            strokeWidth="0.7"
            transform={`rotate(${angle}, ${cx}, ${cy})`}
          />
        ))}
        {/* Extra diagonal lines for organic feel */}
        {[20, 45, 70, 110, 135, 160].map((angle, i) => (
          <ellipse
            key={`diag-${i}`}
            cx={cx} cy={cy}
            rx={r * 0.55} ry={r * 0.55}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.5"
            transform={`rotate(${angle}, ${cx}, ${cy})`}
          />
        ))}
      </g>

      {/* Surface highlight */}
      <circle cx={cx} cy={cy} r={r} fill="url(#sph-shine)" />

      {/* Outer rim */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1"
      />

      {/* Bright equator highlight */}
      <ellipse
        cx={cx} cy={cy}
        rx={r} ry={r * 0.26}
        fill="none"
        stroke="rgba(201,243,29,0.12)"
        strokeWidth="1"
      />
    </svg>
  );
}
