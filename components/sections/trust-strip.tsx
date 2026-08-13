import { Award, BadgeCheck, Route, UserRound } from "lucide-react"

const trustPoints = [
  { icon: Award, label: "Microsoft Certified" },
  { icon: BadgeCheck, label: "AWS Certified" },
  { icon: UserRound, label: "Founder-led" },
  { icon: Route, label: "End-to-end delivery" },
]

export function TrustStrip() {
  return (
    <section
      aria-label="Credentials"
      className="border-y border-border bg-card"
    >
      <div className="section-shell grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
        {trustPoints.map((point) => (
          <div
            key={point.label}
            className="flex min-h-24 items-center justify-center gap-3 px-4 py-5 text-center text-sm font-semibold"
          >
            <point.icon
              className="size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>{point.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
