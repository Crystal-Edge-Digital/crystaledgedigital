import {
  Cloud,
  BrainCircuit,
  Code2,
  TrendingUp,
  Palette,
  ArrowRight,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import type { ComponentType } from "react"

const services: {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}[] = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Migrate, optimize, and manage your cloud infrastructure. AWS, Azure, GCP -- we meet you where you are.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Embed intelligent automation into your workflows. From chatbots to data pipelines, we make AI practical.",
  },
  {
    icon: Code2,
    title: "App Development",
    description:
      "Custom web and mobile applications built for speed, scale, and user experience.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    description:
      "Data-driven SEO strategies that put your business in front of the right audience.",
  },
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Modern, responsive websites that convert visitors into customers. Local businesses welcome.",
  },
]

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What we do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end digital services to help you move faster.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <CardHeader>
                <service.icon className="mb-2 size-10 text-accent" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
