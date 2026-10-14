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
  title: "Coastal Properties: a RAG chat agent built on Amazon Bedrock",
  description:
    "A retrieval-augmented chat agent for property management, built on Amazon Bedrock, Amazon S3 Vectors and AWS serverless services, with role-based access to documents.",
}

const BASE = "/case-studies/coastal-properties"

const glance = [
  { label: "Industry", value: "Property management" },
  {
    label: "Use case",
    value: "Retrieval-augmented chat agent for leasing and resident support",
  },
  {
    label: "Core services",
    value: "Amazon Bedrock, Amazon S3 Vectors, AWS Lambda",
  },
]

const awsServices = [
  "Amazon Bedrock",
  "Amazon S3 Vectors",
  "AWS Lambda",
  "AWS Step Functions",
  "Amazon EventBridge",
  "Amazon API Gateway",
  "Amazon Cognito",
  "Amazon DynamoDB",
  "Amazon CloudFront",
  "Amazon CloudWatch",
]

const alsoUsed = ["Python", "LangGraph", "Terraform", "GitHub Actions"]

const requirements = [
  "Answers must be grounded in the manager’s own documents, and the agent must say so when the documents do not cover a question.",
  "New documents must become searchable without engineering work.",
  "Staff-only content must never be retrievable by a resident or a prospective tenant.",
]

const solution = [
  {
    title: "Ingestion",
    body: "Uploading a document to Amazon S3 emits an event through Amazon EventBridge that starts an AWS Step Functions workflow. AWS Lambda functions parse the file, split it into chunks by heading, create an embedding for each chunk with Amazon Titan Text Embeddings V2 on Amazon Bedrock, and store the chunk in Amazon S3 Vectors with an audience label.",
  },
  {
    title: "Retrieval and generation",
    body: "A containerised AWS Lambda function runs a FastAPI service and a LangGraph workflow. The workflow classifies each message, retrieves the passages the caller is permitted to read, and uses Claude Haiku 4.5 on Amazon Bedrock to generate a grounded answer that is streamed to the browser. Maintenance requests are extracted as structured data and written to Amazon DynamoDB as work orders.",
  },
  {
    title: "Access control",
    body: "Amazon Cognito groups (tenant and admin) determine which audiences a caller may read, and Amazon API Gateway verifies the token before the function runs. The audience filter is applied inside the vector query, so restricted passages are never retrieved for the wrong role. A document outside a known location defaults to admin-only.",
  },
  {
    title: "Delivery and operations",
    body: "The environments are defined in Terraform. GitHub Actions deploys through OpenID Connect with short-lived credentials, so no AWS access keys are stored, and every infrastructure change is reviewed as a plan first. Amazon CloudWatch provides structured logs, a dashboard and alarms.",
  },
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

function Section({
  eyebrow,
  title,
  intro,
  tint = false,
  children,
}: {
  eyebrow: string
  title: string
  intro?: string
  tint?: boolean
  children: React.ReactNode
}) {
  return (
    <section className={`section-space${tint ? "bg-secondary/45" : ""}`}>
      <div className="section-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}

function Stage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
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
            <p className="eyebrow mt-6">Case study · Generative AI on AWS</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.04] font-semibold tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl">
              A retrieval-augmented chat agent built on Amazon Bedrock.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Coastal Properties is a leasing and resident-support chat agent
              for a property manager. It answers from the manager’s own
              documents, stays current as documents are added, and restricts
              what each person can retrieve according to their role.
            </p>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {glance.map((item) => (
                <div key={item.label} className="bg-card p-6">
                  <dt className="eyebrow">{item.label}</dt>
                  <dd className="mt-2 leading-relaxed font-semibold text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
              <p className="eyebrow pt-1">AWS services used</p>
              <div>
                <div className="flex flex-wrap gap-2">
                  {awsServices.map((item) => (
                    <Badge
                      key={item}
                      className="border border-border bg-background text-foreground"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Also used: {alsoUsed.join(", ")}.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Section
          tint
          eyebrow="Challenge"
          title="Making property documents answerable."
        >
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <p className="leading-relaxed text-muted-foreground">
              A property manager’s knowledge lives in documents: leases, pet and
              parking policies and move-out forms, alongside staff-only material
              such as occupancy reports, work orders and vendor contracts.
              Residents and prospective tenants ask the same questions
              repeatedly, and the answers sit in files that are slow to search.
            </p>
            <div>
              <p className="font-semibold">
                Three requirements shaped the design:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                {requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          eyebrow="Solution"
          title="A serverless RAG pipeline on AWS."
          intro="The agent combines two paths: an ingestion pipeline that turns documents into labelled vectors, and a retrieval workflow that answers each question from the passages the caller is permitted to read."
        >
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {solution.map((item) => (
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
        </Section>

        <Section
          tint
          eyebrow="Architecture"
          title="Request path and ingestion path."
        >
          <div className="mt-10 grid gap-10">
            <Diagram
              src="diagram-question.webp"
              alt="Architecture diagram: a question travels from the browser through Amazon CloudFront and Amazon API Gateway into a containerised AWS Lambda function that classifies it, searches only what the caller may read, generates an answer with Claude on Amazon Bedrock, and streams the answer back"
              width={2945}
              height={1075}
              caption="Request path: a question travels from the browser to the model and returns as a stream."
            />
            <Diagram
              src="diagram-ingestion.webp"
              alt="Architecture diagram: an uploaded file triggers an event, then an AWS Step Functions workflow that reads and chunks the document, creates an embedding for each chunk, and stores it in a vector index with an audience label"
              width={2651}
              height={938}
              caption="Ingestion path: an uploaded document is chunked, embedded and stored with an audience label."
            />
          </div>
        </Section>

        <Section
          eyebrow="Retrieval-augmented generation"
          title="RAG in action."
          intro="The screenshots below are taken from the deployed development environment, using sample documents for a fictional property. They show one question before and after documents are added, and a question that draws on several documents."
        >
          <div className="mt-14 grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <Stage
              eyebrow="Initial state"
              title="Before documents are uploaded"
            >
              The knowledge base holds no availability information. The agent
              does not speculate: it states that it could not find the answer
              and refers the visitor to the leasing office.
            </Stage>
            <Shot
              src="panel-before.webp"
              alt="Chat agent response to a question about available apartments: it could not find current availability and refers the visitor to the leasing office"
              width={760}
              height={772}
              className="w-full max-w-md lg:justify-self-end"
            />
          </div>

          <div className="mt-20 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Stage eyebrow="Ingestion" title="An administrator adds a document">
              An administrator uploads a Word document to a shared Google Drive
              folder, the document store for this environment. No further action
              is required.
            </Stage>
            <div className="grid gap-4 sm:grid-cols-2">
              <Shot
                src="drive-batch1.webp"
                alt="Shared folder named public containing available_rentals_batch1.docx"
                width={690}
                height={275}
                label="First document"
              />
              <Shot
                src="drive-batch2.webp"
                alt="The same folder containing two files: available_rentals_batch1.docx and available_rentals_batch2.docx"
                width={690}
                height={275}
                label="Second document"
              />
            </div>
          </div>

          <div className="mt-20">
            <IngestionFlow />
          </div>

          <div className="mt-20">
            <div className="max-w-3xl">
              <Stage eyebrow="Retrieval" title="After documents are uploaded">
                New documents are picked up automatically. A synchronisation job
                copies each file from Google Drive to Amazon S3, and the
                object-created event is routed by Amazon EventBridge to an AWS
                Step Functions workflow that chunks, embeds and indexes the
                document. Shortly afterwards, the same question is answered from
                the new document. Further uploads extend what the agent knows: a
                narrower question retrieves passages from both documents, Unit
                206 from the first and Unit 108 from the second.
              </Stage>
            </div>
            <div className="mt-10 grid items-start gap-10 sm:grid-cols-2 lg:gap-14">
              <Shot
                src="panel-after.webp"
                alt="Chat agent response to the same question, now listing available units with monthly rent, availability dates and features"
                width={760}
                height={1522}
                fade
                label="The same question, after the first document is uploaded."
              />
              <Shot
                src="chat-two-bedroom.webp"
                alt="Chat agent response to a two-bedroom question, listing two units, one from each uploaded document"
                width={760}
                height={1960}
                label="A narrower question, after the second document is uploaded."
              />
            </div>
          </div>
        </Section>

        <Section
          tint
          eyebrow="Access control"
          title="Audience-aware retrieval."
          intro="Each chunk carries an audience label (public, tenant or admin) assigned from the location of its source document. The label is applied as a filter inside the vector query, so restricted passages are never retrieved for the wrong role. In the example below, both users ask for the March 2024 occupancy rate, which is held in a staff-only report."
        >
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Shot
              src="role-tenant-crop.webp"
              alt="Chat signed in as a tenant: the agent cannot find occupancy information and refers the user to the leasing office"
              width={760}
              height={735}
              label="Tenant: no answer is returned, and the user is referred to the leasing office."
            />
            <Shot
              src="role-admin-crop.webp"
              alt="Chat signed in as an administrator: the agent answers that March 2024 occupancy was 90.0 percent, 18 of 20 units"
              width={760}
              height={735}
              label="Administrator: 90.0% (18 of 20 units), retrieved from the same staff-only report."
            />
          </div>
        </Section>

        <CtaContact />
      </main>
      <Footer />
    </>
  )
}
