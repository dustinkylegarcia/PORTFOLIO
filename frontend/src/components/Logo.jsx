export default function Logo({ className = "h-10" }) {
  return (
    <svg
      viewBox="0 0 320 80"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TIN logo"
    >
      <defs>
        <linearGradient id="tinBlue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="55"
        fontSize="48"
        fontFamily="Inter, monospace"
        fontWeight="700"
        letterSpacing="2"
        fill="url(#tinBlue)"
      >
        &lt;/&gt; TIN
      </text>
    </svg>
  );
}
