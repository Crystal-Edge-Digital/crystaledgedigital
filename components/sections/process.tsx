import { Separator } from "@/components/ui/separator"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn your goals and audit your stack.",
  },
  {
    number: "02",
    title: "Build",
    description: "We architect and build the right solution.",
  },
  {
    number: "03",
    title: "Launch & Scale",
    description: "We deploy, monitor, and iterate with you.",
  },
]

export function Process() {
  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A straightforward process from idea to launch.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              <span className="text-5xl font-bold text-accent/20">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
              {i < steps.length - 1 && (
                <Separator
                  orientation="horizontal"
                  className="absolute -right-6 top-8 hidden w-12 md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
