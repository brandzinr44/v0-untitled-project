"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

interface DigitalProduct {
  id: string
  title: string
  description: string
  price: string
  image: string
  profileImage: string
  rating: number
  ctaText: string
  ctaLink: string
}

const products: DigitalProduct[] = [
  {
    id: "1",
    title: "Figma Brand Identity Bundle",
    description: "Get Access to All My Brand Identity Figma Templates & Paid Community",
    price: "$499",
    image: "/professional-studio-setup-with-content-creator.jpg",
    profileImage: "/professional-headshot.png",
    rating: 5.0,
    ctaText: "Get offer",
    ctaLink: "#",
  },
  {
    id: "2",
    title: "Logo Design Template",
    description: "Professional logo design template pack with 50+ customizable variations and vector files.",
    price: "$149",
    image: "/logo-design-workspace.jpg",
    profileImage: "/designer-portrait.png",
    rating: 4.8,
    ctaText: "Get Now",
    ctaLink: "#",
  },
  {
    id: "3",
    title: "Website Brand Guide",
    description: "Comprehensive digital brand guidelines for web implementation with CSS variables and design tokens.",
    price: "$199",
    image: "/web-design-screen.jpg",
    profileImage: "/web-designer.png",
    rating: 4.9,
    ctaText: "Get Now",
    ctaLink: "#",
  },
  {
    id: "4",
    title: "Social Media Kit",
    description: "Complete social media brand kit with templates, color palettes, and ready-to-use designs.",
    price: "$179",
    image: "/social-media-content.png",
    profileImage: "/content-creator-workspace.png",
    rating: 5.0,
    ctaText: "Get Now",
    ctaLink: "#",
  },
]

interface DigitalProductsProps {
  products?: DigitalProduct[]
}

export function DigitalProducts({ products: customProducts }: DigitalProductsProps) {
  const [visibleProducts, setVisibleProducts] = useState<boolean[]>([])
  const productRefsArray = useRef<(HTMLDivElement | null)[]>([])
  const productsToDisplay = customProducts || products

  useEffect(() => {
    setVisibleProducts([])
    productRefsArray.current = []

    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = productRefsArray.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleProducts((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    productRefsArray.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [productsToDisplay])

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {productsToDisplay.map((product, index) => {
          const productVisible = visibleProducts[index] || false

          return (
            <div
              key={product.id}
              ref={(el) => {
                productRefsArray.current[index] = el
              }}
              className={`group overflow-hidden transition-all duration-1000 transform flex flex-col h-full rounded-2xl border border-border bg-black ${
                productVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-full overflow-hidden relative transition-all duration-300 aspect-video bg-secondary">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col bg-neutral-900 p-6 md:p-8">
                {/* Profile and Title Section */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Profile Image */}
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-500 bg-orange-600">
                    <img
                      src={product.profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title and Description */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg md:text-xl leading-tight mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm leading-snug">{product.description}</p>
                  </div>
                </div>

                {/* Price and Rating */}
                <div className="flex items-center gap-4 mb-6 pt-4">
                  <span className="text-blue-500 text-2xl md:text-3xl font-bold">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-semibold">{product.rating}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={product.ctaLink}
                  className="w-full py-3 px-4 rounded-full bg-blue-600 text-white font-semibold text-center transition-all duration-300 hover:bg-blue-700 active:scale-95"
                >
                  {product.ctaText}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export { products }
