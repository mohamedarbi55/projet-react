import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { Mission } from "@/components/mission"
import { Technology } from "@/components/technology"
import { HowItWorks } from "@/components/how-it-works"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <Mission />
        <Technology />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

