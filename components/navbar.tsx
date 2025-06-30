"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Search, Smartphone } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()
  const menuRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { name: "Bosh sahifa", href: "/" },
    { name: "Do'kon", href: "/shop" },
    { name: "Yangiliklar", href: "/news" },
    { name: "Biz haqimizda", href: "/about" },
    { name: "Aloqa", href: "/contact" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setIsOpen(false)
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-green-100 dark:border-gray-800 sticky top-0 z-50 animate-slide-down">
        <div className="container mx-auto px-3 md:px-4">
          <div className="flex justify-between items-center h-14 md:h-16">
            <Link
              href="/"
              className="flex items-center space-x-1.5 md:space-x-2 transition-transform hover:scale-105 flex-shrink-0"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                <Smartphone className="h-3 w-3 md:h-5 md:w-5 text-white" />
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent whitespace-nowrap">
                Cactus Mobile
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Search & Actions */}
            <div className="hidden lg:flex items-center space-x-3 flex-shrink-0">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Telefon, aksessuar qidirish..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-56 border-green-200 focus:border-green-500 transition-all duration-300 focus:shadow-lg dark:bg-gray-800 dark:border-gray-700"
                />
              </form>
              <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-3">
                <ThemeToggle />
                <SocialLinks />
              </div>
            </div>

            {/* Mobile & Tablet Actions */}
            <div className="flex items-center gap-1 lg:hidden">
              {/* Tablet Search */}
              <div className="hidden md:block">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Qidirish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 w-32 h-8 border-green-200 focus:border-green-500 text-sm dark:bg-gray-800 dark:border-gray-700"
                  />
                </form>
              </div>

              {/* Mobile Search */}
              <div className="md:hidden">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Qidirish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-7 w-20 h-7 border-green-200 focus:border-green-500 text-xs dark:bg-gray-800 dark:border-gray-700"
                  />
                </form>
              </div>

              <ThemeToggle />

              {/* Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="transition-transform hover:scale-110 p-1.5"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Side Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden animate-fade-in">
          <div
            ref={menuRef}
            className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 animate-slide-in-right ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Menyu</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-1.5">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-base text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
