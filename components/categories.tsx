import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Battery, Headphones, Shield, Cable, Speaker } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Telefonlar",
    icon: Smartphone,
    count: "150+",
    href: "/shop?category=telefon",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
  },
  {
    name: "Zaryatniklar",
    icon: Battery,
    count: "80+",
    href: "/shop?category=zaryatnik",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
  },
  {
    name: "Quloqchinlar",
    icon: Headphones,
    count: "120+",
    href: "/shop?category=quloqchin",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
  },
  {
    name: "Himoya oynalari",
    icon: Shield,
    count: "200+",
    href: "/shop?category=himoya",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
  },
  {
    name: "Kabellar",
    icon: Cable,
    count: "90+",
    href: "/shop?category=kabel",
    color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400",
  },
  {
    name: "Karnaylar",
    icon: Speaker,
    count: "60+",
    href: "/shop?category=karnay",
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400",
  },
]

export function Categories() {
  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Mahsulot kategoriyalari
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">Kerakli mahsulotingizni toping</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-green-100 hover:border-green-300 dark:border-gray-700 dark:hover:border-green-600 dark:bg-gray-800 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 md:p-6 text-center">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3 md:mb-4`}
                    >
                      <Icon className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{category.count} mahsulot</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
