export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="4" y="9" width="3" height="10" fill="currentColor" />
      <circle cx="5.5" cy="5.5" r="1.8" fill="currentColor" />
      <path
        d="M11 9h3v1.6c.7-1.1 1.9-1.8 3.2-1.8 2.4 0 3.8 1.6 3.8 4.4V19h-3v-5.2c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.4-.1.3-.1.7-.1 1V19h-3V9Z"
        fill="currentColor"
      />
    </svg>
  );
}
