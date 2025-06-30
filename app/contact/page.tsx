"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Send } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log("Form submitted:", formData)
    alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.")
    setFormData({ name: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">Biz bilan bog'laning</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Savollaringiz bormi? Biz sizga yordam berishga tayyormiz!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="border-green-200 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Aloqa ma'lumotlari
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Telefon</p>
                    <p className="text-gray-600 dark:text-gray-400">+998 90 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Manzil</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 1-uy
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Ish vaqti</p>
                    <p className="text-gray-600 dark:text-gray-400">Dushanba-Shanba: 9:00-19:00</p>
                    <p className="text-gray-600 dark:text-gray-400">Yakshanba: 10:00-17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">Ijtimoiy tarmoqlar</CardTitle>
              </CardHeader>
              <CardContent>
                <SocialLinks />
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  Bizning ijtimoiy tarmoqlarda so'nggi yangiliklar va chegirmalardan xabardor bo'ling!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-green-200 dark:border-gray-700 dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">Bizga xabar yuboring</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Ismingiz *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ismingizni kiriting"
                      className="border-green-200 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Telefon raqam *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 90 123 45 67"
                      className="border-green-200 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Xabar *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Xabaringizni yozing..."
                      rows={5}
                      className="border-green-200 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Xabar yuborish
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4 text-center">
              Bizning joylashuvimiz
            </h3>
            <div className="aspect-video lg:aspect-[21/9] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sChilonzor%20District%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cactus Mobile joylashuvi"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-center">
              📍 Toshkent shahar, Chilonzor tumani, Bunyodkor ko'chasi 1-uy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
