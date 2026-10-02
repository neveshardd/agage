export function VolumeIcon({
  muted,
  className,
}: {
  muted: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d={
          muted
            ? "M16 9.5l5 5M21 9.5l-5 5"
            : "M15.5 9a4.5 4.5 0 010 6M18 6.5a8 8 0 010 11"
        }
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
