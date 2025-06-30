import { Card, CardContent } from "@/components/ui/card"
import { Shield, Headphones, CreditCard, RefreshCw, Award, Banknote } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Rasmiy kafolat",
    description: "Barcha mahsulotlarga 1 yillik rasmiy kafolat beramiz",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400",
  },
  {
    icon: Banknote,
    title: "Bo'lib to'lash",
    description: "Uzum nasiya orqali qulay bo'lib to'lash imkoniyati",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400",
  },
  {
    icon: Headphones,
    title: "24/7 qo'llab-quvvatlash",
    description: "Har qanday savolingizga tez javob beramiz",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400",
  },
  {
    icon: CreditCard,
    title: "Qulay to'lov",
    description: "Naqd, plastik karta va online to'lov usullari",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400",
  },
  {
    icon: RefreshCw,
    title: "Almashtirish",
    description: "7 kun ichida mahsulotni almashtirishingiz mumkin",
    color: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400",
  },
  {
    icon: Award,
    title: "Sifat kafolati",
    description: "Faqat original va sifatli mahsulotlar sotamiz",
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400",
  },
]

export function Services() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-900 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Bizning xizmatlarimiz
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Mijozlarimizga eng yaxshi xizmat ko'rsatamiz
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="text-center p-3 md:p-6 border-green-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="space-y-2 md:space-y-4">
                  <div
                    className={`w-10 h-10 md:w-16 md:h-16 rounded-full ${service.color} flex items-center justify-center mx-auto`}
                  >
                    <Icon className="h-5 w-5 md:h-8 md:w-8" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-base text-gray-600 dark:text-gray-400 leading-tight md:leading-normal">
                      {service.description}
                    </p>
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
