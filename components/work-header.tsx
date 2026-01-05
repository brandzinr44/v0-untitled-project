"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const categories = [
  { name: "ALL", count: 24 },
  { name: "ECOMMERCE", count: 8 },
  { name: "FOOD & BEVERAGE", count: 2 },
  { name: "REAL ESTATE", count: 2 },
  { name: "HEALTH & WELLNESS", count: 6 },
  { name: "HOSPITALITY & TRAVEL", count: 2 },
  { name: "TRANSPORT", count: 1 },
  { name: "TECH", count: 4 },
  { name: "FASHION & LIFESTYLE", count: 4 },
  { name: "FASHION APPARELS", count: 1 },
  { name: "BEAUTY & CARE", count: 4 },
  { name: "MANUFACTURING", count: 2 },
  { name: "ENTERTAINMENT", count: 3 },
]

interface WorkHeaderProps {
  onCategoryChange?: (category: string) => void
  title?: string
  showFilters?: boolean
  subtitle?: string
  tagline?: string
  location?: string
}

export function WorkHeader({
  onCategoryChange,
  title = "Our Work",
  showFilters = true,
  subtitle,
  tagline,
  location,
}: WorkHeaderProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [animatedLetters, setAnimatedLetters] = useState<boolean[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)
  const fullText = title

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedLetters([])
          fullText.split("").forEach((_, index) => {
            setTimeout(() => {
              setAnimatedLetters((prev) => [...prev, true])
            }, index * 80)
          })
        } else {
          setAnimatedLetters(new Array(fullText.length).fill(false))
        }
      },
      { threshold: 0.2 },
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [fullText])

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setIsDropdownOpen(false)
    onCategoryChange?.(categoryName)
  }

  return (
    <div className="bg-background text-chart-5 font-sans pt-5 lg:pt-10 pb-4 px-1 px-3 lg:px-8">
      <div className="max-w-full mx-auto">
        <div className="mb-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
          <h1
            ref={titleRef}
            className="text-[72px] md:text-[90px] lg:text-[176px] font-regular tracking-tighter overflow-hidden max-w-full"
          >
            {fullText.split("").map((letter, index) => (
              <span
                key={index}
                className={`inline-block ${index === 3 ? "mr-1" : ""}`}
                style={{
                  opacity: animatedLetters[index] ? 1 : 0,
                  transform: animatedLetters[index] ? "translateY(0)" : "translateY(24px)",
                  transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          {(tagline || location) && (
            <div className="hidden lg:flex flex-col items-start justify-center gap-4 pt-25 min-w-[400px]">
              {tagline && (
                <p className="text-chart-5 text-[16px] font-regular leading-relaxed text-left max-w-[380px]">{tagline}</p>
              )}
              {location && (
                <div className="flex items-center gap-4">
                  <p className="text-chart-5 text-[16px] font-regular">{location}</p>
                  <motion.svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <line x1="12" y1="2" x2="12" y2="24" stroke="chart-5" strokeWidth="1.5" strokeLinecap="round" />
                    <path
                      d="M7 19L12 24L17 19"
                      stroke="chart-5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>
              )}
            </div>
          )}
        </div>

        {(tagline || location) && (
          <div className="lg:hidden flex flex-col gap-3 mt-0 mb-8">
            {tagline && <p className="text-chart-5 text-[14px] font-regular leading-relaxed">{tagline}</p>}
            {location && (
              <div className="flex items-center justify-between">
                <p className="text-chart-5/80 text-[12px] font-regular">{location}</p>
                <motion.svg
                  width="20"
                  height="28"
                  viewBox="0 0 24 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ y: 0 }}
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <line x1="12" y1="2" x2="12" y2="24" stroke="chart-5" strokeWidth="1.5" strokeLinecap="round" />
                  <path
                    d="M7 19L12 24L17 19"
                    stroke="chart-5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </div>
            )}
          </div>
        )}

        {showFilters && (
          <>
            <div className="lg:hidden mb-0">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-6 py-3 rounded-lg border border-white/30 text-white text-left flex items-center justify-between hover:opacity-80 transition-opacity"
                >
                  <span className="font-medium">{selectedCategory}</span>
                  <svg
                    className={`w-5 h-5 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/30 rounded-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="px-6 py-3 text-sm text-white/60 border-b border-white/10">Filter by Category</div>
                    <div className="max-h-96 overflow-y-auto">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => handleCategoryClick(category.name)}
                          className="w-full px-6 py-3 text-left text-white hover:opacity-80 transition-opacity flex items-center justify-between"
                        >
                          <span className="font-light">{category.name}</span>
                          {selectedCategory === category.name && (
                            <svg
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-6 gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`px-4 py-3 rounded-full font-regular text-sm transition-opacity flex items-center justify-center gap-2 whitespace-nowrap ${
                    selectedCategory === category.name
                      ? "bg-white text-black hover:opacity-80"
                      : "border border-black/30 text-black hover:opacity-80"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
