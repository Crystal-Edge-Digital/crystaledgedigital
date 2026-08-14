import Image from "next/image"
import { ArrowDownRight, ArrowRight, BadgeCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20">
      <div className="section-shell relative grid gap-10 py-12 md:py-16 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:py-20">
        <div className="order-last lg:order-first">
          <p className="eyebrow">Cloud • AI • Web</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-0.055em] text-balance sm:text-5xl lg:text-7xl">
            Clear digital solutions for the way your business{" "}
            <span className="editorial font-normal text-primary italic">
              really works.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Crystal Edge Digital helps small and growing businesses launch
            better websites, automate repetitive work, and build reliable cloud
            and AI solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#contact">
                Start a project
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

        <div className="frosted-panel relative order-first overflow-hidden rounded-[1.75rem] border border-border p-3 sm:p-5 lg:order-last">
          <div
            className="pointer-events-none absolute top-8 left-8 z-10 h-px w-20 bg-primary/30"
            aria-hidden="true"
          />
          <Image
            src="/brand/ced-editorial-lockup.png"
            alt="Crystal Edge Digital editorial wordmark with etched crystal illustration and fine directional lines"
            width={2000}
            height={2000}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="relative z-[1] h-auto w-full rounded-2xl object-contain mix-blend-multiply"
            priority
          />
        </div>
      </div>
    </section>
  )
}
