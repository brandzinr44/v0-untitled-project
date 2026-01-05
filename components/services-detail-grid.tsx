"use client"
import Link from "next/link"

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  image: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Logo Design",
    description:
      "No matter the size of your brand, we design logos that are clear, unique and built to last. Our process is thoughtful and collaborative. We dive into your brand, understand what makes it special and turn that into a logo that looks great and feels right. We make sure it works across everything - your website, packaging, social media and more.",
    features: [
      "Discover and brand alignment",
      "Moodboard and creative direction",
      "Typography and symbol design",
      "Icon and wordmark variants",
      "Usage guidelines and file export",
      "Logo animation (optional)",
    ],
    image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
  },
  {
    id: 2,
    title: "Brand Identity",
    description:
      "A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between. Building a complete brand identity that resonates with your audience and stands out in the market. From color palettes to typography, we ensure consistency across all touchpoints.",
    features: [
      "Brand strategy and positioning",
      "Visual identity system",
      "Color palette and typography",
      "Brand guidelines documentation",
      "Collateral design templates",
      "Brand voice and messaging",
    ],
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2007.jpg",
  },
  {
    id: 3,
    title: "Packaging Design",
    description:
      "Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect. Every element is carefully considered to reflect your brand and attract your target audience. From concept to production, we handle every detail.",
    features: [
      "Package concept development",
      "Structural design planning",
      "Graphic design and layout",
      "Material and finish selection",
      "Production-ready files",
      "Brand consistency application",
    ],
    image: "/packaging-design.jpg",
  },
]

function ServiceSection({ service, isLast }: { service: Service; isLast: boolean }) {
  return (
    <>
      {/* Desktop Layout - 3 column grid */}
      <div className="hidden lg:grid bg-background" style={{ gridTemplateColumns: "20% 40% 40%" }}>
        <div className="p-9 md:p-7 flex flex-col justify-start" style={{ gridColumn: "1 / 2" }}>
          <div className="flex items-start gap-4 md:gap-2">
            <span className="text-[60px] font-medium tracking-tight text-chart-5 leading-none mt-[-4px]">
              {String(service.id).padStart(2, "0")}
            </span>
            <span className="text-[16px] lg:text-[16px] text-chart-5 uppercase tracking-tight font-medium pt-7">
              {service.title}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-8 flex flex-col" style={{ gridColumn: "2 / 3" }}>
          <div className="mb-12">
            <p className="text-lg lg:text-[16px] uppercase leading-relaxed text-chart-5 max-w-lg">
              {service.description}
            </p>
          </div>

          <div className="flex-1 bg-[#0b0b0b] overflow-hidden aspect-[16/9]">
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="p-8 md:p-5 flex flex-col justify-between" style={{ gridColumn: "3 / 4" }}>
          <div>
            <ul className="divide-y divide-[#888]">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm md:text-base uppercase text-chart-5 flex gap-3 leading-none items-start py-4"
                >
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contact" className="mt-3 w-full bg-chart-5 text-background py-4 px-6 font-medium text-center">
            Let's build together
          </Link>
        </div>
      </div>

      {/* Mobile Layout - Vertical stack */}
      <div className="lg:hidden bg-background flex flex-col">
        {/* Title and Number */}
        <div className="px-3 p-8 flex flex-col justify-start">
          <div className="flex items-start gap-4">
            <span className="text-[60px] font-medium tracking-tight leading-none text-chart-5 mt-[-4px]">
              {String(service.id).padStart(2, "0")}
            </span>
            <span className="text-[16px] uppercase tracking-tight text-chart-5 font-medium pt-7">{service.title}</span>
          </div>
        </div>

        {/* Description */}
        <div className="px-3 p-8 pt-0">
          <p className="text-lg uppercase leading-relaxed text-chart-5">{service.description}</p>
        </div>

        {/* Image */}
        <div className="bg-chart-5/10 overflow-hidden aspect-[16/9] mx-3">
          <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
        </div>

        {/* CTA Button */}
        <div className="px-3 p-8 pt-8">
          <Link href="/contact" className="block bg-chart-5 text-background py-4 px-8 font-medium text-center w-full">
            Let's build together
          </Link>
        </div>
      </div>

      {/* Increased spacing between services */}
      {!isLast && <div className="h-px bg-chart-5/20 px-0 my-20" />}
    </>
  )
}

export function ServicesDetailGrid() {
  return (
    <div className="bg-background text-secondary min-h-screen">
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} isLast={index === services.length - 1} />
      ))}

      {/* Styles */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
