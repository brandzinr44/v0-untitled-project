"use client"

import { WorkHeader } from "@/components/work-header"
import { PageLoader } from "@/components/page-loader"
import Link from "next/link"

export default function PackagingClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-black text-white">
        <WorkHeader title="Packaging Design" showFilters={false} />

        <section className="py-20 px-3 md:px-8 border-b border-white/30">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-balance">
              Packaging Design That Sells and Stands Out
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-pretty">
              Your packaging is often the first physical interaction customers have with your brand. At lOZ!NR, we
              design packaging that catches eyes, communicates value, and drives purchase decisions. From concept to
              shelf, we create packaging solutions that protect your product while building brand identity and customer
              loyalty.
            </p>
          </div>
        </section>

        <section className="py-20 px-3 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Why Packaging Design Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "First Impression Impact",
                  description:
                    "Research shows consumers make purchasing decisions in seconds. Strategic packaging design captures attention and communicates quality before customers read a single word.",
                },
                {
                  title: "Shelf Competition",
                  description:
                    "In retail environments, packaging must compete for attention. Our designs ensure your product stands out while maintaining brand consistency across your product line.",
                },
                {
                  title: "Brand Storytelling",
                  description:
                    "Packaging tells your brand story. We integrate messaging, visuals, and materials to create an emotional connection that extends beyond the initial purchase.",
                },
                {
                  title: "Customer Loyalty",
                  description:
                    "Beautiful, functional packaging creates memorable unboxing experiences. These moments turn customers into advocates who share your product and recommend your brand.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-white/20 p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-3 md:px-8 border-t border-white/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Our Packaging Design Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1. Product & Market Analysis",
                  description:
                    "We analyze your product category, target audience, competitive packaging, retail environment, and regulatory requirements to inform our design strategy.",
                },
                {
                  step: "2. Concept Development",
                  description:
                    "We create multiple packaging concepts exploring different materials, structures, colors, and messaging approaches tailored to your brand and market position.",
                },
                {
                  step: "3. Structural & Graphic Design",
                  description:
                    "We develop the physical structure combined with compelling graphics, typography, and imagery that work together to create a cohesive, sellable package.",
                },
                {
                  step: "4. Prototyping & Testing",
                  description:
                    "We create physical prototypes and conduct testing to ensure functionality, visual impact, and performance in retail environments.",
                },
                {
                  step: "5. Production Preparation",
                  description:
                    "We prepare print-ready files, color specifications, and production guidelines ensuring accurate replication across all manufacturing processes.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-white/40 pl-6">
                  <h3 className="text-xl font-medium mb-2">{item.step}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-3 md:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">What's Included</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Product & market research",
                "Competitive packaging analysis",
                "Multiple design concepts",
                "Structural design (die lines)",
                "Brand-aligned graphics",
                "Typography optimization",
                "Color specification & matching",
                "4+ revision rounds",
                "Physical prototypes",
                "Production-ready files",
                "Print specifications & guidelines",
                "Ongoing production support",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-white/40">✓</span>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 px-3 md:px-8 border-t border-white/30 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Design Packaging That Converts</h2>
            <p className="text-lg text-white/70 mb-8">
              Let's create packaging that protects your product, attracts customers, and builds lasting brand loyalty.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              Start Your Project
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </PageLoader>
  )
}
