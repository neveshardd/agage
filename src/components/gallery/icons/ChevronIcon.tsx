export function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M10 1.5L2 10L10 18.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
