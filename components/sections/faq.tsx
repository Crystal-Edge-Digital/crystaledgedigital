import { ChevronDown } from "lucide-react"

import { faqs } from "@/lib/site-content"

export function Faq() {
  return (
    <section id="faq" className="section-space border-y border-border bg-card">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A clear start, even if the answer is not clear yet.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-5 font-semibold marker:content-none">
                {faq.question}
                <ChevronDown
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
