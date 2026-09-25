export function RoadIcon({ className }: { className?: string }) {
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
      <path d="M8 4 4 20" />
      <path d="m16 4 4 16" />
      <path d="M12 5v2M12 11v2M12 17v2" />
    </svg>
  );
}
