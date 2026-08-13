import { ArrowDownRight, ArrowRight, BadgeCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20">
      <div
        className="dot-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="crystal-lines pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-60"
        aria-hidden="true"
      />

      <div className="section-shell relative grid gap-10 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
        <div>
          <p className="eyebrow">Cloud • AI • Web</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.06] font-bold tracking-[-0.04em] text-balance sm:text-5xl lg:text-7xl">
            Clear digital solutions for the way your business{" "}
            <span className="editorial font-normal text-primary italic">
              really works.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Crystal Edge Digital helps small and growing businesses launch
            better websites, automate repetitive work, and build reliable cloud
            and AI solutions—without the enterprise runaround.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#service-chooser">
                Tell us what you need
                <ArrowDownRight data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#work">
                See our work
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/90 p-6 shadow-[var(--shadow-card)] sm:p-8">
          <p className="editorial text-3xl leading-tight sm:text-4xl">
            Start with the problem. The technology comes next.
          </p>
          <div className="mt-6 flex items-start gap-3 border-t border-border pt-5">
            <BadgeCheck
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Microsoft & AWS certified • Practical, founder-led delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
