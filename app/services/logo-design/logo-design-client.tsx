"use client"

import { WorkHeader } from "@/components/work-header"
import { PageLoader } from "@/components/page-loader"
import Link from "next/link"

export default function LogoDesignClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-black text-white">
        {/* Removed UnifiedHeader */}
        <WorkHeader title="Logo Design" showFilters={false} />

        <section className="py-20 px-3 md:px-8 border-b border-white/30">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-balance">
              Professional Logo Design That Defines Your Brand
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-pretty">
              Your logo is the visual cornerstone of your brand identity. At lOZ!NR, we create custom logos that
              transcend trends, resonate with your audience, and communicate your brand's core values with clarity and
              impact. Our logo design process combines strategic thinking with creative excellence to deliver marks that
              work across every platform and application.
            </p>
          </div>
        </section>

        <section className="py-20 px-3 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Why Your Logo Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "First Impression",
                  description:
                    "Your logo is often the first touchpoint with potential customers. A professionally designed logo creates an immediate sense of trust and professionalism that drives engagement and conversion.",
                },
                {
                  title: "Brand Recognition",
                  description:
                    "Memorable logos increase brand recall by up to 80%. Our designs ensure your mark stands out in a crowded marketplace, making your business instantly recognizable.",
                },
                {
                  title: "Market Differentiation",
                  description:
                    "A unique logo sets you apart from competitors. We research your industry to ensure your mark is distinctive, strategic, and positioned for long-term success.",
                },
                {
                  title: "Versatile & Timeless",
                  description:
                    "Great logos work everywhere—from business cards to billboards. Our designs are scalable, adaptable, and built to remain relevant for decades, not just seasons.",
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
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Our Logo Design Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1. Discovery & Strategy",
                  description:
                    "We begin by understanding your brand, market position, target audience, and competitive landscape. This strategic foundation ensures your logo is both creative and commercially effective.",
                },
                {
                  step: "2. Concept Development",
                  description:
                    "Our designers explore multiple creative directions, testing various styles, symbols, and typographic approaches. We present diverse concepts that represent different strategic angles.",
                },
                {
                  step: "3. Refinement & Feedback",
                  description:
                    "Based on your input, we refine the most promising concepts, making adjustments to color, form, and composition. Multiple rounds of refinement ensure the final direction perfectly captures your vision.",
                },
                {
                  step: "4. Final Design & Variations",
                  description:
                    "Once approved, we create your final logo in multiple formats and variations—color, black and white, horizontal, vertical—ensuring versatility across all applications.",
                },
                {
                  step: "5. Brand Guidelines",
                  description:
                    "We provide comprehensive brand guidelines documenting proper logo usage, spacing, color specifications, and clear/space requirements to maintain consistency across all touchpoints.",
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
                "Initial brand discovery session",
                "Competitive analysis",
                "Unlimited concept exploration",
                "5 revision rounds per concept",
                "Final logo in all formats (AI, PDF, PNG, SVG)",
                "Color variations and specifications",
                "Black/white and grayscale versions",
                "Brand guidelines document",
                "Logo usage recommendations",
                "Lifetime support & updates",
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
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Create Your Signature Logo?</h2>
            <p className="text-lg text-white/70 mb-8">
              Let's discuss your vision and create a logo that defines your brand for years to come.
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
