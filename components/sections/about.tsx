import { ArrowUpRight, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="section-space">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] lg:grid-cols-[0.72fr_1.28fr]">
          <div className="bg-secondary/45 p-7 sm:p-10 lg:p-14">
            <p className="eyebrow">Meet the founder</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Benjamin Corbett
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge className="border border-primary/25 bg-secondary text-primary-hover">
                Microsoft Certified
              </Badge>
              <Badge className="border border-primary/25 bg-secondary text-primary-hover">
                AWS Certified
              </Badge>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-border p-7 sm:p-10 lg:border-t-0 lg:border-l lg:p-14">
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              I’m a Microsoft and AWS-certified software developer who helps
              organizations turn digital problems into practical systems. My
              work spans cloud infrastructure, AI integrations, workflow
              automation, product development, and websites designed around how
              a business actually operates.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              You can come to me with a goal, a bottleneck, or an early idea.
              I’ll help make the path clearer, scope the right level of
              solution, and stay close to the work from recommendation through
              launch.
            </p>
            <Button variant="outline" asChild className="mt-8 w-fit">
              <a
                href="https://www.linkedin.com/in/corbett-benjamin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink data-icon="inline-start" />
                Connect on LinkedIn
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
