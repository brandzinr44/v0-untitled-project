"use client"

import { WorkHeader } from "@/components/work-header"
import { PageLoader } from "@/components/page-loader"
import Link from "next/link"

export default function BrandIdentityClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-black text-white">
        {/* Removed UnifiedHeader */}
        <WorkHeader title="Brand Identity" showFilters={false} />

        <section className="py-20 px-3 md:px-8 border-b border-white/30">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-balance">
              Build a Complete Visual Identity That Resonates
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed text-pretty">
              Brand identity extends far beyond a logo. It's the complete visual language that communicates who you are,
              what you stand for, and why people should care. At lOZ!NR, we design comprehensive brand identities that
              create cohesive, memorable experiences across every touchpoint—from packaging to digital platforms to
              customer interactions.
            </p>
          </div>
        </section>

        <section className="py-20 px-3 md:px-8 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Elements of Strong Brand Identity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Visual Language",
                  description:
                    "A cohesive system of colors, typography, and visual elements that work together to create instant brand recognition.",
                },
                {
                  title: "Brand Voice",
                  description:
                    "Consistent messaging tone and personality that reflects your values and speaks directly to your target audience.",
                },
                {
                  title: "Design System",
                  description:
                    "Comprehensive guidelines ensuring consistency across all platforms, from print materials to digital interfaces.",
                },
                {
                  title: "Brand Story",
                  description:
                    "The authentic narrative that connects your mission, values, and offerings to create emotional resonance with customers.",
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
            <h2 className="text-3xl md:text-4xl font-medium mb-8">Our Brand Identity Process</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1. Brand Workshop & Discovery",
                  description:
                    "We conduct in-depth workshops to understand your mission, vision, values, target audience, and competitive positioning. This foundation informs every design decision.",
                },
                {
                  step: "2. Strategy & Positioning",
                  description:
                    "We develop your brand strategy, defining your unique value proposition, brand personality, and key messaging pillars.",
                },
                {
                  step: "3. Visual Direction Development",
                  description:
                    "Our designers explore multiple creative directions for your brand identity, testing color palettes, typography combinations, and visual styles.",
                },
                {
                  step: "4. Design System Creation",
                  description:
                    "We create a comprehensive design system including logo variations, color codes, typography rules, imagery guidelines, and component specifications.",
                },
                {
                  step: "5. Comprehensive Brand Guidelines",
                  description:
                    "We provide detailed brand guidelines documenting every element of your identity, ensuring consistent application across all touchpoints and platforms.",
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
                "Brand strategy workshop",
                "Competitive analysis",
                "Primary logo design",
                "Logo variations (horizontal, vertical, icon)",
                "Complete color palette with specifications",
                "Primary & secondary typography",
                "Brand personality guidelines",
                "Imagery & photography direction",
                "Icon set (20+ custom icons)",
                "Pattern & texture library",
                "50+ page comprehensive brand guide",
                "Design files in all formats",
                "Lifetime updates & support",
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
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Build Your Complete Brand Identity</h2>
            <p className="text-lg text-white/70 mb-8">
              Let's create a cohesive visual language that authentically represents your brand and connects with your
              audience.
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
