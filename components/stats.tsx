import { Card, CardContent } from "@/components/ui/card"
import { Users, Package, Star, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "5000+",
    label: "Mamnun mijozlar",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Package,
    number: "500+",
    label: "Mahsulot turi",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Mijoz bahosi",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: Clock,
    number: "4+",
    label: "Yillik tajriba",
    color: "text-purple-600 dark:text-purple-400",
  },
]

export function Stats() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Bizning yutuqlarimiz
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Raqamlar bilan bizning muvaffaqiyatimiz</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="text-center p-4 md:p-6 border-green-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-900 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-3 md:space-y-4">
                  <div className="flex justify-center">
                    <Icon className={`h-8 w-8 md:h-12 md:w-12 ${stat.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1 md:mb-2`}>{stat.number}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
