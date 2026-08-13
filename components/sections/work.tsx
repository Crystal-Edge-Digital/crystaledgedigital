import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/lib/site-content"

export function Work() {
  return (
    <section id="work" className="section-space bg-muted/45">
      <div className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Real products and websites, built for real use.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A range of commerce, AI, hospitality, and portfolio work—presented
            without invented performance claims.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} project`}
              className="group rounded-2xl"
            >
              <Card className="h-full hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-background">
                  <Image
                    src={project.image}
                    alt={`${project.title} website interface`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>
                <CardContent className="flex h-full flex-col py-1">
                  <p className="eyebrow">{project.type}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-4 font-semibold">{project.problem}</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {project.built}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="border border-border bg-secondary text-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="mt-7 inline-flex min-h-11 items-center font-semibold text-primary underline-offset-4 group-hover:underline">
                    Visit project
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
