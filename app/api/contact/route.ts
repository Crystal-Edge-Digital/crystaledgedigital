import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name and message are required." }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: "Crystal Edge Digital <noreply@crystal-edge-digital.com>",
    to: process.env.CONTACT_RECIPIENT_EMAIL!,
    subject: `New contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    replyTo: email,
  })

  if (error) {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
