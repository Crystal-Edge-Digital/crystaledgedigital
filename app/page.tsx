import { About } from "@/components/sections/about"
import { CtaContact } from "@/components/sections/cta-contact"
import { EngagementPaths } from "@/components/sections/engagement-paths"
import { Faq } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { Hero } from "@/components/sections/hero"
import { Navbar } from "@/components/sections/navbar"
import { Process } from "@/components/sections/process"
import { ServiceChooser } from "@/components/sections/service-chooser"
import { Services } from "@/components/sections/services"
import { TrustStrip } from "@/components/sections/trust-strip"
import { Work } from "@/components/sections/work"
import { ServiceInterestProvider } from "@/components/service-interest-provider"

export default function Home() {
  return (
    <ServiceInterestProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ServiceChooser />
        <TrustStrip />
        <Services />
        <Work />
        <Process />
        <EngagementPaths />
        <About />
        <Faq />
        <CtaContact />
      </main>
      <Footer />
    </ServiceInterestProvider>
  )
}
