export function BuildingIcon({ className }: { className?: string }) {
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
      <path d="M4 20h16" />
      <path d="M6 20V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15" />
      <path d="M15 10h3a1 1 0 0 1 1 1v9" />
      <path d="M9 8h3M9 12h3M9 16h3" />
    </svg>
  );
}
