import { Code2, ExternalLink } from "lucide-react"

import { CrystalIcon } from "@/components/crystal-icon"
import { Separator } from "@/components/ui/separator"

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
    icon: ExternalLink,
  },
  {
    label: "Crystal Edge Digital on GitHub",
    href: "https://github.com/Crystal-Edge-Digital",
    icon: Code2,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="#top" className="flex items-center gap-3 rounded-lg">
            <CrystalIcon className="h-10 w-auto" />
            <span className="text-lg font-bold">Crystal Edge Digital</span>
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
                className="flex size-11 items-center justify-center rounded-xl border border-border text-muted-foreground hover:border-primary/30 hover:bg-secondary hover:text-primary"
              >
                <social.icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Crystal Edge Digital. All rights
            reserved.
          </p>
          <p>Clear technology, practical next steps.</p>
        </div>
      </div>
    </footer>
  )
}
