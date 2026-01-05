"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ServiceCards } from "./service-cards"

function AnimatedLink({
  text,
  href,
  showArrow = false,
  showPrice = false,
}: { text: string; href: string; showArrow?: boolean; showPrice?: boolean }) {
  const letters = text.split("")

  return (
    <Link
      href={href}
      className="flex items-center justify-between w-full max-w-lg bg-chart-5/10 px-4 md:px-0 py-3 md:py-4 border-t border-chart-5 text-chart-5 font-medium text-lg md:text-xl hover:border-[#ff3b00] hover:text-[#ff3b00] hover:bg-[#ff3b00]/20 transition-all duration-300 ease-out group cursor-pointer"
    >
      <span className="flex items-center gap-2">
        <span className="relative overflow-hidden inline-flex">
          {/* Primary text - slides down on hover */}
          <span className="flex">
            {letters.map((letter, index) => (
              <span
                key={`primary-${index}`}
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-y-full"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
          {/* Secondary text - slides in from top */}
          <span className="flex absolute top-0 left-0">
            {letters.map((letter, index) => (
              <span
                key={`secondary-${index}`}
                className="inline-block -translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0"
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </span>
        
      </span>
      {showArrow && (
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-chart-5 transition-transform duration-300 group-hover:rotate-[-30deg] group-hover:text-[#ff3b00]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Link>
  )
}

export function ServicesSection() {
  const servicesRef = useRef<HTMLHeadingElement>(null)
  const [isTextVisible, setIsTextVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full bg-background py-0 md:py-20 lg:py-0 px-3 md:px-6 lg:px-8">
      <style>{`
        @keyframes slideDownText {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-reveal {
          opacity: 0;
          animation: slideDownText 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      <div className="max-w-full mx-auto">
        <div className="space-y-0 md:space-y-2 overflow-hidden -mt-2 md:mt-0" ref={servicesRef}>
          <h2 className="text-5xl lg:text-8xl font-medium text-chart-5 mb-0 leading-none tracking-tighter">
            <span className="block text-reveal" style={{ animationDelay: isTextVisible ? "0.1s" : "0s" }}>
              Service
            </span>
            <span className="block text-reveal" style={{ animationDelay: isTextVisible ? "0.2s" : "0s" }}>
              We Provide
            </span>
          </h2>
        </div>

        <div
          className="mt-6 md:mt-12 lg:mt-10 flex items-center gap-0 group cursor-pointer text-reveal"
          style={{ animationDelay: isTextVisible ? "0.35s" : "0s" }}
        >
          <AnimatedLink text="Learn More" href="/services" showArrow={true} showPrice={true} />
        </div>

        <ServiceCards />
      </div>
    </section>
  )
}
