import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 10,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 0,
  },
  {
    id: 3,
    name: "AirPods Pro",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 5,
  },
  {
    id: 4,
    name: "Power Bank 20000mAh",
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7d0e?w=300&h=300&fit=crop",
    category: "zaryatnik",
    discount: 15,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mashhur mahsulotlar</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Eng ko'p sotilayotgan mahsulotlar</p>
          </div>
          <Link href="/shop">
            <Button
              variant="outline"
              size="sm"
              className="bg-white dark:bg-gray-800 text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-950 whitespace-nowrap"
            >
              Barchasini ko'rish
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} viewMode="grid" showPrice={false} />
          ))}
        </div>
      </div>
    </section>
  )
}
