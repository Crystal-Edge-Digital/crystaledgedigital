"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Send } from "lucide-react"

export function CtaContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus("success")
    } else {
      const data = await res.json()
      setErrorMsg(data.error ?? "Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </p>

        {status === "success" ? (
          <div className="mt-12 rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-lg font-medium text-foreground">Thanks, we&apos;ll be in touch!</p>
            <p className="mt-2 text-muted-foreground">We typically respond within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 text-left">
            <FieldGroup>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Field>
            </FieldGroup>

            {status === "error" && (
              <p className="mt-3 text-sm text-destructive">{errorMsg}</p>
            )}

            <div className="mt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status === "loading"}
              >
                <Send data-icon="inline-start" />
                {status === "loading" ? "Sending…" : "Send Message"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
