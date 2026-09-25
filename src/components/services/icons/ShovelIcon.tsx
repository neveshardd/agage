export function ShovelIcon({ className }: { className?: string }) {
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
      <path d="m13 11 7-7" />
      <path d="m18.5 2.5 3 3" />
      <path d="m9.5 9.5 5 5-4.5 4.5a3.5 3.5 0 0 1-5 0 3.5 3.5 0 0 1 0-5Z" />
    </svg>
  );
}
