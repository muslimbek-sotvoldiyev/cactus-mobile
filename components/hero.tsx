"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    id: 1,
    title: "CACTUS MOBILE",
    subtitle: "Premium telefon va aksessuarlar",
    description: "Sifat va ishonch - bizning asosiy tamoyilimiz",
    buttonText: "Katalogni ko'rish",
    backgroundVideo: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    backgroundImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&h=1080&fit=crop",
  },
  {
    id: 2,
    title: "YANGI MODELLAR",
    subtitle: "Eng so'nggi texnologiyalar",
    description: "iPhone, Samsung, Xiaomi va boshqa brendlar",
    buttonText: "Telefonlarni ko'rish",
    backgroundVideo: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    backgroundImage: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1920&h=1080&fit=crop",
  },
  {
    id: 3,
    title: "MAXSUS TAKLIFLAR",
    subtitle: "Har kuni yangi chegirmalar",
    description: "VIP mijozlar uchun maxsus narxlar",
    buttonText: "Takliflarni ko'rish",
    backgroundVideo: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    backgroundImage: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1920&h=1080&fit=crop",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        {videoLoaded ? (
          <video
            key={slide.id}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={slide.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-md">{slide.subtitle}</p>
          </div>

          {/* Dots Decoration */}
          <div className="flex justify-center space-x-2 py-4">
            <div className="w-2 h-2 bg-green-400 rounded-full shadow-lg"></div>
            <div className="w-2 h-2 bg-green-300 rounded-full shadow-lg"></div>
            <div className="w-2 h-2 bg-green-200 rounded-full shadow-lg"></div>
          </div>

          {/* Description */}
          <p className="text-lg text-white/80 max-w-md mx-auto leading-relaxed drop-shadow-md">{slide.description}</p>

          {/* Button */}
          <div className="pt-8">
            <Link href="/shop">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
              >
                {slide.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-16 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125 shadow-lg" : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Video Load Trigger */}
      <video className="hidden" onCanPlay={() => setVideoLoaded(true)} preload="metadata">
        <source src={slide.backgroundVideo} type="video/mp4" />
      </video>
    </section>
  )
}
