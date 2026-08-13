"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

import { CrystalIcon } from "@/components/crystal-icon"
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
          ? "border-border bg-background/95 shadow-[0_6px_24px_rgba(20,23,24,0.05)] backdrop-blur-md"
          : "border-transparent bg-background/90"
      )}
    >
      <nav
        className="section-shell flex min-h-20 items-center justify-between"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-3 rounded-lg">
          <CrystalIcon className="h-10 w-auto" />
          <span className="text-base font-bold tracking-tight sm:text-lg">
            Crystal Edge Digital
          </span>
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
          <Button size="sm" asChild>
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
