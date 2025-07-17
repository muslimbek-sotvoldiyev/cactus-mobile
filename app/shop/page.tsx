"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { Button } from "@/components/ui/button"
import { Grid, List, Search, Store, ArrowLeft } from "lucide-react"
import { Pagination } from "@/components/pagination"
import { PriceDisclaimer } from "@/components/price-disclaimer"
import Link from "next/link"

const products = [
  // iPhone modellari
  {
    id: 1,
    name: "iPhone 11",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 11",
    model: "iPhone 11",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 15,
  },
  {
    id: 2,
    name: "iPhone 11 Pro",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 11",
    model: "iPhone 11 Pro",
    price: 6800000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 12,
  },
  {
    id: 3,
    name: "iPhone 11 Pro Max",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 11",
    model: "iPhone 11 Pro Max",
    price: 7200000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 10,
  },
  {
    id: 4,
    name: "iPhone 12",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 12",
    model: "iPhone 12",
    price: 7000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 8,
  },
  {
    id: 5,
    name: "iPhone 12 Pro",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 12",
    model: "iPhone 12 Pro",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 5,
  },
  {
    id: 6,
    name: "iPhone 12 Pro Max",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 12",
    model: "iPhone 12 Pro Max",
    price: 9200000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 7,
  },
  {
    id: 7,
    name: "iPhone 13",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 13",
    model: "iPhone 13",
    price: 8000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 10,
  },
  {
    id: 8,
    name: "iPhone 13 Pro",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 13",
    model: "iPhone 13 Pro",
    price: 9500000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 8,
  },
  {
    id: 9,
    name: "iPhone 13 Pro Max",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 13",
    model: "iPhone 13 Pro Max",
    price: 10500000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 6,
  },
  {
    id: 10,
    name: "iPhone 14",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 14",
    model: "iPhone 14",
    price: 9000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 12,
  },
  {
    id: 11,
    name: "iPhone 14 Pro",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 14",
    model: "iPhone 14 Pro",
    price: 11000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 8,
  },
  {
    id: 12,
    name: "iPhone 14 Pro Max",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 14",
    model: "iPhone 14 Pro Max",
    price: 12000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 5,
  },
  {
    id: 13,
    name: "iPhone 15",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 15",
    model: "iPhone 15",
    price: 10500000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 5,
  },
  {
    id: 14,
    name: "iPhone 15 Pro",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 15",
    model: "iPhone 15 Pro",
    price: 13000000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 3,
  },
  {
    id: 15,
    name: "iPhone 15 Pro Max",
    brand: "apple",
    brandName: "Apple",
    series: "iPhone 15",
    model: "iPhone 15 Pro Max",
    price: 14500000,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 2,
  },
  // Samsung modellari
  {
    id: 16,
    name: "Samsung Galaxy S21",
    brand: "samsung",
    brandName: "Samsung",
    series: "Galaxy S21",
    model: "Galaxy S21",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 15,
  },
  {
    id: 17,
    name: "Samsung Galaxy S22",
    brand: "samsung",
    brandName: "Samsung",
    series: "Galaxy S22",
    model: "Galaxy S22",
    price: 8000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 10,
  },
  {
    id: 18,
    name: "Samsung Galaxy S23",
    brand: "samsung",
    brandName: "Samsung",
    series: "Galaxy S23",
    model: "Galaxy S23",
    price: 9500000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 8,
  },
  {
    id: 19,
    name: "Samsung Galaxy S24",
    brand: "samsung",
    brandName: "Samsung",
    series: "Galaxy S24",
    model: "Galaxy S24",
    price: 11000000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 5,
  },
  {
    id: 20,
    name: "Samsung Galaxy A34",
    brand: "samsung",
    brandName: "Samsung",
    series: "Galaxy A",
    model: "Galaxy A34",
    price: 3800000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 12,
  },
  {
    id: 21,
    name: "Samsung Galaxy A54",
    brand: "samsung",
    brandName: "Samsung",
    series: "Galaxy A",
    model: "Galaxy A54",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 10,
  },
  // Xiaomi modellari
  {
    id: 22,
    name: "Xiaomi Redmi Note 11",
    brand: "xiaomi",
    brandName: "Xiaomi",
    series: "Redmi Note",
    model: "Redmi Note 11",
    price: 2800000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 20,
  },
  {
    id: 23,
    name: "Xiaomi Redmi Note 12",
    brand: "xiaomi",
    brandName: "Xiaomi",
    series: "Redmi Note",
    model: "Redmi Note 12",
    price: 3200000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 18,
  },
  {
    id: 24,
    name: "Xiaomi Redmi Note 13",
    brand: "xiaomi",
    brandName: "Xiaomi",
    series: "Redmi Note",
    model: "Redmi Note 13",
    price: 3800000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 15,
  },
  {
    id: 25,
    name: "Xiaomi 13",
    brand: "xiaomi",
    brandName: "Xiaomi",
    series: "Xiaomi",
    model: "Xiaomi 13",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 12,
  },
  {
    id: 26,
    name: "Xiaomi 14",
    brand: "xiaomi",
    brandName: "Xiaomi",
    series: "Xiaomi",
    model: "Xiaomi 14",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
    category: "telefon",
    discount: 8,
  },
  // Aksessuarlar
  {
    id: 27,
    name: "Anker PowerCore 20000mAh",
    brand: "anker",
    brandName: "Anker",
    series: "PowerCore",
    model: "PowerCore 20000",
    price: 450000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7d0e?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 15,
  },
  {
    id: 28,
    name: "Anker PowerCore 10000mAh",
    brand: "anker",
    brandName: "Anker",
    series: "PowerCore",
    model: "PowerCore 10000",
    price: 280000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7d0e?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 10,
  },
  {
    id: 29,
    name: "Anker Fast Charger 65W",
    brand: "anker",
    brandName: "Anker",
    series: "PowerPort",
    model: "PowerPort 65W",
    price: 320000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 8,
  },
  {
    id: 30,
    name: "Belkin Wireless Charger",
    brand: "belkin",
    brandName: "Belkin",
    series: "Wireless",
    model: "Wireless Pad",
    price: 180000,
    image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7d0e?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 12,
  },
  {
    id: 31,
    name: "Belkin Car Charger",
    brand: "belkin",
    brandName: "Belkin",
    series: "Car",
    model: "Car Charger",
    price: 120000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 5,
  },
  {
    id: 32,
    name: "Universal AirPods Case",
    brand: "universal",
    brandName: "Universal",
    series: "Cases",
    model: "AirPods Case",
    price: 45000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 20,
  },
  {
    id: 33,
    name: "Universal Phone Stand",
    brand: "universal",
    brandName: "Universal",
    series: "Stands",
    model: "Phone Stand",
    price: 35000,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 15,
  },
  {
    id: 34,
    name: "Universal Cable Set",
    brand: "universal",
    brandName: "Universal",
    series: "Cables",
    model: "Cable Set",
    price: 65000,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    category: "aksessuar",
    discount: 10,
  },
]

export default function ShopPage() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category") || ""
  const selectedBrand = searchParams.get("brand") || ""

  const [filteredProducts, setFilteredProducts] = useState(products)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentView, setCurrentView] = useState<"categories" | "brands" | "products">("categories")

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(15)

  // Get unique categories
  const categories = [
    {
      name: "Telefonlar",
      value: "telefon",
      count: products.filter((p) => p.category === "telefon").length,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    },
    {
      name: "Aksessuarlar",
      value: "aksessuar",
      count: products.filter((p) => p.category === "aksessuar").length,
      image: "https://images.unsplash.com/photo-1609592806596-4d8b5b1d7d0e?w=300&h=300&fit=crop",
    },
  ]

  // Get brands for selected category
  const brands = selectedCategory
    ? Array.from(new Set(products.filter((p) => p.category === selectedCategory).map((p) => p.brand))).map((brand) => ({
        name: products.find((p) => p.brand === brand)?.brandName || brand,
        value: brand,
        count: products.filter((p) => p.category === selectedCategory && p.brand === brand).length,
        image: products.find((p) => p.category === selectedCategory && p.brand === brand)?.image || "",
      }))
    : []

  // Get products for selected category and brand
  const categoryBrandProducts =
    selectedCategory && selectedBrand
      ? products.filter((p) => p.category === selectedCategory && p.brand === selectedBrand)
      : []

  useEffect(() => {
    if (selectedCategory && selectedBrand) {
      setCurrentView("products")
      setFilteredProducts(categoryBrandProducts)
    } else if (selectedCategory) {
      setCurrentView("brands")
    } else {
      setCurrentView("categories")
    }
  }, [selectedCategory, selectedBrand])

  const handleFilterChange = (filters: any) => {
    let filtered = categoryBrandProducts

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
          case "brand":
            return a.brandName.localeCompare(b.brandName)
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

  // Reset to first page when view changes
  useEffect(() => {
    setCurrentPage(1)
  }, [currentView, filteredProducts.length])

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

      <PriceDisclaimer />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        <Link href="/shop" className="text-green-600 hover:text-green-700 dark:text-green-400">
          Do'kon
        </Link>
        {selectedCategory && (
          <>
            <span className="text-gray-400">/</span>
            <Link
              href={`/shop?category=${selectedCategory}`}
              className="text-green-600 hover:text-green-700 dark:text-green-400"
            >
              {categories.find((c) => c.value === selectedCategory)?.name}
            </Link>
          </>
        )}
        {selectedBrand && (
          <>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-400">
              {brands.find((b) => b.value === selectedBrand)?.name}
            </span>
          </>
        )}
      </div>

      {/* Back Button */}
      {(selectedCategory || selectedBrand) && (
        <div className="mb-6">
          <Link href={selectedBrand ? `/shop?category=${selectedCategory}` : selectedCategory ? "/shop" : "/shop"}>
            <Button variant="outline" className="bg-white text-green-600 border-green-600 hover:bg-green-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Orqaga
            </Button>
          </Link>
        </div>
      )}

      {/* Categories View */}
      {currentView === "categories" && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kategoriyani tanlang</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link key={category.value} href={`/shop?category=${category.value}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-green-200 dark:border-gray-700 p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        target.nextElementSibling!.classList.remove("hidden")
                      }}
                    />
                    <div className="w-full h-full bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center hidden">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{category.count} ta mahsulot</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Brands View */}
      {currentView === "brands" && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {categories.find((c) => c.value === selectedCategory)?.name} brendlarini tanlang
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {brands.map((brand) => (
              <Link key={brand.value} href={`/shop?category=${selectedCategory}&brand=${brand.value}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-green-200 dark:border-gray-700 p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <img
                      src={brand.image || "/placeholder.svg"}
                      alt={brand.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = "none"
                        target.nextElementSibling!.classList.remove("hidden")
                      }}
                    />
                    <div className="w-full h-full bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center hidden">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{brand.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{brand.count} ta model</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Products View */}
      {currentView === "products" && (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <aside className="lg:w-1/4">
            <ProductFilters onFilterChange={handleFilterChange} />
          </aside>

          <main className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {brands.find((b) => b.value === selectedBrand)?.name} mahsulotlari
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Jami {filteredProducts.length} ta mahsulot</p>
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
                viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"
              }`}
            >
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} showOnlyNameAndPrice={true} />
              ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400 text-lg">Hech qanday mahsulot topilmadi</p>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  )
}
