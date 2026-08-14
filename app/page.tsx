import { About } from "@/components/sections/about"
import { CtaContact } from "@/components/sections/cta-contact"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { Navbar } from "@/components/sections/navbar"
import { Process } from "@/components/sections/process"
import { Services } from "@/components/sections/services"
import { TrustStrip } from "@/components/sections/trust-strip"
import { Work } from "@/components/sections/work"

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <Services />
        <Work />
        <Process />
        <About />
        <CtaContact />
      </main>
      <Footer />
    </>
  )
}
