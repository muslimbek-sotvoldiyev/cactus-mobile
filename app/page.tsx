import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { LatestNews } from "@/components/latest-news"
import { ContactInfo } from "@/components/contact-info"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Services />
      <Stats />
      <LatestNews />
      <ContactInfo />
    </div>
  )
}
