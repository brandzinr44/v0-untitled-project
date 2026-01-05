"use client"
import { Star, ArrowUpRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { PageLoader } from "@/components/page-loader"

interface Product {
  id: number
  name: string
  description: string
  price: string
  priceNumber: number
  image: string
  features: string[]
  category: "starter" | "professional" | "enterprise"
  popular?: boolean
  deliveryTime?: string
  paymentLink?: string
  profileImage?: string
  rating?: number
}

const products: Product[] = [
  {
    id: 0,
    name: "Brand Guidelines Template",
    description: "Professional brand guidelines template ready to customize and use",
    price: "$99",
    priceNumber: 99,
    image: "https://rm9cehwjzivcimqc.public.blob.vercel-storage.com/ddsf.avif",
    features: ["Ready to Use", "Fully Editable", "Professional Design", "Quick Setup"],
    category: "starter",
    deliveryTime: "Instant",
    paymentLink: "https://adnanakif.gumroad.com/l/brandguidelinestamplate",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 1,
    name: "Logo Design Package",
    description: "Perfect for startups and small businesses needing a professional brand mark",
    price: "Free",
    priceNumber: 0,
    image: "/professional-logo-design-variations.jpg",
    features: ["5 Concepts", "Unlimited Revisions", "All Formats", "Source Files"],
    category: "starter",
    deliveryTime: "5-7 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Social Media Kit",
    description: "Professionally designed templates for all social media platforms",
    price: "$299",
    priceNumber: 299,
    image: "/social-media-kit-templates.jpg",
    features: ["Templates", "Brand Consistency", "Ready to Use", "Editable Files"],
    category: "starter",
    deliveryTime: "3-5 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Brand Identity Kit",
    description: "Complete branding package with everything you need for brand consistency",
    price: "$599",
    priceNumber: 599,
    image: "/brand-identity-design-system.png",
    features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
    category: "professional",
    popular: true,
    deliveryTime: "10-14 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Website Branding",
    description: "Complete web design system with UI kit and brand application guidelines",
    price: "$899",
    priceNumber: 899,
    image: "/website-design-brand-guidelines.jpg",
    features: ["UI Kit", "Web Design", "Brand Guidelines", "Asset Pack"],
    category: "professional",
    deliveryTime: "14-21 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 5,
    name: "Packaging Design",
    description: "Premium packaging design for physical products with mockups",
    price: "$699",
    priceNumber: 699,
    image: "/packaging-design-mockup.jpg",
    features: ["Package Design", "Mockups", "Specifications", "Print Ready"],
    category: "professional",
    deliveryTime: "10-14 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
  {
    id: 6,
    name: "Brand Strategy",
    description: "Comprehensive brand strategy consultation and complete documentation",
    price: "$1,299",
    priceNumber: 1299,
    image: "/brand-strategy-consultation.jpg",
    features: ["Strategy Session", "Market Research", "Brand Positioning", "Documentation"],
    category: "enterprise",
    deliveryTime: "21-30 days",
    profileImage: "https://qms1staoyjyffvwr.public.blob.vercel-storage.com/Adnan.jpg",
    rating: 5.0,
  },
]

function ProductCard({ product }: { product: Product }) {
  const whopLink = "https://whop.com/adnanakif"

  const handleViewDetails = () => {
    window.open(whopLink, "_blank")
  }

  const purchaseText = "Purchase"
  const letters = purchaseText.split("")

  return (
    <div className="group relative flex flex-col h-full bg-chart-5/80 border border-chart-5/10 hover:border-chart-5/20 transition-all duration-500 overflow-hidden">
      <div
        className="relative overflow-hidden aspect-[4/3] w-full cursor-pointer bg-background/40"
        onClick={handleViewDetails}
      >
        <Image
          src={product.image || "/placeholder.svg?height=400&width=640&query=design package"}
          alt={product.name}
          width={640}
          height={480}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
      </div>

      <div className="flex-1 flex flex-col p-6 lg:p-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-background font-medium text-xl lg:text-2xl leading-tight mb-2 tracking-tight">
              {product.name}
            </h3>

            <div className="flex items-center gap-4">
              <span className="text-background text-xl lg:text-2xl font-light tracking-tight">{product.price}</span>
              {product.rating && (
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5">
                  <Star className="w-3 h-3 fill-[#ff3b00] text-[#ff3b00]" />
                  <span className="text-background/70 font-medium text-xs">{product.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <Button
          className="cta-button w-full bg-chart-5 text-background ransition-all duration-300 mt-auto py-6 rounded-none text-base font-medium tracking-tight group/btn overflow-hidden relative border-none"
          onClick={handleViewDetails}
        >
          <span className="cta-button-text relative z-10 flex items-center justify-center gap-2">
            <span className="animated-text-link flex items-center gap-2">
              <span className="text-swap-container h-5 overflow-hidden relative flex">
                <span className="text-layer text-layer-primary relative flex transition-transform duration-500 group-hover/btn:-translate-y-full">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block transition-transform duration-500 ease-out"
                      style={{ transitionDelay: `${index * 0.02}s` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
                <span className="text-layer text-layer-secondary absolute inset-0 flex transition-transform duration-500 translate-y-full group-hover/btn:translate-y-0">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block transition-transform duration-500 ease-out"
                      style={{ transitionDelay: `${index * 0.02}s` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </span>
          </span>
        </Button>
      </div>
    </div>
  )
}

export default function StorePage() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-background">
        <section className="py-20 px-3 sm:px-6 lg:px-8">
          <div className="max-w-full mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageLoader>
  )
}
