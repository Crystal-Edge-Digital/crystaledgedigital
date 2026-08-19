import { Resend } from "resend"

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("[resend-getResendClient] RESEND_API_KEY is not set")
  }
  return new Resend(apiKey)
}

export function getContactFromAddress() {
  const from = process.env.CONTACT_FROM_EMAIL
  if (!from) {
    throw new Error("[resend-getContactFromAddress] CONTACT_FROM_EMAIL is not set")
  }
  return from
}

export function getContactToAddress() {
  const to = process.env.CONTACT_TO_EMAIL
  if (!to) {
    throw new Error("[resend-getContactToAddress] CONTACT_TO_EMAIL is not set")
  }
  return to
}
