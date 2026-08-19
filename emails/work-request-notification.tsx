import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Tailwind,
  pixelBasedPreset,
} from "react-email"

interface WorkRequestNotificationProps {
  name: string
  email: string
  company: string
  serviceInterest: string
  message: string
}

export default function WorkRequestNotification({
  name,
  email,
  company,
  serviceInterest,
  message,
}: WorkRequestNotificationProps) {
  return (
    <Html lang="en">
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                ink: "#15191B",
                "ink-muted": "#5F6A71",
                mineral: "#2C5865",
                border: "#CCD8DC",
              },
            },
          },
        }}
      >
        <Head />
        <Body className="bg-[#F5F7F7] font-sans">
          <Preview>New work request from {name}</Preview>
          <Container className="mx-auto max-w-xl px-5 py-10">
            <Section className="rounded-2xl border border-solid border-border bg-white p-8">
              <Text className="m-0 text-xs font-semibold tracking-wide text-mineral uppercase">
                New work request
              </Text>
              <Heading as="h1" className="mt-2 mb-0 text-2xl text-ink">
                {name}
              </Heading>
              <Text className="mt-1 mb-0 text-sm text-ink-muted">
                {company ? `${company} — ` : ""}
                {serviceInterest}
              </Text>

              <Hr className="my-6 border-solid border-border" />

              <Text className="m-0 text-sm leading-relaxed whitespace-pre-line text-ink">
                {message}
              </Text>

              <Hr className="my-6 border-solid border-border" />

              <Text className="m-0 text-sm text-ink-muted">
                Reply directly to this email to respond to {name} — reply-to
                is set to <span className="text-ink">{email}</span>.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

WorkRequestNotification.PreviewProps = {
  name: "Jordan Rivera",
  email: "jordan@example.com",
  company: "Example Co",
  serviceInterest: "Launch or improve my website",
  message:
    "We need a new marketing site before our Q4 launch and want help with the build and hosting.",
} satisfies WorkRequestNotificationProps

export { WorkRequestNotification }
