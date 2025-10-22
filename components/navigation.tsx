"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
            <BookOpen className="w-6 h-6" />
            <span>Learning Hub</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition">
              Courses
            </Link>
            <Link href="/learn" className="text-gray-700 hover:text-blue-600 transition">
              Learn
            </Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-600 transition">
              Community
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
