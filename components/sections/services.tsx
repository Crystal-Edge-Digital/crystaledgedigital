import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Code2,
  Palette,
  TrendingUp,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { services, type ServiceIconName } from "@/lib/site-content"

const serviceIcons: Record<ServiceIconName, typeof Cloud> = {
  cloud: Cloud,
  ai: BrainCircuit,
  app: Code2,
  growth: TrendingUp,
  web: Palette,
}

export function Services() {
  return (
    <section id="services" className="section-space">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Services built around outcomes</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            The right solution starts with what needs to work better.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Each engagement connects a real business problem to a clear,
            maintainable digital outcome.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]

            return (
              <Card
                key={service.id}
                className="hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[var(--shadow-card-hover)]"
              >
                <CardHeader>
                  <span className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary ring-1 ring-primary/10">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex h-full flex-col">
                  <p className="font-semibold text-foreground">
                    {service.problem}
                  </p>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.outcome}
                  </p>
                  <ul
                    className="mt-5 flex flex-wrap gap-2"
                    aria-label="Example deliverables"
                  >
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold"
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Talk about this
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
