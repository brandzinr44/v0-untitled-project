"use client"
import { useState, useRef, useEffect } from "react"

interface Category {
  name: string
  count: number
}

interface WorkFiltersProps {
  categories: Category[]
  onFilterChange: (category: string) => void
  activeFilter: string
}

export function WorkFilters({ categories, onFilterChange, activeFilter }: WorkFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleSelect = (categoryName: string) => {
    onFilterChange(categoryName)
    setIsOpen(false)
  }

  const activeCategory = categories.find((c) => c.name === activeFilter)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  // Scroll active filter into view on mount
  useEffect(() => {
    if (scrollContainerRef.current && activeFilter) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-filter="${activeFilter}"]`)
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
      }
    }
  }, [activeFilter])

  return (
    <div className="py-1 px-3 md:px-6 lg:px-8">
      <div className="md:hidden" ref={dropdownRef}>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full px-4 py-4 rounded-lg border border-chart-5/20 bg-transparent hover:bg-chart-5/7 text-chart-5 flex items-center justify-between transition-all duration-500 overflow-hidden relative group ${
              isOpen ? "ring-2 ring-chart-5/20 border-chart-5/40" : ""
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-chart-5/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="font-semibold text-[13px] tracking-tight relative z-10 flex items-center gap-2">
             
              {/* Category Name: ektu boro size */}
    <span className="text-[14px]">
      {activeCategory?.name}
    </span>

    {/* Category Count: ektu chhoto size */}
    <span className="text-[10px] text-chart-5">
      [{activeCategory?.count}]
    </span>
    
  </span>
</button>

          <div
            className={`absolute top-[calc(100%+8px)] left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-[0.98] -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="bg-background border border-chart-5/10 rounded-2xl overflow-hidden">
              <div className="max-h-[70vh] overflow-y-auto py-2">
                {categories.map((category, index) => (
                  <button
                    key={category.name}
                    onClick={() => handleSelect(category.name)}
                    className={`w-full px-6 py-2 text-left transition-all duration-500 flex items-center justify-between relative group ${
                      activeFilter === category.name ? "bg-chart-5/5" : "hover:bg-chart-5/10"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                      transform: isOpen ? "translateY(0)" : "translateY(15px)",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-chart-5 transition-all duration-500 ease-out ${
                        activeFilter === category.name ? "h-6 opacity-100" : "group-hover:h-4 group-hover:opacity-40"
                      }`}
                    />

                    <span className="flex items-center gap-4 relative z-10 transition-transform duration-500">
                      <span
                        className={`text-[14px] font-medium tracking-tight transition-colors duration-300 ${
                          activeFilter === category.name ? "text-chart-5" : "text-chart-5 group-hover:text-chart-5"
                        }`}
                      >
                        {category.name}
                      </span>
                    </span>

                    <span
                      className={`text-[10px] font-mono transition-all duration-500 ${
                        activeFilter === category.name
                          ? "text-chart-5/60 scale-110"
                          : "text-chart-5/20 group-hover:text-chart-5/40"
                      }`}
                    >
                      
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Scroll Filters */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category, index) => (
              <button
                key={category.name}
                data-filter={category.name}
                onClick={() => onFilterChange(category.name)}
                onMouseEnter={() => setHoveredFilter(category.name)}
                onMouseLeave={() => setHoveredFilter(null)}
                className={`group relative px-6 py-3 rounded-full whitespace-nowrap transition-all duration-500 text-[14px] font-semibold border-2 flex-shrink-0 overflow-hidden ${
                  activeFilter === category.name
                    ? "bg-chart-5 border-chart-5 text-background "
                    : "bg-transparent border-chart-5/25 text-chart-5/60 hover:border-chart-5/60 hover:text-chart-5 hover:shadow-lg hover:shadow-chart-5/10"
                }`}
                style={{
                  animation: `slideUp 0.5s ease-out ${index * 50}ms both`,
                }}
              >
                <span
                  className={`absolute inset-0 bg-gradient-to-t from-chart-5 to-chart-5/90 transition-all duration-700 ease-out ${
                    hoveredFilter === category.name && activeFilter !== category.name
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                />

                {/* Shine effect on active */}
                {activeFilter === category.name && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-chart-5/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                )}

                {/* Content */}
                <span
                  className={`relative z-10 flex items-center gap-2.5 transition-colors duration-300 ${
                    hoveredFilter === category.name && activeFilter !== category.name ? "text-background" : ""
                  }`}
                >
                  <span>{category.name}</span>
                  <span
                    className={`text-[12px] px-2 py-0.5 rounded-full transition-all duration-300 ${
                      activeFilter === category.name
                        ? "bg-background/15 text-background/70"
                        : hoveredFilter === category.name
                          ? "bg-background/15 text-background/70"
                          : "bg-chart-5/10 text-chart-5/40"
                    }`}
                  >
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
