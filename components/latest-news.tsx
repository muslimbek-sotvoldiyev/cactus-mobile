import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const latestNews = [
  {
    id: 1,
    title: "iPhone 15 seriyasiga 20% chegirma!",
    excerpt: "Barcha iPhone 15 modellariga katta chegirma. Cheklangan vaqt davomida.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
    date: "2024-01-15",
    category: "Chegirma",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 sotuvga chiqdi",
    excerpt: "Eng so'nggi Samsung flagmani endi bizda! Oldindan buyurtma bering.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
    date: "2024-01-10",
    category: "Yangi mahsulot",
  },
  {
    id: 3,
    title: "Aksessuarlarga 30% chegirma",
    excerpt: "Barcha telefon aksessuarlariga katta chegirma. Quloqchin, zaryatnik va boshqalar.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop",
    date: "2024-01-08",
    category: "Aksiya",
  },
  {
    id: 4,
    title: "Yangi do'kon ochilishi",
    excerpt: "Chilonzor tumanida yangi filialimiz ochildi. Keng tanlov va qulay joylashuv.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    date: "2024-01-05",
    category: "Yangilik",
  },
  {
    id: 5,
    title: "Xiaomi mahsulotlariga chegirma",
    excerpt: "Barcha Xiaomi smartfonlariga 15% chegirma. Sifat va arzonlik birgalikda.",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop",
    date: "2024-01-03",
    category: "Chegirma",
  },
  {
    id: 6,
    title: "Yangi yil aksiyasi",
    excerpt: "Yangi yil munosabati bilan barcha mahsulotlarga maxsus chegirmalar.",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=300&h=200&fit=crop",
    date: "2023-12-25",
    category: "Aksiya",
  },
]

export function LatestNews() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">So'nggi yangiliklar</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Chegirmalar va yangi mahsulotlar haqida</p>
          </div>
          <Link href="/news">
            <Button
              variant="outline"
              size="sm"
              className="bg-white dark:bg-gray-800 text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-950 whitespace-nowrap"
            >
              Barcha yangiliklar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {latestNews.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-green-200 dark:border-gray-700 hover:shadow-lg transition-shadow dark:bg-gray-800 flex flex-col h-80"
            >
              <div className="relative aspect-video">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <Badge
                  variant="outline"
                  className="absolute top-2 right-2 bg-white/90 dark:bg-gray-800/90 text-green-600 border-green-600 text-xs"
                >
                  {item.category}
                </Badge>
              </div>

              <div className="flex flex-col flex-1 p-3">
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="h-3 w-3" />
                  {new Date(item.date).toLocaleDateString("uz-UZ")}
                </div>

                <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 flex-1">
                  {item.excerpt}
                </p>

                <Link href={`/news/${item.id}`} className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-white dark:bg-gray-800 text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-950 text-xs"
                  >
                    Batafsil
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
