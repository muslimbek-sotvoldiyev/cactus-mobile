"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price?: number
  image: string
  category: string
  discount?: number
}

interface ProductCardProps {
  product: Product
  viewMode: "grid" | "list"
  showPrice?: boolean
}

export function ProductCard({ product, viewMode, showPrice = true }: ProductCardProps) {
  const [shareSuccess, setShareSuccess] = useState(false)
  const discountedPrice =
    product.discount && product.price ? product.price * (1 - product.discount / 100) : product.price

  const handleContactClick = () => {
    const message = `Salom! ${product.name} haqida ma'lumot olmoqchiman.`
    const telegramUrl = `https://t.me/cactusmobile_bot?start=${encodeURIComponent(message)}`
    window.open(telegramUrl, "_blank")
  }

  const handleWhatsAppClick = () => {
    const message = `Salom! ${product.name} haqida ma'lumot olmoqchiman.${
      showPrice && discountedPrice ? ` Narxi: ${Math.round(discountedPrice).toLocaleString()} so'm` : ""
    }`
    const whatsappUrl = `https://wa.me/998901234567?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `${product.name}${showPrice && discountedPrice ? ` - ${Math.round(discountedPrice).toLocaleString()} so'm` : ""}`,
      url: `${window.location.origin}/product/${product.id}`,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(`${window.location.origin}/product/${product.id}`)
        setShareSuccess(true)
        setTimeout(() => setShareSuccess(false), 2000)
      }
    } catch (error) {
      console.log("Share failed:", error)
    }
  }

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden border-green-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] dark:bg-gray-800 animate-slide-up">
        <div className="flex">
          <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            {product.discount && product.discount > 0 && (
              <Badge className="absolute top-1 left-1 bg-red-500 hover:bg-red-600 text-xs px-1 py-0.5">
                -{product.discount}%
              </Badge>
            )}
          </div>
          <div className="flex-1 p-3 md:p-4 flex flex-col justify-between min-w-0">
            <div className="space-y-1 md:space-y-2">
              <Badge
                variant="outline"
                className="text-green-600 border-green-600 dark:text-green-400 dark:border-green-400 w-fit text-xs"
              >
                {product.category}
              </Badge>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                {product.name}
              </h3>
              {showPrice && discountedPrice && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg md:text-xl font-bold text-green-600 dark:text-green-400">
                      {Math.round(discountedPrice).toLocaleString()} so'm
                    </span>
                    {product.discount && product.discount > 0 && product.price && (
                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 line-through">
                        {product.price.toLocaleString()} so'm
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-3">
              <Link href={`/product/${product.id}`} className="flex-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white dark:bg-gray-800 text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-950 dark:text-green-400 dark:border-green-400 text-xs h-8"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  Ko'rish
                </Button>
              </Link>
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="border-green-600 text-green-600 hover:bg-green-50 dark:border-gray-600 dark:hover:bg-green-950 dark:text-green-400 dark:border-green-400 px-2 bg-transparent h-8"
              >
                <Share2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
        {shareSuccess && (
          <div className="text-center text-green-600 dark:text-green-400 text-xs py-1">✓ Havola nusxalandi!</div>
        )}
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border-green-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-gray-800 animate-slide-up">
      <div className="relative aspect-square">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        {product.discount && product.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 text-xs">-{product.discount}%</Badge>
        )}
      </div>
      <CardContent className="p-3 md:p-4">
        <Badge
          variant="outline"
          className="text-green-600 border-green-600 mb-2 dark:text-green-400 dark:border-green-400 text-xs"
        >
          {product.category}
        </Badge>
        <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
          {product.name}
        </h3>
        {showPrice && discountedPrice && (
          <div className="space-y-1 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg md:text-xl font-bold text-green-600 dark:text-green-400">
                {Math.round(discountedPrice).toLocaleString()} so'm
              </span>
            </div>
            {product.discount && product.discount > 0 && product.price && (
              <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 line-through">
                {product.price.toLocaleString()} so'm
              </span>
            )}
          </div>
        )}
        <div className="flex gap-2">
          <Link href={`/product/${product.id}`} className="flex-1">
            <Button
              variant="outline"
              size="sm"
              className="w-full bg-white dark:bg-gray-800 text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-950 dark:text-green-400 dark:border-green-400 text-xs h-8"
            >
              <Eye className="h-3 w-3 mr-1" />
              Ko'rish
            </Button>
          </Link>
          <Button
            onClick={handleShare}
            variant="outline"
            size="sm"
            className="border-green-600 text-green-600 hover:bg-green-50 dark:border-gray-600 dark:hover:bg-green-950 dark:text-green-400 dark:border-green-400 bg-transparent px-2 h-8"
          >
            <Share2 className="h-3 w-3" />
          </Button>
        </div>
        {shareSuccess && (
          <div className="text-center text-green-600 dark:text-green-400 text-xs mt-2">✓ Havola nusxalandi!</div>
        )}
      </CardContent>
    </Card>
  )
}
