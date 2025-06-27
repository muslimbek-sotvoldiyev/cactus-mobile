"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"

export function ContactInfo() {
  const handleTelegramClick = () => {
    const message = "Salom! Cactus Mobile haqida ma'lumot olmoqchiman."
    const telegramUrl = `https://t.me/cactusmobile_bot?start=${encodeURIComponent(message)}`
    window.open(telegramUrl, "_blank")
  }

  return (
    <section className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Biz bilan bog'laning</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Savollaringiz bormi? Biz sizga yordam berishga tayyormiz!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6 border-green-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Telefon</h3>
                <p className="text-gray-600 dark:text-gray-400">+998 90 123 45 67</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-green-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Manzil</h3>
                <p className="text-gray-600 dark:text-gray-400">Yangiqurgon</p>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-green-200 dark:border-gray-700 dark:bg-gray-800">
            <CardContent className="space-y-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ish vaqti</h3>
                <p className="text-gray-600 dark:text-gray-400">9:00-19:00 (Dush-Shan)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button onClick={handleTelegramClick} className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
            <MessageCircle className="mr-2 h-5 w-5" />
            Telegram orqali bog'lanish
          </Button>
        </div>
      </div>
    </section>
  )
}
