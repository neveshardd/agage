export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0 1H20M0 8H20M0 15H20"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
