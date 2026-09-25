export function FactoryIcon({ className }: { className?: string }) {
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
      <path d="M3 20V10l5 3V10l5 3V10l5 3V4h3v16Z" />
      <path d="M7 17h2M11.5 17h2M16 17h2" />
    </svg>
  );
}
