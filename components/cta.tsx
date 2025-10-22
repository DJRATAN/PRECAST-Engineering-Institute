import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Learning?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of learners worldwide and unlock your potential today.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
          <Link href="/courses">
            Explore Courses
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
