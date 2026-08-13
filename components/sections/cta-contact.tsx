"use client"

import { type FormEvent } from "react"
import { Mail } from "lucide-react"

import { useServiceInterest } from "@/components/service-interest-provider"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  getServiceInterest,
  serviceInterests,
  type ServiceInterestId,
} from "@/lib/site-content"

export function CtaContact() {
  const { selected, setSelected } = useServiceInterest()

  function openEmailDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "")
    const email = String(formData.get("email") ?? "")
    const company = String(formData.get("company") ?? "")
    const message = String(formData.get("message") ?? "")
    const service = getServiceInterest(selected).label
    const subject = `Project conversation: ${service}`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Help needed: ${service}`,
      "",
      message,
    ].join("\n")

    window.location.href = `mailto:benjamin@crystal-edge-digital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section-space">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            You do not need a technical specification to start.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tell me what you are trying to accomplish or what is currently
            getting in the way. I’ll help identify the most practical next step.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-secondary p-6">
            <p className="font-semibold">A transparent contact path</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              This form prepares an email in your own mail app. Nothing is sent
              by the website; you can review the complete message before
              sending.
            </p>
            <a
              href="mailto:benjamin@crystal-edge-digital.com"
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primary-hover underline underline-offset-4"
            >
              benjamin@crystal-edge-digital.com
            </a>
          </div>
        </div>

        <form
          onSubmit={openEmailDraft}
          className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
        >
          <FieldGroup>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  maxLength={120}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  maxLength={254}
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="company">Company (optional)</FieldLabel>
              <Input
                id="company"
                name="company"
                autoComplete="organization"
                placeholder="Company or organization"
                maxLength={160}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="service-interest">
                What do you need help with?
              </FieldLabel>
              <select
                id="service-interest"
                name="serviceInterest"
                value={selected}
                onChange={(event) =>
                  setSelected(event.target.value as ServiceInterestId)
                }
                className="h-12 w-full rounded-xl border border-input bg-card px-4 text-base outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20"
              >
                {serviceInterests.map((interest) => (
                  <option key={interest.id} value={interest.id}>
                    {interest.label}
                  </option>
                ))}
              </select>
              <FieldDescription>
                Your choice from the service guide is carried here
                automatically.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="message">
                Short project description
              </FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="What are you trying to accomplish, and what is getting in the way?"
                rows={6}
                maxLength={2000}
                required
              />
            </Field>
          </FieldGroup>

          <Button type="submit" size="lg" className="mt-7 w-full sm:w-fit">
            <Mail data-icon="inline-start" />
            Open email draft
          </Button>
        </form>
      </div>
    </section>
  )
}
