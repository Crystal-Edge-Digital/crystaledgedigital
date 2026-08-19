import { NextResponse } from "next/server"

import { getServiceInterest, type ServiceInterestId } from "@/lib/site-content"
import {
  getContactFromAddress,
  getContactToAddress,
  getResendClient,
} from "@/lib/resend"
import { WorkRequestConfirmation } from "@/emails/work-request-confirmation"
import { WorkRequestNotification } from "@/emails/work-request-notification"

const SERVICE_INTEREST_IDS: readonly ServiceInterestId[] = [
  "website",
  "automation",
  "app-ai",
  "cloud",
  "growth",
  "unsure",
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isServiceInterestId(value: unknown): value is ServiceInterestId {
  return (
    typeof value === "string" &&
    (SERVICE_INTEREST_IDS as readonly string[]).includes(value)
  )
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const {
    name,
    email,
    company,
    serviceInterest,
    message,
    website: honeypot,
  } = body as Record<string, unknown>

  // Honeypot: real visitors never fill this hidden field. Pretend success
  // so bots get no signal that they were caught.
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true })
  }

  if (
    typeof name !== "string" ||
    name.trim() === "" ||
    name.length > 120
  ) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 })
  }
  if (
    typeof email !== "string" ||
    email.length > 254 ||
    !EMAIL_PATTERN.test(email)
  ) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 })
  }
  if (typeof company !== "string" || company.length > 160) {
    return NextResponse.json({ error: "Invalid company value" }, { status: 400 })
  }
  if (!isServiceInterestId(serviceInterest)) {
    return NextResponse.json({ error: "Invalid service interest" }, { status: 400 })
  }
  if (
    typeof message !== "string" ||
    message.trim() === "" ||
    message.length > 2000
  ) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 })
  }

  const serviceLabel = getServiceInterest(serviceInterest).label

  try {
    const resend = getResendClient()
    const from = getContactFromAddress()
    const to = getContactToAddress()

    const [notification, confirmation] = await Promise.all([
      resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `New work request: ${name}`,
        react: WorkRequestNotification({
          name,
          email,
          company,
          serviceInterest: serviceLabel,
          message,
        }),
      }),
      resend.emails.send({
        from,
        to: email,
        replyTo: to,
        subject: "We received your message — Crystal Edge Digital",
        react: WorkRequestConfirmation({ name }),
      }),
    ])

    if (notification.error || confirmation.error) {
      console.error(
        "[route-POST] Resend send failed",
        notification.error,
        confirmation.error
      )
      return NextResponse.json(
        { error: "Message could not be sent" },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[route-POST] Contact form submission failed", error)
    return NextResponse.json(
      { error: "Message could not be sent" },
      { status: 500 }
    )
  }
}
