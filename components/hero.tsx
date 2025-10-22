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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Build, Learn, and Innovate</h1>
              <p className="text-xl text-gray-600">
                MEGA Foundries — Empowering the next generation of builders and innovators worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                <Link href="/courses">
                  Start Learning
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                asChild
              >
                <Link href="/volunteer">Join as Volunteer</Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-red-600">50K+</p>
                <p className="text-gray-600">Active Learners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100+</p>
                <p className="text-gray-600">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-600">180+</p>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-gray-400 rounded-3xl opacity-20 blur-3xl"></div>
            <img
              src="/students-learning-together.jpg"
              alt="Students learning"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
