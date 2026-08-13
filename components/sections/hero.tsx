import Image from "next/image"
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

      <div className="section-shell relative grid gap-10 py-12 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
        <div className="order-last lg:order-first">
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
          <div className="mt-7 flex items-start gap-3 border-t border-border pt-5">
            <BadgeCheck
              className="mt-0.5 size-5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Microsoft & AWS certified • Practical, founder-led delivery
            </p>
          </div>
        </div>

        <div className="order-first overflow-hidden rounded-2xl border border-border bg-secondary/45 p-3 shadow-[var(--shadow-card)] sm:p-5 lg:order-last">
          <Image
            src="/brand/ced-editorial-lockup.png"
            alt="Crystal Edge Digital editorial wordmark with etched crystal illustration and fine directional lines"
            width={2000}
            height={2000}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
