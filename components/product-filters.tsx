"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Filter, X, ChevronDown } from "lucide-react"

interface FilterProps {
  onFilterChange: (filters: any) => void
}

export function ProductFilters({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 20000000,
    sortBy: "name",
  })

  const [priceRange, setPriceRange] = useState([0, 20000000])
  const [isOpen, setIsOpen] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)

  const sortOptions = [
    { value: "name", label: "Nom bo'yicha" },
    { value: "brand", label: "Brend bo'yicha" },
    { value: "price-low", label: "Arzon narxdan" },
    { value: "price-high", label: "Qimmat narxdan" },
  ]

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values)
    const newFilters = {
      ...filters,
      minPrice: values[0],
      maxPrice: values[1],
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const defaultFilters = {
      minPrice: 0,
      maxPrice: 20000000,
      sortBy: "name",
    }
    setFilters(defaultFilters)
    setPriceRange([0, 20000000])
    onFilterChange(defaultFilters)
  }

  const hasActiveFilters = priceRange[0] > 0 || priceRange[1] < 20000000

  // Close filter when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
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
    <div className="space-y-4 animate-slide-up">
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <Card className="border-green-100 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-green-700 dark:text-green-400">Narx oralig'i</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={handlePriceChange}
                max={20000000}
                min={0}
                step={100000}
                className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-green-100 [&>span:first-child]:dark:bg-gray-700 [&>span:first-child>span]:bg-green-600 [&>span:first-child>span]:dark:bg-green-500 [&_[role=slider]]:border-2 [&_[role=slider]]:border-green-600 [&_[role=slider]]:bg-white [&_[role=slider]]:dark:bg-gray-800 [&_[role=slider]]:dark:border-green-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:rounded-full [&_[role=slider]]:shadow-md [&_[role=slider]]:hover:scale-110 [&_[role=slider]]:transition-transform"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-sm text-gray-600 dark:text-gray-400">Min narx</Label>
                <Input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                  className="border-green-200 focus:border-green-500 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="0"
                />
              </div>
              <div>
                <Label className="text-sm text-gray-600 dark:text-gray-400">Max narx</Label>
                <Input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange([priceRange[0], Number.parseInt(e.target.value) || 20000000])}
                  className="border-green-200 focus:border-green-500 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="20000000"
                />
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{priceRange[0].toLocaleString()} so'm</span>
              <span>{priceRange[1].toLocaleString()} so'm</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-green-700 dark:text-green-400">Tartiblash</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
              <SelectTrigger className="border-green-200 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                {sortOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="dark:text-white dark:hover:bg-gray-700"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearFilters}
            className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950 hover:scale-105 transition-all duration-300 bg-transparent dark:bg-transparent"
          >
            <X className="h-4 w-4 mr-2" />
            Filtrlarni tozalash
          </Button>
        )}
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between border-green-200 text-green-600 hover:bg-green-50 dark:border-gray-600 dark:text-green-400 dark:hover:bg-gray-800 h-9 text-sm bg-white dark:bg-gray-800"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-3 w-3" />
            <span className="text-sm">Filtrlar</span>
            {hasActiveFilters && (
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 text-xs px-1.5 py-0.5"
              >
                Faol
              </Badge>
            )}
          </div>
          <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      {/* Mobile Filter Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden animate-fade-in">
          <div
            ref={filterRef}
            className={`fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 overflow-y-auto animate-slide-in-left ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Filtrlar</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-1.5">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <h3 className="text-base font-semibold text-green-700 dark:text-green-400 mb-3">Narx oralig'i</h3>
                  <div className="space-y-4">
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={handlePriceChange}
                        max={20000000}
                        min={0}
                        step={100000}
                        className="w-full [&>span:first-child]:h-2 [&>span:first-child]:bg-green-100 [&>span:first-child]:dark:bg-gray-700 [&>span:first-child>span]:bg-green-600 [&>span:first-child>span]:dark:bg-green-500 [&_[role=slider]]:border-2 [&_[role=slider]]:border-green-600 [&_[role=slider]]:bg-white [&_[role=slider]]:dark:bg-gray-800 [&_[role=slider]]:dark:border-green-500 [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:rounded-full [&_[role=slider]]:shadow-md [&_[role=slider]]:hover:scale-110 [&_[role=slider]]:transition-transform"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-sm text-gray-600 dark:text-gray-400">Min narx</Label>
                        <Input
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) => handlePriceChange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                          className="border-green-200 focus:border-green-500 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white h-8"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600 dark:text-gray-400">Max narx</Label>
                        <Input
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) =>
                            handlePriceChange([priceRange[0], Number.parseInt(e.target.value) || 20000000])
                          }
                          className="border-green-200 focus:border-green-500 text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white h-8"
                          placeholder="20000000"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{priceRange[0].toLocaleString()} so'm</span>
                      <span>{priceRange[1].toLocaleString()} so'm</span>
                    </div>
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="text-base font-semibold text-green-700 dark:text-green-400 mb-3">Tartiblash</h3>
                  <Select value={filters.sortBy} onValueChange={(value) => handleFilterChange("sortBy", value)}>
                    <SelectTrigger className="border-green-200 focus:border-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      {sortOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="dark:text-white dark:hover:bg-gray-700"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950 h-9 bg-transparent dark:bg-transparent"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Filtrlarni tozalash
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
