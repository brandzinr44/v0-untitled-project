"use client"

import { WorkHeader } from "@/components/work-header"
import { PageLoader } from "@/components/page-loader"
import Link from "next/link"

export default function RebrandingClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-black text-white">
        {/* Removed UnifiedHeader */}
        <WorkHeader title="Rebranding" showFilters={false} />

        <section className="py-20 px-3 md:px-8 border-b border-white/30">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-balance">
              Strategic Rebranding for Market Growth and Relevance
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-pretty">
              Markets evolve. Companies grow. Audiences change. At lOZ!NR, we specialize in strategic rebranding that
              refreshes your visual identity, realigns your messaging, and repositions your brand for the next chapter
              of growth. Whether you're modernizing a legacy brand or pivoting to new markets, we guide you through
              every step of the rebranding journey.
            </p>
          </div>
        </section>

        <section className="py-20 px-3 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">When Rebranding Makes Sense</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Market Evolution",
                  description:
                    "Your market has shifted. A rebrand helps you stay relevant, communicate new capabilities, and appeal to emerging customer segments.",
                },
                {
                  title: "Company Growth",
                  description:
                    "You've outgrown your original brand. A rebrand reflects your expanded offerings, new positioning, and evolved company culture.",
                },
                {
                  title: "Acquisition or Merger",
                  description:
                    "Combined companies need unified brand identity. We create cohesive brands that honor legacy while establishing new direction.",
                },
                {
                  title: "Competitive Repositioning",
                  description:
                    "Your competitors are winning. Strategic rebranding helps you differentiate, communicate unique value, and capture market share.",
                },
                {
                  title: "Legacy to Modern",
                  description:
                    "Traditional brands need modernization. We refresh heritage brands while preserving equity and customer loyalty.",
                },
                {
                  title: "Internal Alignment",
                  description:
                    "Your brand doesn't reflect company culture. Rebranding aligns external identity with internal values and attracts right talent.",
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
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Our Rebranding Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1. Brand Audit & Analysis",
                  description:
                    "We conduct comprehensive analysis of your current brand, market position, audience perception, competitive landscape, and internal culture.",
                },
                {
                  step: "2. Strategy & Positioning",
                  description:
                    "We develop new brand strategy that articulates your evolved purpose, differentiators, and market positioning for the next growth phase.",
                },
                {
                  step: "3. Identity Design",
                  description:
                    "We design new visual identity—logo, colors, typography, imagery—that authentically represents your refreshed brand positioning.",
                },
                {
                  step: "4. Implementation Planning",
                  description:
                    "We create detailed implementation roadmap covering timeline, touchpoints, employee communication, and customer messaging strategy.",
                },
                {
                  step: "5. Launch & Transition Support",
                  description:
                    "We guide your launch, manage communications, and provide ongoing support ensuring smooth transition across all brand touchpoints and audiences.",
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
                "Current brand audit",
                "Market & competitive analysis",
                "Stakeholder interviews",
                "Brand strategy workshop",
                "Positioning strategy",
                "New logo design",
                "Refreshed color palette",
                "Updated typography",
                "Brand guidelines (new)",
                "Implementation roadmap",
                "Launch communication strategy",
                "Transition support",
                "Ongoing brand consulting",
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
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Rebrand for Growth?</h2>
            <p className="text-lg text-white/70 mb-8">
              Let's evolve your brand strategy and create a refreshed identity that positions you for the next chapter
              of success.
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
