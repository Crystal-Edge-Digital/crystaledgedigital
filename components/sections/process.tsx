import { processSteps } from "@/lib/site-content"

export function Process() {
  return (
    <section
      id="process"
      className="section-space border-y border-border bg-card"
    >
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">A straightforward process</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            From a business problem to a practical next step.
          </h2>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.number} className="bg-background p-6 sm:p-8">
              <span
                className="editorial text-5xl text-primary"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
