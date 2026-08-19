"use client"

import { type FormEvent, useState } from "react"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { serviceInterests, type ServiceInterestId } from "@/lib/site-content"

type SubmitState = "idle" | "submitting" | "success" | "error"

export function CtaContact() {
  const [selected, setSelected] = useState<ServiceInterestId>("unsure")
  const [status, setStatus] = useState<SubmitState>("idle")

  async function submitContactForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      serviceInterest: selected,
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        setStatus("error")
        return
      }

      setStatus("success")
      event.currentTarget.reset()
      setSelected("unsure")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="section-space">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Contact me to discuss your projects, goals, or challenges.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tell me what you are trying to accomplish and I’ll help identify the most practical next step.
          </p>
          <div className="mt-8 rounded-3xl border border-border bg-secondary/70 p-6">
            <p className="font-semibold">A direct contact path</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Submitting this form sends your message straight to our inbox
              and we&apos;ll reply from there. Prefer email directly? Use the
              address below instead.
            </p>
            <a
              href="mailto:info@crystal-edge-digital.com"
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primary-hover underline underline-offset-4"
            >
              info@crystal-edge-digital.com
            </a>
          </div>
        </div>

        <form
          onSubmit={submitContactForm}
          className="relative overflow-hidden rounded-3xl border border-border border-t-signal bg-card p-6 shadow-[var(--shadow-card)] sm:border-t-4 sm:p-8"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px opacity-0"
          />
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
              <FieldLabel htmlFor="service-interest">Project type</FieldLabel>
              <select
                id="service-interest"
                name="serviceInterest"
                value={selected}
                onChange={(event) =>
                  setSelected(event.target.value as ServiceInterestId)
                }
                className="h-12 w-full rounded-2xl border border-input bg-card px-4 text-base outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20"
              >
                {serviceInterests.map((interest) => (
                  <option key={interest.id} value={interest.id}>
                    {interest.label}
                  </option>
                ))}
              </select>
              <FieldDescription>
                Choose the closest fit. You can include the details below.
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

          <Button
            type="submit"
            size="lg"
            className="mt-7 w-full sm:w-fit"
            disabled={status === "submitting"}
          >
            <Mail data-icon="inline-start" />
            {status === "submitting" ? "Sending…" : "Send message"}
          </Button>

          {status === "success" && (
            <p
              role="status"
              className="mt-4 text-sm font-medium text-success"
            >
              Message sent — we&apos;ll reply within 1 business day.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="mt-4 text-sm font-medium text-destructive">
              Something went wrong. Please try again, or email{" "}
              <a
                href="mailto:info@crystal-edge-digital.com"
                className="underline underline-offset-4"
              >
                info@crystal-edge-digital.com
              </a>{" "}
              directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
