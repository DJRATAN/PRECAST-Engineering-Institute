import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-[#063591] leading-tight">
                Master Engineering Excellence
              </h1>
              <p className="text-xl text-[#4a5568]">
                PRECAST Engineering Institute — Empowering the next generation of engineers and innovators worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#063591] hover:bg-[#052a6b] text-white" asChild>
                <Link href="/courses">
                  Start Learning
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#063591] text-[#063591] hover:bg-blue-50 bg-transparent"
                asChild
              >
                <Link href="/volunteer">Join as Volunteer</Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-[#063591]">50K+</p>
                <p className="text-[#4a5568]">Active Engineers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#063591]">100+</p>
                <p className="text-[#4a5568]">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#063591]">180+</p>
                <p className="text-[#4a5568]">Countries</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-gray-400 rounded-3xl opacity-20 blur-3xl"></div>
            <img
              src="/students-learning-together.jpg"
              alt="Engineers learning"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
