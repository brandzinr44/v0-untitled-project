"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

function CustomArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="social-arrow"
    >
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function AnimatedLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a href={href} className="animated-text-link text-chart-5 text-[14px] group flex items-center gap-2">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
      <CustomArrow />
    </a>
  )
}

function AnimatedLinkMobile({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a href={href} className="animated-text-link text-chart-5 text-[14px] group flex items-center gap-2">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
      <CustomArrow />
    </a>
  )
}

function AnimatedEmailLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <a href={href} className="animated-text-link text-chart-5 text-[14px] font-medium inline-flex">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </a>
  )
}

function NavLink({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <Link href={href} className="animated-text-link text-chart-5 text-[14px]">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}

function NavLinkMobile({ href, children }: { href: string; children: string }) {
  const letters = children.split("")

  return (
    <Link href={href} className="animated-text-link text-chart-5 text-[14px]">
      <span className="text-swap-container">
        <span className="text-layer text-layer-primary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
        <span className="text-layer text-layer-secondary">
          {letters.map((letter, index) => (
            <span key={index} className="letter-swap" style={{ transitionDelay: `${index * 0.03}s` }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}

export function Footer() {
  const [animationKey, setAnimationKey] = useState(0)
  const footerRef = useRef(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const checkTheme = () => {
      const htmlElement = document.documentElement
      const isDarkMode = htmlElement.classList.contains("dark")
      setIsDark(isDarkMode)
    }

    checkTheme()

    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1)

          setTimeout(() => {
            if (svgRef.current) {
              const letters = svgRef.current.querySelectorAll(".letter")
              letters.forEach((letter) => {
                letter.classList.add("animate")
              })
            }
          }, 10)
        }
      },
      { threshold: 0.4 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer className="bg-background text-black transition-colors duration-300" ref={footerRef}>
      <style>{`
        @keyframes slideUpLetterSmooth {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .letter {
          opacity: 0;
          display: inline-block;
        }

        .letter.animate {
          animation: slideUpLetterSmooth 0.8s cubic-bezier(0.33, 0, 0.2, 1) forwards;
        }

        .svg-container {
          transition: filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .svg-container.dark-theme {
          filter: none;
        }

        .svg-container.light-theme {
          filter: none;
        }

        /* Text swap animation styles */
        .animated-text-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .text-swap-container {
          position: relative;
          display: inline-flex;
          overflow: hidden;
          height: 1.2em;
        }

        .text-layer {
          display: inline-flex;
        }

        .text-layer-primary {
          position: relative;
        }

        .text-layer-secondary {
          position: absolute;
          top: 0;
          left: 0;
        }

        .text-layer-primary .letter-swap {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .text-layer-secondary .letter-swap {
          display: inline-block;
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }

        .animated-text-link:hover .text-layer-primary .letter-swap {
          transform: translateY(100%);
        }

        .animated-text-link:hover .text-layer-secondary .letter-swap {
          transform: translateY(0);
        }

        /* Updated arrow animation for SVG */
        .social-arrow {
          transition: transform 0.3s ease;
          display: inline-block;
          transform: rotate(0deg);
        }

        .animated-text-link:hover .social-arrow {
          transform: rotate(45deg);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          background-color: chart-5 !important;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: #ff3b00;
          z-index: 0;
          transition: height 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          background-color: rgba(255, 59, 0, 0.3);
          z-index: 0;
          transition: height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: bottom;
        }

        .cta-button-text {
          position: relative;
          z-index: 1;
          transition: color 0.4s ease 0.1s;
        }

        .cta-button:hover::before {
          height: 100%;
        }

        .cta-button:hover::after {
          height: 100%;
        }

        .cta-button:hover .cta-button-text {
          color: white;
        }

        .social-icon-fill {
          fill: currentColor;
        }
      `}</style>

      <div className="px-3 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="w-full">
            <h2 className="text-[48px] font-regular text-chart-5 tracking-tighter leading-none mb-5">
              Great Design.
              <br />
              Strong Brands
            </h2>

            <Link href="/contact">
              <button className="cta-button w-full bg-chart-5 text-[16px] text-background px-8 py-4 font-medium transition-colors duration-300 mb-8">
                <span className="cta-button-text">Let's Talk</span>
              </button>
            </Link>

            <div className="text-[16px]">
              <p className="text-chart-5 mb-1">New Business :</p>
              <AnimatedEmailLink href="mailto:lozinrcontact@gmail.com">lozinrcontact@gmail.com</AnimatedEmailLink>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <div className="flex flex-col">
              <div className="text-chart-5 flex flex-col gap-2">
                <NavLinkMobile href="/work">WORK</NavLinkMobile>
                <NavLinkMobile href="/store">STORE</NavLinkMobile>
                <NavLinkMobile href="/about">ABOUT</NavLinkMobile>
                <NavLinkMobile href="/contact">CONTACT</NavLinkMobile>
                <NavLinkMobile href="/services">SERVICES</NavLinkMobile>
              </div>
              <div className="mt-12 text-chart-5 text-[14px]">
                <p>Dhaka</p>
                <p>Bangladesh, Asia</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col">
              <div className="text-chart-5 flex flex-col gap-2">
                <AnimatedLinkMobile href="https://x.com/adnandzinr">TWITTER</AnimatedLinkMobile>
                <AnimatedLinkMobile href="#">LINKEDIN</AnimatedLinkMobile>
                <AnimatedLinkMobile href="https://web.facebook.com/brandzinr">FACEBOOK</AnimatedLinkMobile>
                <AnimatedLinkMobile href="https://www.instagram.com/adnanakifdesign/">INSTAGRAM</AnimatedLinkMobile>
              </div>
              <div className="mt-18 text-chart-5 flex flex-col gap-1">
                <NavLinkMobile href="/terms">Terms & Conditions</NavLinkMobile>
                <NavLinkMobile href="/privacy">Privacy Policy</NavLinkMobile>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 justify-between">
          <div className="w-full lg:w-max-full">
            <h2 className="text-4xl md:text-5xl lg:text-[48px] text-chart-5 font-regular tracking-tighter leading-tight mb-5 whitespace-nowrap">
              Great Design. Strong Brands
            </h2>

            <Link href="/contact">
              <button className="cta-button w-full md:w-xl bg-chart-5 text-[16px] text-background px-8 md:px-16 py-4 md:py-4 font-medium transition-colors duration-300 mb-8">
                <span className="cta-button-text">Let's Talk</span>
              </button>
            </Link>

            <div className="text-[16px]">
              <p className="text-chart-5 mb-1">New Business :</p>
              <AnimatedEmailLink href="mailto:lozinrcontact@gmail.com">lozinrcontact@gmail.com</AnimatedEmailLink>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col justify-start">
            <div className="flex justify-between gap-8">
              <div className="flex flex-col pt-3">
                <div className="flex flex-col gap-2">
                  <NavLink href="/work">WORK</NavLink>
                  <NavLink href="/store">STORE</NavLink>
                  <NavLink href="/about">ABOUT</NavLink>
                  <NavLink href="/contact">CONTACT</NavLink>
                  <NavLink href="/services">SERVICES</NavLink>
                </div>
                <div className="mt-12 text-chart-5 text-[14px]">
                  <p>Dhaka</p>
                  <p>Bangladesh, Asia</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col lg:mt-3">
                <div className="flex flex-col gap-2">
                  <AnimatedLink href="https://www.instagram.com/adnanakifdesign/">INSTAGRAM</AnimatedLink>
                  <AnimatedLink href="#">LINKEDIN</AnimatedLink>
                  <AnimatedLink href="https://web.facebook.com/brandzinr">FACEBOOK</AnimatedLink>
                  <AnimatedLink href="https://x.com/adnandzinr">TWITTER</AnimatedLink>
                  <AnimatedLink href="mailto:adnanakif.co@email.com">EMAIL</AnimatedLink>
                </div>
                <div className="text-chart-5 mt-12 flex flex-col gap-1">
                  <NavLink href="/terms">Terms & Conditions</NavLink>
                  <NavLink href="/privacy">Privacy Policy</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Section */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-full px-3 lg:px-6">
          <svg
            ref={svgRef}
            viewBox="0 0 2801.45 353.83"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-auto block svg-container ${isDark ? "dark-theme" : "light-theme"}`}
            preserveAspectRatio="xMidYMid meet"
            key={animationKey}
            id="Shape_Grid_Output_"
            data-name="Shape Grid (Output)"
          >
            <defs>
              <style>
                {`.cls-1 {
                  fill: ${isDark ? "#ffffff" : "#000000"};
                  transition: fill 0.3s ease;
                }`}
              </style>
            </defs>
            <g id="Layer_1" data-name="Layer 1">
              <g>
                <path className="cls-1 letter" d="M13.94,4.17v345.5h122.84V4.17H13.94Z" />
                <path
                  className="cls-1 letter"
                  d="M822.78,289.65c-2.89-35.58-11.13-69.01-23.92-99.57-14.54-34.75-34.97-65.81-60.14-92.12-26.95-28.22-59.34-50.98-95.7-67.01-39.26-17.31-83.17-26.78-129.89-26.78-30.59,0-59.95,4.1-87.59,11.83-34.26,9.59-65.87,24.77-93.83,44.67-78.03,55.51-127.69,147.75-127.69,257.68,0,10.61.47,21.06,1.37,31.32h131.86c-1.22-10.2-1.84-20.67-1.84-31.32,0-15.28,1.27-30.12,3.75-44.37,4.86-27.88,14.33-53.45,27.96-75.46,22.74-36.71,57.04-63.48,100.69-74.39,14.15-3.54,29.28-5.41,45.32-5.41,74.8,0,129.78,40.03,157.74,100.09,9.34,20.05,15.67,42.34,18.72,66.11,1.39,10.85,2.1,22.02,2.1,33.42,0,10.65-.62,21.12-1.84,31.32h132.69c.84-9.44,1.3-19.03,1.37-28.76,0-.85,0-1.71,0-2.57,0-9.71-.39-19.28-1.16-28.69Z"
                />
                <path
                  className="cls-1 letter"
                  d="M844.93,4.17v114.95h321.17l-43.63,55.52-1.13,1.43-46.62,59.33-2.12,2.69-45.81,58.28-1.66,2.12-40.22,51.18h156.05l.03-.05,19.09-24.05,15.51-19.54,19.53-24.61,15.1-19.03,22.95-28.92,13.91-17.52,30.57-38.52,11.21-14.14,41.32-52.06V4.17h-485.25Z"
                />
                <path
                  className="cls-1 letter"
                  d="M1427.53,4.17l16.5,236.72,6.84,98.06.75,10.72h105.57l2.56-35.6,1.6-22.43,4.54-63.3,11.53-160.77,1.45-20.32,3.09-43.09h-154.44Z"
                />
                <path className="cls-1 letter" d="M2087.34,4.17v345.5h122.85V4.17h-122.85Z" />
                <polygon
                  className="cls-1 letter"
                  points="2039.87 349.67 1892.6 349.67 1892.27 349.17 1887.33 341.65 1842.88 273.97 1839.31 268.53 1795.3 201.52 1791.46 195.67 1790.75 194.58 1790.75 349.67 1668.78 349.67 1668.78 4.17 1812.69 4.17 1816.55 10.05 1835.28 38.53 1880.24 106.89 1896.06 130.96 1940.11 197.95 1955.55 221.43 2000.05 289.09 2017.48 315.62 2039.87 349.67"
                />
                <path
                  className="cls-1 letter"
                  d="M2536.56,4.17h-246.57v345.5h431.77c42.27-35.18,65.76-84.2,65.76-141.05,0-130.74-92.13-204.45-250.96-204.45ZM2530.41,301.64h-107.05V114.73h107.05c80.74,0,123.72,31.59,123.72,93.88s-42.99,93.02-123.72,93.02Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </footer>
  )
}
