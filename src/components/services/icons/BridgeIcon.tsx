export function BridgeIcon({ className }: { className?: string }) {
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
      <path d="M2 15h20" />
      <path d="M4 15C4 8.5 20 8.5 20 15" />
      <path d="M4 15v5M20 15v5" />
      <path d="M8 11v4M12 10v5M16 11v4" />
    </svg>
  );
}
