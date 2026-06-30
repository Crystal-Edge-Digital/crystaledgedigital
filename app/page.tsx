import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Work } from "@/components/sections/work"
import { About } from "@/components/sections/about"
import { CtaContact } from "@/components/sections/cta-contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <CtaContact />
      </main>
      <Footer />
    </>
  )
}
