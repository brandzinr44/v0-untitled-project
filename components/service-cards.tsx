"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

function AnimatedLink({ text, href }: { text: string; href: string }) {
  const letters = text.split("")

  return (
    <Link
      href={href}
      className="flex items-center justify-between w-full max-w-lg bg-chart-5/10 px-0 py-3 md:py-4 border-t border-chart-5 text-chart-5 font-medium text-lg md:text-xl hover:border-[#ff3b00] hover:text-[#ff3b00] hover:bg-[#ff3b00]/20 transition-all duration-300 ease-out group cursor-pointer"
    >
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
    </Link>
  )
}

function AnimatedButton({ text, href }: { text: string; href: string }) {
  const letters = text.split("")

  return (
    <Link
      href={href}
      className="w-full md:max-w-2xl px-6 md:px-8 py-4 md:py-5 bg-white/10 text-white font-medium text-[18px] md:text-xl rounded-lg hover:bg-[#ff3b00] transition-all duration-300 ease-out flex items-center justify-center gap-3 group"
    >
      <span className="relative overflow-hidden inline-flex">
        {/* Primary text - slides down on hover */}
        <span className="flex">
          {letters.map((letter, index) => (
            <span
              key={`primary-${index}`}
              className="inline-block transition-transform duration-300 ease-out group-hover:translate-y-full"
              style={{ transitionDelay: `${index * 20}ms` }}
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
              style={{ transitionDelay: `${index * 20}ms` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
      <svg
        className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300 ease-out"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </Link>
  )
}

const services = [
  {
    title: "Logo Design",
    description:
      "We make logos that feel right. Not just good-looking but meaningful, memorable and built to last for your brand.",
    icon: (
      <svg
        className="w-30 h-30 md:w-30 md:h-30 text-chart-5"
        viewBox="0 0 704.54 643.17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M468.57,366.56l-164.64-162.65c-5.84-5.76-14.33-7.95-22.22-5.69l-155.56,44.44c-9.91,2.84-16.68,11.97-16.48,22.26,2.84,153.63-33.22,269.11-56.84,327.74-6.98,17.33,8.8,35.21,26.87,30.46,194.14-51.06,298.56-58.59,337.19-59.28,10.46-.2,19.43-7.49,21.75-17.68l36.11-158.36c1.75-7.67-.59-15.71-6.19-21.24ZM283.4,451.99c-34.64,0-62.72-28.08-62.72-62.72s28.08-62.72,62.72-62.72,62.72,28.08,62.72,62.72-28.08,62.72-62.72,62.72Z"
        />
        <rect
          fill="currentColor"
          x="402.03"
          y="17.65"
          width="173.97"
          height="332"
          rx="35.01"
          ry="35.01"
          transform="translate(13.37 399.58) rotate(-45)"
        />
      </svg>
    ),
    bgColor: "bg-[#ff3b00]",
    patternType: "circles",
  },
  {
    title: "Brand Identity Development",
    description:
      "A brand is more than a logo. We help you show up the same way everywhere - Online, offline and everything between.",
    icon: (
      <svg
        className="w-30 h-30 md:w-30 md:h-30 text-chart-5"
        viewBox="0 0 704.54 643.17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M616.48,216.07h-80.75v-109.62c0-48.46-39.28-87.74-87.74-87.74h-183.01c-48.46,0-87.74,39.28-87.74,87.74v109.62h-89.19c-29.28,0-53.02,23.74-53.02,53.02v46.93c0,29.29,23.74,53.02,53.02,53.02h89.19v255.41h358.48v-255.41h80.75c29.28,0,53.01-23.73,53.01-53.02v-46.93c0-29.28-23.73-53.02-53.01-53.02ZM177.25,349.54h-76.28v-114.98h76.28v114.98ZM513.09,480.86H194.77v-111.82h318.32v111.82ZM513.09,216.07H194.77v-111.81h318.32v111.81ZM612.01,349.54h-76.28v-114.98h76.28v114.98Z"
        />
      </svg>
    ),
    bgColor: "bg-[#ff3b00]",
    patternType: "waves",
  },
  {
    title: "Packaging Design",
    description:
      "Good packaging tells a story before anyone reads a word. We design packs that stand out, feel great and connect.",
    icon: (
      <svg
        className="w-30 h-30 md:w-30 md:h-30 text-chart-5"
        viewBox="0 0 704.54 643.17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M352.28,18.72C185.01,18.72,49.41,154.31,49.41,321.58s135.6,302.87,302.87,302.87,302.86-135.6,302.86-302.87S519.54,18.72,352.28,18.72ZM530.85,230.24l-54.82,201.44h-250.57l-51.69-197.2c-3.9-14.87,13.66-25.91,25.37-15.97l96.24,81.71,40.27-79.21c6.38-12.54,24.22-12.74,30.88-.35l41.96,78.11,101.65-82.06c9.81-7.92,24.02,1.36,20.71,13.53Z"
        />
      </svg>
    ),
    bgColor: "bg-[#ff3b00]",
    patternType: "stripes",
  },
  {
    title: "Website Design & Development",
    description:
      "Your website should work hard and look good. We design sites that are easy to use and built to grow with you.",
    icon: (
      <svg
        className="w-30 h-30 md:w-30 md:h-30 text-chart-5"
        viewBox="0 0 704.54 643.17"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M569.63,21.93H112.01c-47.3,0-85.65,38.35-85.65,85.65v370.42c0,47.3,38.35,85.65,85.65,85.65h344.88l-41.85-140.59c-12.42-41.7,26.94-80.26,68.37-67.02l171.86,54.93V107.57c0-47.3-38.35-85.65-85.65-85.65ZM613.44,161.79H68.56v-52.65c0-25.73,20.86-46.58,46.59-46.58h451.7c25.73,0,46.59,20.85,46.59,46.58v52.65Z"
        />
        <path
          fill="currentColor"
          d="M156.97,107.66c0,9.47-7.67,17.14-17.14,17.14s-17.14-7.67-17.14-17.14,7.67-17.14,17.14-17.14,17.14,7.67,17.14,17.14Z"
        />
        <path
          fill="currentColor"
          d="M220.71,107.66c0,9.47-7.67,17.14-17.14,17.14s-17.14-7.67-17.14-17.14,7.67-17.14,17.14-17.14,17.14,7.67,17.14,17.14Z"
        />
        <path
          fill="currentColor"
          d="M284.45,107.66c0,9.47-7.67,17.14-17.14,17.14s-17.14-7.67-17.14-17.14,7.67-17.14,17.14-17.14,17.14,7.67,17.14,17.14Z"
        />
        <path
          fill="currentColor"
          d="M666.32,483.31l-11.6,4.47-83.28,32.07-15.07,43.8-15.34,44.56c-6.12,17.77-31.44,17.24-36.79-.77l-13.04-43.78-45.2-151.8c-4.69-15.75,10.18-30.32,25.83-25.31l183.45,58.64l10.02,3.2c16.66,5.32,17.34,28.65,1.02,34.93Z"
        />
      </svg>
    ),
    bgColor: "bg-emerald-500",
    patternType: "grid",
  },
]

const PatternCircles = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes float-circle {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(20px, -15px); }
        50% { transform: translate(0, -30px); }
        75% { transform: translate(-20px, -15px); }
      }
      .circle-animate { animation: float-circle 6s ease-in-out infinite; }
    `}</style>
    <circle cx="80" cy="60" r="30" fill="white" className="circle-animate" />
    <circle cx="280" cy="100" r="25" fill="white" className="circle-animate" style={{ animationDelay: "1s" }} />
    <circle cx="200" cy="200" r="35" fill="white" className="circle-animate" style={{ animationDelay: "2s" }} />
  </svg>
)

const PatternWaves = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes wave-motion {
        0%, 100% { d: path('M 0,150 Q 100,100 200,150 T 400,150 V 300 H 0 Z'); }
        50% { d: path('M 0,120 Q 100,180 200,120 T 400,120 V 300 H 0 Z'); }
      }
    `}</style>
    <path
      fill="white"
      d="M 0,150 Q 100,100 200,150 T 400,150 V 300 H 0 Z"
      style={{ animation: "wave-motion 4s ease-in-out infinite" }}
    />
  </svg>
)

const PatternStripes = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes stripe-move {
        0% { transform: translateX(0); }
        100% { transform: translateX(40px); }
      }
      .stripe { animation: stripe-move 3s linear infinite; }
    `}</style>
    <g className="stripe">
      <rect x="0" y="0" width="20" height="300" fill="white" />
      <rect x="40" y="0" width="20" height="300" fill="white" />
      <rect x="80" y="0" width="20" height="300" fill="white" />
      <rect x="120" y="0" width="20" height="300" fill="white" />
      <rect x="160" y="0" width="20" height="300" fill="white" />
      <rect x="200" y="0" width="20" height="300" fill="white" />
      <rect x="240" y="0" width="20" height="300" fill="white" />
      <rect x="280" y="0" width="20" height="300" fill="white" />
      <rect x="320" y="0" width="20" height="300" fill="white" />
      <rect x="360" y="0" width="20" height="300" fill="white" />
    </g>
  </svg>
)

const PatternGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <style>{`
      @keyframes pulse-dot {
        0%, 100% { r: 5; opacity: 0.6; }
        50% { r: 8; opacity: 1; }
      }
      .grid-dot { animation: pulse-dot 2s ease-in-out infinite; }
    `}</style>
    {[...Array(20)].map((_, i) => (
      <circle
        key={i}
        cx={(i % 5) * 100 + 50}
        cy={Math.floor(i / 5) * 80 + 40}
        r="5"
        fill="white"
        className="grid-dot"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </svg>
)

export function ServiceCards() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [showCollaborations, setShowCollaborations] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const collaborationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 150)
          })
        } else {
          setVisibleCards([])
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const collaborationsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCollaborations(true)
        } else {
          setShowCollaborations(false)
        }
      },
      { threshold: [0.2, 0.6] },
    )

    if (collaborationsRef.current) {
      collaborationsObserver.observe(collaborationsRef.current)
    }

    return () => collaborationsObserver.disconnect()
  }, [])

  return (
    <div>
      <div ref={containerRef} className="relative mt-16 md:mt-20 lg:mt-24 space-y-8 md:space-y-0">
        {/* Card 1 - Logo Design (Left, elevated) */}
        <div
          className="md:flex md:gap-8 md:items-start md:relative md:ml-0"
          style={{
            opacity: visibleCards[0] ? 1 : 0,
            transform: visibleCards[0] ? "translateY(0) rotate(0deg)" : "translateY(40px) rotate(-2deg)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div className="p-8 md:p-10 border border-chart-5/40 bg-chart-5/10 backdrop-blur-sm rounded-2xl flex-1 min-h-80 md:min-h-96 flex flex-col justify-between md:-rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
            <div
              className={`${services[0].bgColor} rounded-xl p-6 mb-6 relative overflow-hidden min-h-48 flex items-center justify-center`}
            >
              <PatternCircles />
              <div className="relative z-10 text-white text-3xl font-bold opacity-20">●●●</div>
            </div>
            <div>
              <div className="mb-6">{services[0].icon}</div>
              <h3 className="text-2xl md:text-3xl font-medium text-chart-5 mb-4 leading-tight">{services[0].title}</h3>
              <p className="text-sm md:text-base text-chart-5/80 leading-relaxed">{services[0].description}</p>
            </div>
          </div>
        </div>

        {/* Card 2 & 3 - Two column layout (offset) */}
        <div className="md:grid md:grid-cols-2 md:gap-8 md:relative md:ml-20 space-y-8 md:space-y-0">
          {/* Card 2 - Brand Identity (Left, lower) */}
          <div
            className="p-8 md:p-8 border border-chart-5/40 bg-chart-5/10 backdrop-blur-sm rounded-2xl flex flex-col justify-between min-h-80 md:min-h-72 md:rotate-1 hover:rotate-0 transition-transform duration-500 ease-out"
            style={{
              opacity: visibleCards[1] ? 1 : 0,
              transform: visibleCards[1] ? "translateY(0) rotate(1deg)" : "translateY(40px) rotate(1deg)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: "0.15s",
            }}
          >
            <div
              className={`${services[1].bgColor} rounded-xl p-4 mb-5 relative overflow-hidden min-h-40 flex items-center justify-center`}
            >
              <PatternWaves />
              <div className="relative z-10 text-black text-2xl opacity-20">∿∿∿</div>
            </div>
            <div>
              <div className="mb-3">{services[1].icon}</div>
              <h3 className="text-2xl md:text-3xl font-medium text-chart-5 mb-4 leading-tight">{services[1].title}</h3>
              <p className="text-sm md:text-base text-chart-5/80 leading-relaxed">{services[1].description}</p>
            </div>
          </div>

          {/* Card 3 - Packaging (Right, higher) */}
          <div
            className="p-8 md:p-8 border border-chart-5/40 bg-chart-5/10 backdrop-blur-sm rounded-2xl flex flex-col justify-between min-h-80 md:min-h-72 md:-rotate-1 hover:rotate-0 transition-transform duration-500 ease-out md:mt-12"
            style={{
              opacity: visibleCards[2] ? 1 : 0,
              transform: visibleCards[2] ? "translateY(0) rotate(-1deg)" : "translateY(40px) rotate(-1deg)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: "0.3s",
            }}
          >
            <div
              className={`${services[2].bgColor} rounded-xl p-4 mb-5 relative overflow-hidden min-h-40 flex items-center justify-center`}
            >
              <PatternStripes />
              <div className="relative z-10 text-black text-2xl opacity-20">||||</div>
            </div>
            <div>
              <div className="mb-3">{services[2].icon}</div>
              <h3 className="text-2xl md:text-3xl font-medium text-chart-5 mb-4 leading-tight">{services[2].title}</h3>
              <p className="text-sm md:text-base text-chart-5/80 leading-relaxed">{services[2].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 - Website Design & Development */}
      <div
        className="md:flex md:gap-8 md:items-start md:relative md:ml-0"
        style={{
          opacity: visibleCards[3] ? 1 : 0,
          transform: visibleCards[3] ? "translateY(0) rotate(0deg)" : "translateY(40px) rotate(-2deg)",
          transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transitionDelay: "0.45s",
        }}
      >
        <div className="p-8 md:p-10 border border-chart-5/40 bg-chart-5/10 backdrop-blur-sm rounded-2xl flex-1 min-h-80 md:min-h-96 flex flex-col justify-between md:-rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
          <div
            className={`${services[3].bgColor} rounded-xl p-6 mb-6 relative overflow-hidden min-h-48 flex items-center justify-center`}
          >
            <PatternGrid />
            <div className="relative z-10 text-white text-3xl font-bold opacity-20">●●●</div>
          </div>
          <div>
            <div className="mb-6">{services[3].icon}</div>
            <h3 className="text-2xl md:text-3xl font-medium text-chart-5 mb-4 leading-tight">{services[3].title}</h3>
            <p className="text-sm md:text-base text-chart-5/80 leading-relaxed">{services[3].description}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-16 lg:mt-20 flex justify-center md:hidden">
        <AnimatedButton text="See More Services" href="/services" />
      </div>

      {/* Explore Collaborations section */}
      <div ref={collaborationsRef} className="mt-16 md:mt-24 lg:mt-30">
        <div className="space-y-0">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-chart-5 leading-none tracking-tight max-w-full">
            <div
              style={{
                opacity: showCollaborations ? 1 : 0,
                transform: showCollaborations ? "translateY(0)" : "translateY(60px)",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              Voice
            </div>
            <div
              style={{
                opacity: showCollaborations ? 1 : 0,
                transform: showCollaborations ? "translateY(0)" : "translateY(60px)",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transitionDelay: "0.15s",
              }}
            >
              Of Excellence
            </div>
          </h2>
          <div
            className="mt-8 md:mt-12"
            style={{
              opacity: showCollaborations ? 1 : 0,
              transform: showCollaborations ? "translateY(0)" : "translateY(60px)",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: "0.3s",
            }}
          >
            <AnimatedLink text="Learn More" href="/work" />
          </div>
        </div>
      </div>
    </div>
  )
}
