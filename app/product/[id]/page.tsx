"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Share2, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const product = {
  id: 1,
  name: "iPhone 15 Pro",
  price: 12000000,
  originalPrice: 13200000,
  image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
  category: "Telefon",
  discount: 10,
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [shareSuccess, setShareSuccess] = useState(false)

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `${product.name} - ${product.price.toLocaleString()} so'm`,
      url: window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href)
        setShareSuccess(true)
        setTimeout(() => setShareSuccess(false), 2000)
      }
    } catch (error) {
      console.log("Share failed:", error)
    }
  }

  const handleContactClick = () => {
    // Try to open phone dialer
    window.location.href = "tel:+998901234567"
  }

  const handleWhatsAppClick = () => {
    const message = `Salom! ${product.name} haqida ma'lumot olmoqchiman. Narxi: ${product.price.toLocaleString()} so'm`
    const whatsappUrl = `https://wa.me/998901234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/shop">
        <Button variant="outline" className="mb-6 bg-white text-green-600 border-green-600 hover:bg-green-50">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Orqaga qaytish
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            {product.discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">-{product.discount}%</Badge>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2 text-green-600 border-green-600">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-green-600">{product.price.toLocaleString()} so'm</span>
              {product.discount > 0 && (
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice.toLocaleString()} so'm
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleContactClick} className="flex-1 bg-green-600 hover:bg-green-700">
              <Phone className="mr-2 h-4 w-4" />
              Qo'ng'iroq qilish
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="flex-1 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            <Button
              onClick={handleShare}
              variant="outline"
              size="icon"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {shareSuccess && <div className="text-center text-green-600 text-sm">✓ Havola nusxalandi!</div>}
        </div>
      </div>
    </div>
  )
}
