import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Users, Award, Clock } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">Cactus Mobile haqida</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Biz 2020-yildan beri O'zbekiston bozorida telefon va aksessuarlar sohasida faoliyat yuritamiz.
            Mijozlarimizga sifatli mahsulotlar va professional xizmat ko'rsatish - bizning asosiy maqsadimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bizning missiyamiz</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Cactus Mobile - bu zamonaviy texnologiyalarni har bir mijozga yetkazish. Biz eng so'nggi smartfonlar,
                sifatli aksessuarlar va professional maslahatlar orqali mijozlarimizning hayotini osonlashtirishga
                intilamiz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nima uchun bizni tanlashadi?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-400">Rasmiy kafolat va sifat</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-400">Raqobatbardosh narxlar</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-400">Professional maslahat</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-600 dark:text-gray-400">Bo'lib to'lash imkoniyati</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Cactus Mobile do'koni"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 border-green-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">500+</h3>
                <p className="text-gray-600 dark:text-gray-400">Mahsulot turi</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-green-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">5000+</h3>
                <p className="text-gray-600 dark:text-gray-400">Mamnun mijoz</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-green-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">4.8/5</h3>
                <p className="text-gray-600 dark:text-gray-400">Mijoz bahosi</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-green-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">4</h3>
                <p className="text-gray-600 dark:text-gray-400">Yillik tajriba</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">Bizning jamoamiz</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Cactus Mobile jamoasi - bu texnologiya sohasida tajribali mutaxassislar. Har bir mijozga individual
            yondashuv va professional xizmat ko'rsatish bizning asosiy tamoyilimizdir.
          </p>
          <Badge className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
            Biz bilan bog'laning
          </Badge>
        </div>
      </div>
    </div>
  )
}
