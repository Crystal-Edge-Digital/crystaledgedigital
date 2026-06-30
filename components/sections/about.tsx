import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Cloud, BrainCircuit, Workflow, Rocket, Globe } from "lucide-react"
import type { ComponentType } from "react"

const whatWeDo: {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}[] = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Migration",
    description:
      "Secure, reliable cloud architecture tailored to your business needs.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Embed intelligent automation into your workflows and products.",
  },
  {
    icon: Workflow,
    title: "Workflow Optimization",
    description:
      "Eliminate bottlenecks and streamline processes that slow your team down.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    description: "From concept to launch, end-to-end software solutions.",
  },
  {
    icon: Globe,
    title: "Web & Digital Presence",
    description: "Modern, high-performance websites and applications.",
  },
]

export function About() {
  return (
    <section id="about" className="border-y border-border bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            About Crystal Edge Digital
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cloud-first software, built around your business.
          </p>
        </div>

        {/* Founder */}
        <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm sm:p-10">
          <div className="grid gap-8 md:grid-cols-[260px_1fr] md:items-center md:gap-10">
            <div className="mx-auto w-full max-w-[260px]">
              <Image
                src="/founder-photo.png"
                alt="Benjamin Corbett, founder of Crystal Edge Digital"
                width={675}
                height={844}
                priority
                className="h-auto w-full"
              />
            </div>

            <div>
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Meet the founder
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                Benjamin Corbett
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="border border-accent/30 bg-accent/10 text-accent hover:bg-accent/15">
                  Microsoft Certified
                </Badge>
                <Badge className="border border-accent/30 bg-accent/10 text-accent hover:bg-accent/15">
                  AWS Certified
                </Badge>
              </div>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                As a Microsoft and AWS-certified software developer, I partner
                with organizations to design and implement cloud solutions that
                drive real results. Whether you&apos;re migrating
                infrastructure, integrating AI capabilities, optimizing
                workflows, launching a new product, or building a web presence
                that converts to ROI &mdash; I bring certified expertise and a
                commitment to your success.
              </p>
              <a
                href="https://www.linkedin.com/in/corbett-benjamin/"
                aria-label="Benjamin Corbett on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-[#0A66C2] transition-opacity hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* What we do */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-foreground">
            How I can help
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-border/50 bg-card/30 p-5"
              >
                <item.icon className="size-6 shrink-0 text-accent" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
