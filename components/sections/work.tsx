import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects: {
  title: string
  href: string
  image: string
  description: string
  tags: string[]
}[] = [
  {
    title: "Coastal Creations Studio",
    href: "https://coastalcreationsstudio.com",
    image: "/work/coastal-creations.png",
    description:
      "E-commerce and class-booking platform for a coastal art studio — online store, scheduling, and gift cards.",
    tags: ["Next.js", "Sanity", "Square"],
  },
  {
    title: "Clarity Edit",
    href: "https://clarity-edit.io",
    image: "/work/clarity-edit.png",
    description:
      "AI-powered job-application assistant — resume analysis, company research, and personalized cover letters.",
    tags: ["Next.js", "AI", "AWS"],
  },
  {
    title: "Coastal Properties",
    href: "https://coastal-properties.vercel.app",
    image: "/work/coastal-properties.png",
    description:
      "Property-management and rentals site for beachfront apartments and condos, with a built-in AI chat assistant for guests.",
    tags: ["Next.js", "AI Chatbot", "Hospitality"],
  },
  {
    title: "Theresa Kennish",
    href: "https://theresa-kennish.vercel.app",
    image: "/work/theresa-kennish.png",
    description:
      "Artist portfolio and collections site for a painter — original acrylic, oil, and mixed-media work.",
    tags: ["Next.js", "Sanity", "Portfolio"],
  },
]

export function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A few of the products and sites we&apos;ve shipped.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title}`}
              className="group block"
            >
              <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/50">
                  <Image
                    src={project.image}
                    alt={`${project.title} website`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-2 text-xl">
                    {project.title}
                    <ArrowUpRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="border border-accent/30 bg-accent/10 text-accent hover:bg-accent/15"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
