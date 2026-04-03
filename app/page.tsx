import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { Process } from "@/components/sections/process"
import { Testimonial } from "@/components/sections/testimonial"
import { CtaContact } from "@/components/sections/cta-contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Process />
        <Testimonial />
        <CtaContact />
      </main>
      <Footer />
    </>
  )
}
