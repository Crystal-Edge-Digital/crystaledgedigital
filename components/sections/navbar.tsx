"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200",
        scrolled
          ? "border-border bg-background/92 shadow-[0_8px_30px_rgba(36,61,69,0.07)] backdrop-blur-xl"
          : "border-transparent bg-background/90"
      )}
    >
      <nav
        className="section-shell flex min-h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-xl"
          aria-label="Crystal Edge Digital"
        >
          <Image
            src="/brand/ced-compact-mark.png"
            alt=""
            width={512}
            height={512}
            className="size-11 object-contain mix-blend-multiply sm:hidden"
            priority
          />
          <span className="editorial text-lg text-[#525455] sm:hidden">
            Crystal Edge Digital.
          </span>
          <Image
            src="/brand/ced-wordmark.svg"
            alt=""
            width={1600}
            height={250}
            className="hidden h-auto w-[260px] sm:block"
            priority
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-1 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="shadow-sm" asChild>
            <a href="#contact">Start a project</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <SheetTitle className="text-lg">Crystal Edge Digital</SheetTitle>
            <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-3 text-lg font-semibold hover:bg-secondary"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-4">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Start a project
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
