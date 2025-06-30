"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import { Grid, List, Search, Store } from "lucide-react"
import { Pagination } from "@/components/pagination"

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 10,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 10500000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 0,
  },
  {
    id: 3,
    name: "Power Bank 20000mAh",
    price: 350000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7d0e?w=300&h=300&fit=crop",
    category: "zaryatnik",
    discount: 15,
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 5,
  },
  {
    id: 5,
    name: "Xiaomi Redmi Note 13",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 20,
  },
  {
    id: 6,
    name: "Fast Charger 65W",
    price: 180000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    category: "zaryatnik",
    discount: 0,
  },
  {
    id: 7,
    name: "iPhone 14",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 12,
  },
  {
    id: 8,
    name: "Wireless Charger",
    price: 250000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7d0e?w=300&h=300&fit=crop",
    category: "zaryatnik",
    discount: 8,
  },
  {
    id: 9,
    name: "Samsung Galaxy A54",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 5,
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 450000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 10,
  },
  {
    id: 11,
    name: "iPhone 13",
    price: 7200000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 15,
  },
  {
    id: 12,
    name: "Power Bank 10000mAh",
    price: 220000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7d0e?w=300&h=300&fit=crop",
    category: "zaryatnik",
    discount: 0,
  },
]

export default function ShopPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search") || ""

  const [filteredProducts, setFilteredProducts] = useState(products)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(15) // 15 items per page

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setFilteredProducts(filtered)
    } else {
      setFilteredProducts(products)
    }
  }, [searchQuery])

  const handleFilterChange = (filters: any) => {
    let filtered = products

    // Apply search filter first
    if (searchQuery) {
      filtered = filtered.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter((product) => filters.categories.includes(product.category))
    }

    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter((product) => {
        const price = product.price
        const min = filters.minPrice || 0
        const max = filters.maxPrice || Number.POSITIVE_INFINITY
        return price >= min && price <= max
      })
    }

    if (filters.sortBy) {
      filtered = [...filtered].sort((a, b) => {
        switch (filters.sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "name":
            return a.name.localeCompare(b.name)
          default:
            return 0
        }
      })
    }

    setFilteredProducts(filtered)
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filteredProducts.length])

  return (
    <div className="container mx-auto px-3 md:px-4 py-6 md:py-8">
      {/* Shop Header */}
      <div className="text-center mb-6 md:mb-8">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
            <Store className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">Cactus Mobile Do'koni</h1>
        </div>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          Eng sifatli telefon va aksessuarlarni toping
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        <aside className="lg:w-1/4">
          <ProductFilters onFilterChange={handleFilterChange} />
        </aside>

        <main className="lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {searchQuery ? `"${searchQuery}" uchun natijalar` : "Barcha mahsulotlar"}
              </h2>
              {searchQuery && (
                <p className="text-gray-600 dark:text-gray-400 mt-1">{filteredProducts.length} ta mahsulot topildi</p>
              )}
              {!searchQuery && (
                <p className="text-gray-600 dark:text-gray-400 mt-1">Jami {filteredProducts.length} ta mahsulot</p>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-green-600 hover:bg-green-700"
                    : "border-green-200 text-green-600 hover:bg-green-50 dark:border-gray-600 dark:text-green-400"
                }
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={
                  viewMode === "list"
                    ? "bg-green-600 hover:bg-green-700"
                    : "border-green-200 text-green-600 hover:bg-green-50 dark:border-gray-600 dark:text-green-400"
                }
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div
            className={`grid gap-4 ${
              viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {searchQuery ? `"${searchQuery}" uchun hech narsa topilmadi` : "Hech qanday mahsulot topilmadi"}
              </p>
              {searchQuery && <p className="text-gray-400 mt-2">Boshqa kalit so'zlar bilan qidirib ko'ring</p>}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
