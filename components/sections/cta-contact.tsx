"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Send } from "lucide-react"

export function CtaContact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us about your project and we&apos;ll get back to you within 24
          hours.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 text-left"
        >
          <FieldGroup>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" placeholder="Your name" />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="you@company.com" />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={5}
              />
            </Field>
          </FieldGroup>

          <div className="mt-6">
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              <Send data-icon="inline-start" />
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
