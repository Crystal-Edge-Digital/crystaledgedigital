import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { engagementPaths } from "@/lib/site-content"

export function EngagementPaths() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Ways to work together</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Start at the size that fits the problem.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A focused improvement, a complete build, or an ongoing technical
            partnership can all begin with a clear scope.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {engagementPaths.map((path, index) => (
            <Card
              key={path.title}
              className={index === 1 ? "border-primary/30 bg-secondary/50" : ""}
            >
              <CardHeader>
                <span className="eyebrow">Path {index + 1}</span>
                <CardTitle className="mt-2 text-2xl">{path.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full flex-col">
                <p className="leading-relaxed text-muted-foreground">
                  {path.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {path.examples.map((example) => (
                    <li
                      key={example}
                      className="flex items-center gap-3 text-sm font-medium"
                    >
                      <Check
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                      {example}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="mt-8 w-full">
                  <a href="#contact">
                    Request a scope
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
