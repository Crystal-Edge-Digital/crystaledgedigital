import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Tailwind,
  pixelBasedPreset,
} from "react-email"

interface WorkRequestConfirmationProps {
  name: string
}

export default function WorkRequestConfirmation({
  name,
}: WorkRequestConfirmationProps) {
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
          <Preview>We received your message — Crystal Edge Digital</Preview>
          <Container className="mx-auto max-w-xl px-5 py-10">
            <Section className="rounded-2xl border border-solid border-border bg-white p-8">
              <Text className="m-0 text-xs font-semibold tracking-wide text-mineral uppercase">
                Crystal Edge Digital
              </Text>
              <Heading as="h1" className="mt-2 mb-4 text-2xl text-ink">
                Thanks, {name} — we got it.
              </Heading>
              <Text className="m-0 text-sm leading-relaxed text-ink-muted">
                Your message has been received. We typically respond within 1
                business day. If your timeline is urgent, reply directly to
                this email and note that up front.
              </Text>
              <Text className="mt-6 mb-0 text-sm text-ink-muted">
                — Crystal Edge Digital
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

WorkRequestConfirmation.PreviewProps = {
  name: "Jordan Rivera",
} satisfies WorkRequestConfirmationProps

export { WorkRequestConfirmation }
