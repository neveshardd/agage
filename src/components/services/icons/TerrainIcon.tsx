export function TerrainIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m3 19 6-9 4 5 3-4 5 8Z" />
      <path d="M3 19h18" />
      <circle cx="17" cy="6" r="2" />
    </svg>
  );
}
