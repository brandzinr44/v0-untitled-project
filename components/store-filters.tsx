"use client"

import { ChevronDown, Check } from "lucide-react"
import { useState } from "react"

interface Category {
  name: string
  count: number
}

interface StoreFiltersProps {
  categories: Category[]
  onFilterChange: (category: string) => void
  activeFilter: string
}

export function StoreFilters({ categories, onFilterChange, activeFilter }: StoreFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (categoryName: string) => {
    onFilterChange(categoryName)
    setIsOpen(false)
  }

  const activeCategory = categories.find((c) => c.name === activeFilter)

  return (
    <div className="py-0 md:py-0 px-3 md:px-6 lg:px-8">
      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 rounded-lg border border-text/30 text-text flex items-center justify-between hover:border-text/60 transition-all duration-300 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <span className="font-medium">
              {activeCategory?.name} ({activeCategory?.count})
            </span>
            <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-text/30 rounded-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-4 border-b border-text/20">
                <p className="text-sm text-text/70 font-medium">Filter by Package</p>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleSelect(category.name)}
                    className="w-full px-4 py-3 text-left hover:bg-chart-4 transition-colors duration-200 flex items-center justify-between group"
                  >
                    <span className="text-text font-medium">
                      {category.name} <span className="text-[12px] text-text/70">({category.count})</span>
                    </span>
                    {activeFilter === category.name && <Check size={18} className="text-foreground" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop horizontal filters */}
      <div className="hidden md:flex flex-wrap gap-3 gap-y-2 max-w-full">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onFilterChange(category.name)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full whitespace-nowrap transition-all duration-300 text-sm md:text-[16px] font-regular border-2 ${
              activeFilter === category.name
                ? "bg-primary border-transparent text-background hover:border-primary"
                : "bg-transparent border-accent text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>
    </div>
  )
}
