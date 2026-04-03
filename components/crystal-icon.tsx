import { cn } from "@/lib/utils"

export function CrystalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-8", className)}
    >
      <path
        d="M16 2L6 10L16 30L26 10L16 2Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M16 2L6 10L16 14L26 10L16 2Z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M6 10L16 14L16 30L6 10Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M26 10L16 14L16 30L26 10Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M16 2L6 10L16 30L26 10L16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 10L26 10M16 2L16 30M6 10L16 14L26 10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  )
}
