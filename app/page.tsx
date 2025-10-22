import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import FeatureCards from "@/components/feature-cards"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      <Hero />
      <FeatureCards />
      <CTA />
    </div>
  )
}
