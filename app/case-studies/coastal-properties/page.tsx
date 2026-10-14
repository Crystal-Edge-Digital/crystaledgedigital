import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { IngestionFlow } from "@/components/case-study/ingestion-flow"
import { CtaContact } from "@/components/sections/cta-contact"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Case study: an assistant that learns from your documents",
  description:
    "Coastal Properties: drop a Word document into a shared folder and, about twenty seconds later, residents and prospects get accurate answers from it, while staff-only documents stay private.",
}

const BASE = "/case-studies/coastal-properties"

const facts = [
  {
    value: "About 20 seconds",
    label: "from a document landing in the folder to a correct answer",
  },
  {
    value: "Role-aware",
    label:
      "restricted documents are filtered inside the search, not by a prompt",
  },
  {
    value: "3 environments",
    label:
      "dev, staging and production, with automated deploys that use short-lived credentials and no stored cloud keys",
  },
]

const stack = [
  "AWS",
  "Python",
  "LangGraph",
  "Amazon Bedrock",
  "Terraform",
  "GitHub Actions",
]

const underTheHood = [
  {
    title: "Ingestion",
    body: "Each upload starts a serverless workflow that reads the file, splits it by heading, turns every piece into a numeric fingerprint and files it in a search index with an audience label.",
  },
  {
    title: "Answers",
    body: "A small workflow decides whether a message is a question or a maintenance request, searches only the passages that person may read, and streams a grounded answer. Maintenance requests become work orders.",
  },
  {
    title: "Access control",
    body: "The audience label is applied inside the search itself, so restricted passages are never retrieved for the wrong role. A file in an unknown location defaults to admin-only.",
  },
  {
    title: "Delivery",
    body: "The whole system is infrastructure as code, in three environments. Automated deploys sign in with short-lived credentials, and every change is checked by a plan before it ships.",
  },
]

const next = [
  "An admin upload page, so managers do not need a shared folder at all",
  "A scheduled cloud sync in place of the demo folder watcher",
  "PDF support and an evaluation set that scores answer quality",
  "Structured queries for totals across many rows, which a text search handles less well than a lookup",
]

function Shot({
  src,
  alt,
  width,
  height,
  label,
  fade = false,
  className = "",
}: {
  src: string
  alt: string
  width: number
  height: number
  label?: string
  fade?: boolean
  className?: string
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <Image
          src={`${BASE}/${src}`}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1024px) 100vw, 640px"
          className="h-auto w-full"
          style={
            fade
              ? {
                  maskImage:
                    "linear-gradient(to bottom, black 86%, transparent)",
                }
              : undefined
          }
        />
      </div>
      {label ? (
        <figcaption className="mt-3 text-sm text-muted-foreground">
          {label}
        </figcaption>
      ) : null}
    </figure>
  )
}

function Diagram({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string
  alt: string
  width: number
  height: number
  caption: string
}) {
  return (
    <figure>
      <a
        href={`${BASE}/${src}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${caption} (opens the full-size diagram)`}
        className="block overflow-hidden rounded-2xl border border-border bg-white p-3 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] sm:p-5"
      >
        <Image
          src={`${BASE}/${src}`}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="h-auto w-full"
        />
      </a>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {caption} Select the diagram to open it full size.
      </figcaption>
    </figure>
  )
}

function Step({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="eyebrow">Step {number}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h3>
      <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>
    </div>
  )
}

export default function CoastalPropertiesCaseStudy() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="section-space pb-10 sm:pb-14">
          <div className="section-shell">
            <Link
              href="/#work"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All work
            </Link>
            <p className="eyebrow mt-6">Case study · Reference build</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
              An assistant that learns from the documents you already have.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Coastal Properties is a leasing and resident-support assistant for
              a property manager. Drop a Word file into a shared folder and,
              about twenty seconds later, residents and prospects get accurate
              answers from it, while staff-only documents stay private.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((item) => (
                <Badge
                  key={item}
                  className="border border-border bg-background text-foreground"
                >
                  {item}
                </Badge>
              ))}
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              {facts.map((fact) => (
                <div
                  key={fact.value}
                  className="rounded-2xl border border-border bg-card/95 p-6 shadow-[var(--shadow-card)]"
                >
                  <dt className="text-2xl font-semibold tracking-tight text-primary">
                    {fact.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section-space bg-secondary/45">
          <div className="section-shell">
            <p className="eyebrow">The idea</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Watch a document become an answer.
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Every screen below is the live system, not a mock-up, running on
              demo data for a fictional building.
            </p>

            <div className="mt-14 grid items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
              <Step number="1" title="Ask before anything is uploaded">
                A prospect asks what is available to rent. No rental documents
                exist yet, so the assistant says so and points to the leasing
                office. It does not guess.
              </Step>
              <Shot
                src="panel-before.webp"
                alt="Website chat: asked what apartments are available, the assistant says it could not find current availability and refers the visitor to the leasing office"
                width={760}
                height={772}
                className="w-full max-w-md lg:justify-self-end"
              />
            </div>

            <div className="mt-20 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <Step number="2" title="The manager drops in a document">
                The property manager adds a Word document to a shared folder. No
                developer, no dashboard, no re-training.
              </Step>
              <div className="grid gap-4 sm:grid-cols-2">
                <Shot
                  src="drive-batch1.webp"
                  alt="Shared Drive folder named public containing available_rentals_batch1.docx"
                  width={690}
                  height={275}
                  label="First upload"
                />
                <Shot
                  src="drive-batch2.webp"
                  alt="The same folder now containing two files: available_rentals_batch1.docx and available_rentals_batch2.docx"
                  width={690}
                  height={275}
                  label="A second upload"
                />
              </div>
            </div>

            <div className="mt-20">
              <IngestionFlow />
            </div>

            <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-16">
              <div>
                <Step number="3" title="The same question, now answered">
                  Roughly twenty seconds later, the same question returns real
                  units with rent, move-in dates and features, taken straight
                  from the document that was just uploaded.
                </Step>
                <Shot
                  src="panel-after.webp"
                  alt="Website chat: the same question now lists available units with monthly rent, availability dates and features"
                  width={760}
                  height={1522}
                  fade
                  className="mt-8 w-full max-w-md"
                />
              </div>
              <div>
                <Step number="4" title="Add more, and answers combine">
                  A second upload adds three more units. A narrower question now
                  draws on both documents at once: Unit 206 from the first
                  upload and Unit 108 from the second.
                </Step>
                <Shot
                  src="chat-two-bedroom.webp"
                  alt="Chat answering a two-bedroom question with two units, one from each uploaded document"
                  width={760}
                  height={1960}
                  className="mt-8 w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="section-shell">
            <p className="eyebrow">Privacy by design</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Same question. Different answer. By design.
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              A resident and a manager ask what occupancy was in March 2024. The
              figure lives in a staff-only spreadsheet, so only the manager gets
              it.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <Shot
                src="role-tenant-crop.webp"
                alt="Chat signed in as a tenant: the assistant cannot find occupancy information and refers to the leasing office"
                width={760}
                height={735}
                label="Signed in as a tenant: no answer, and a referral to the leasing office."
              />
              <Shot
                src="role-admin-crop.webp"
                alt="Chat signed in as an admin: the assistant answers that March 2024 occupancy was 90.0 percent, 18 of 20 units"
                width={760}
                height={735}
                label="Signed in as an admin: 90.0%, 18 of 20 units, from the same spreadsheet."
              />
            </div>
            <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
              The restriction is enforced inside the search, so private passages
              are never retrieved for the wrong person. It does not depend on
              the assistant behaving well when asked.
            </p>
          </div>
        </section>

        <section className="section-space bg-secondary/45">
          <div className="section-shell">
            <p className="eyebrow">Under the hood</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              How it is built.
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {underTheHood.map((item) => (
                <Card key={item.title} className="gap-2 py-6">
                  <CardContent className="px-6">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-14 grid gap-10">
              <Diagram
                src="diagram-question.webp"
                alt="Architecture diagram: a question travels from the browser through CloudFront and API Gateway into a containerised workflow that classifies it, searches only what the person may read, answers with Claude on Bedrock, and streams the answer back"
                width={2945}
                height={1075}
                caption="The life of one question, from the browser to the model and back as a stream."
              />
              <Diagram
                src="diagram-ingestion.webp"
                alt="Architecture diagram: an uploaded file triggers an event, then a workflow that reads and chunks the document, embeds each chunk, and stores it in a search index with an audience label"
                width={2651}
                height={938}
                caption="How an uploaded document becomes searchable, each piece labelled with who may read it."
              />
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">
                  What it does not do yet
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  This is a reference build on demo data in a sandbox account.
                  It is strong on lookups, such as one month, one unit or one
                  policy. It is weaker on totals across many rows, which is a
                  known limit of searching text.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">What I would add next</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                  {next.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CtaContact />
      </main>
      <Footer />
    </>
  )
}
