import Link from "next/link"
import { Smartphone, MapPin, Phone, Clock } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Cactus Mobile</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Telefon va aksessuarlar sohasida ishonchli hamkoringiz. Sifat va professional xizmat bizning
              ustuvorligimiz.
            </p>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 text-sm mr-2">Bizni kuzating:</span>
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-green-400 transition-colors">
                  Do'kon
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-green-400 transition-colors">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kategoriyalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=telefon" className="text-gray-400 hover:text-green-400 transition-colors">
                  Telefonlar
                </Link>
              </li>
              <li>
                <Link href="/shop?category=zaryatnik" className="text-gray-400 hover:text-green-400 transition-colors">
                  Zaryatniklar
                </Link>
              </li>
              <li>
                <Link href="/shop?category=aksessuar" className="text-gray-400 hover:text-green-400 transition-colors">
                  Aksessuarlar
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-green-400 transition-colors">
                  Chegirmalar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">+998 90 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">Toshkent sh., Chilonzor tumani</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">9:00-19:00 (Dush-Shan)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Cactus Mobile. Barcha huquqlar himoyalangan.</p>
          <p className="text-gray-600 text-xs mt-2">
            Powered by{" "}
            <a
              href="https://muslimbek.fn1-fullstack.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Muslimbek
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
