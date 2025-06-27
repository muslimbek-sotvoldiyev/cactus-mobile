import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Battery, Headphones, Shield, Cable, Speaker } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Telefonlar",
    icon: Smartphone,
    count: "150+",
    href: "/shop?category=telefon",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Zaryatniklar",
    icon: Battery,
    count: "80+",
    href: "/shop?category=zaryatnik",
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Quloqchinlar",
    icon: Headphones,
    count: "120+",
    href: "/shop?category=quloqchin",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Himoya oynalari",
    icon: Shield,
    count: "200+",
    href: "/shop?category=himoya",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Kabellar",
    icon: Cable,
    count: "90+",
    href: "/shop?category=kabel",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Karnaylar",
    icon: Speaker,
    count: "60+",
    href: "/shop?category=karnay",
    color: "bg-indigo-100 text-indigo-600",
  },
]

export function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mahsulot kategoriyalari</h2>
          <p className="text-xl text-gray-600">Kerakli mahsulotingizni toping</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-green-100 hover:border-green-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} mahsulot</p>
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
