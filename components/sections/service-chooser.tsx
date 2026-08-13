"use client"

import { ArrowRight, Check } from "lucide-react"

import { useServiceInterest } from "@/components/service-interest-provider"
import { Button } from "@/components/ui/button"
import {
  getServiceInterest,
  serviceInterests,
  type ServiceInterestId,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"

export function ServiceChooser() {
  const { selected, setSelected } = useServiceInterest()
  const recommendation = getServiceInterest(selected)

  return (
    <section id="service-chooser" className="section-shell pb-16 md:pb-24">
      <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] lg:grid-cols-[1.15fr_0.85fr]">
        <fieldset className="p-6 sm:p-8 lg:p-10">
          <legend className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What do you need help with?
          </legend>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Choose the closest match. You can change it at any time, and you do
            not need to know the technical answer first.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {serviceInterests.map((interest) => {
              const isSelected = selected === interest.id

              return (
                <label
                  key={interest.id}
                  className={cn(
                    "relative flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border bg-card px-4 py-3 font-medium transition-[border-color,background-color,box-shadow]",
                    isSelected
                      ? "border-primary bg-secondary shadow-[0_0_0_1px_var(--primary)]"
                      : "border-border hover:border-primary/40 hover:bg-secondary/40"
                  )}
                >
                  <input
                    type="radio"
                    name="service-choice"
                    value={interest.id}
                    checked={isSelected}
                    onChange={(event) =>
                      setSelected(event.target.value as ServiceInterestId)
                    }
                    className="size-4 accent-primary"
                  />
                  <span className="flex-1">{interest.label}</span>
                  {isSelected && (
                    <Check
                      className="size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                  )}
                </label>
              )
            })}
          </div>
        </fieldset>

        <div
          className="crystal-lines flex flex-col justify-center border-t border-border bg-secondary p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10"
          aria-live="polite"
          data-testid="recommendation"
        >
          <p className="eyebrow">Recommended starting point</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {recommendation.service}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {recommendation.description}
          </p>
          <ul className="mt-6 space-y-3">
            {recommendation.deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {deliverable}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 w-full sm:w-fit">
            <a href="#contact">
              Start this conversation
              <ArrowRight data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
