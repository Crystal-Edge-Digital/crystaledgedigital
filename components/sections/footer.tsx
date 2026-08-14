import Image from "next/image"

import { Separator } from "@/components/ui/separator"

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      aria-hidden="true"
      data-brand-icon="linkedin"
    >
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 9h3.55v11.45H3.56V9Z"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      aria-hidden="true"
      data-brand-icon="github"
    >
      <path
        fill="currentColor"
        d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.32c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z"
      />
    </svg>
  )
}

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    label: "Crystal Edge Digital on LinkedIn",
    href: "https://www.linkedin.com/company/crystal-edge-digital/",
    icon: LinkedInIcon,
  },
  {
    label: "Crystal Edge Digital on GitHub",
    href: "https://github.com/Crystal-Edge-Digital",
    icon: GitHubIcon,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/35 py-12">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a
            href="#top"
            className="rounded-lg"
            aria-label="Crystal Edge Digital"
          >
            <Image
              src="/brand/ced-wordmark.svg"
              alt=""
              width={1600}
              height={250}
              className="h-auto w-[240px]"
            />
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-11 content-center rounded-md text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:border-primary/30 hover:bg-secondary hover:text-primary"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8" />
        <div className="text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Crystal Edge Digital. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
