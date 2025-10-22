import { Card } from "@/components/ui/card"
import { BookOpen, Zap, Users, Trophy } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Diverse Courses",
    description: "Math, Science, General Knowledge, and more — all free and accessible.",
  },
  {
    icon: Zap,
    title: "Gamified Learning",
    description: "Earn XP, complete daily challenges, and climb the leaderboard.",
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Connect with learners and volunteers from around the world.",
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "Monitor your learning journey with detailed progress tracking.",
  },
]

export default function FeatureCards() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Everything you need to succeed in your learning journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
