export function PillarsIcon({ className }: { className?: string }) {
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
      <path d="M3 21h18" />
      <path d="M3 7l9-4 9 4Z" />
      <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
    </svg>
  );
}
