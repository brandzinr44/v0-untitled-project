"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What services does your agency provide?",
    answer:
      "Our branding agency offers brand strategy, logo design, visual identity development, brand guidelines, and marketing collateral to establish and elevate your brand.",
  },
  {
    question: "How does your branding process work?",
    answer:
      "We begin with discovery and strategy, move into design concepts, gather your feedback through revisions, and finalize with brand guidelines delivery.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Most branding projects take 4-8 weeks depending on scope and complexity. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "How much does branding cost?",
    answer:
      "Our branding packages range from $3,000 to $15,000+ depending on the scope. We customize quotes based on your specific needs and goals.",
  },
  {
    question: "Can I see examples of your past work?",
    answer:
      "Yes, we maintain a portfolio of our best work on our website. Each project showcases our process and the results we've delivered for our clients.",
  },
  {
    question: "Do you offer logo design only?",
    answer:
      "While logo design is our specialty, we offer comprehensive branding services including identity systems, brand guidelines, and marketing materials.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background text-chart-5 py-20 px-3 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-black/5 to-black/0 rounded-full blur-3xl opacity-0 animate-pulse"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-tl from-black/5 to-black/0 rounded-full blur-3xl opacity-0 animate-pulse"></div>

      <div className="lg:max-w-full mx-auto relative z-10">
        <h2
          className="
            max-w-[280px]
            sm:max-w-md
            lg:max-w-3xl
            text-[36px]
            sm:text-[48px]
            lg:text-[96px]
            font-normal
            leading-none
            text-chart-5
            tracking-tight
            mb-6
          "
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-0 divide-y divide-chart-5/80">
          {faqs.map((faq, index) => (
            <div key={index} className="transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between hover:bg-chart-5/10 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-chart-5 text-left flex-1">{faq.question}</h3>
                <div
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <Plus className="w-5 h-5 text-chart-5" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 text-chart-5/80 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
