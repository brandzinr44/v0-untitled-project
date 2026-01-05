"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true)
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 800)
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/work", label: "WORK" },
    { href: "/contact", label: "CONTACT" },
    { href: "/store", label: "STORE" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          isMenuOpen ? "bg-[#ff3b00] border-[#ff3b00]" : "bg-black border-chart-5/20"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-6 lg:px-8 py-3 md:py-4">
  {/* Logo - Left Side */}
  <Link href="/" className="flex-shrink-0">
    <svg
      viewBox="0 0 1200 1200"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 md:h-7 w-auto transition-all duration-700 ease-in-out"
    >
      <g fill={isMenuOpen ? "white" : "white"} className="transition-all duration-700">
        <path d="M638.32,1174.97H25.03v-191.66h383.32L216.69,25.03h191.66l62.54,312.8c-60.82,70.29-97.61,161.94-97.61,262.16,0,157.03,90.31,292.97,221.8,358.73l4.91,24.59,38.33,191.66Z"/>
        <path d="M1174.95,595.79c0-.86-.02-1.72-.04-2.56,0-.55,0-1.09-.02-1.64-.02-.48-.02-.99-.04-1.49-.04-1.64-.08-3.28-.15-4.94,0-.21-.02-.44-.02-.67-.08-1.99-.17-3.99-.27-5.98-.08-1.2-.15-2.37-.23-3.57-.21-3.17-.44-6.34-.73-9.49-.13-1.58-.27-3.15-.44-4.73s-.34-3.13-.5-4.7c-.19-1.55-.38-3.13-.57-4.68-.4-3.13-.84-6.24-1.3-9.32-.46-3.05-.97-6.07-1.49-9.09-1.37-7.73-2.96-15.37-4.79-22.93-.67-2.81-1.39-5.63-2.12-8.42-.86-3.25-1.76-6.49-2.71-9.72-.44-1.47-.86-2.92-1.32-4.37-.17-.55-.34-1.11-.53-1.68-.59-1.89-1.18-3.78-1.81-5.65-1.09-3.34-2.23-6.64-3.4-9.91-.86-2.37-1.72-4.73-2.63-7.08-15.27-39.9-37-76.61-63.93-108.81-.95-1.13-1.91-2.27-2.86-3.38-.97-1.13-1.93-2.25-2.92-3.36-.71-.82-1.41-1.62-2.12-2.41-3.23-3.63-6.53-7.2-9.89-10.69-1.03-1.07-2.06-2.12-3.09-3.17-1.05-1.07-2.1-2.12-3.15-3.15-.84-.86-1.7-1.7-2.56-2.56-2.37-2.31-4.77-4.58-7.2-6.83-.97-.9-1.93-1.79-2.9-2.67-1.18-1.07-2.35-2.12-3.53-3.15-1.09-.99-2.21-1.95-3.34-2.92-1.09-.95-2.18-1.89-3.3-2.84-1.24-1.07-2.5-2.1-3.76-3.13-1.05-.88-2.1-1.74-3.17-2.58-1.16-.94-2.31-1.87-3.49-2.77-4.66-3.7-9.39-7.24-14.22-10.69-.95-.67-1.87-1.34-2.81-2-3.97-2.79-7.98-5.5-12.05-8.13-1.2-.78-2.42-1.55-3.63-2.31-.88-.59-1.79-1.13-2.69-1.7l-3.21-1.95c-.63-.4-1.28-.78-1.91-1.15-1.22-.74-2.42-1.45-3.63-2.14-4.64-2.73-9.35-5.33-14.11-7.83-1.18-.63-2.37-1.26-3.57-1.87-1.49-.78-2.98-1.53-4.49-2.27-1.2-.61-2.42-1.2-3.61-1.78-7.1-3.44-14.32-6.68-21.65-9.68-1.26-.5-2.52-1.01-3.78-1.51-1.41-.57-2.81-1.11-4.24-1.66-3.32-1.28-6.66-2.52-10.02-3.7-1.32-.46-2.69-.92-4.03-1.39-1.07-.38-2.14-.74-3.19-1.07-1.45-.48-2.92-.94-4.37-1.41-1.47-.46-2.94-.92-4.41-1.36-.65-.21-1.3-.4-1.97-.59-1.13-.36-2.29-.69-3.42-1.01-1.89-.55-3.78-1.07-5.67-1.58-1.05-.29-2.1-.57-3.15-.84-2.96-.78-5.92-1.51-8.9-2.2-1.49-.36-2.98-.71-4.47-1.03-8.99-2.02-18.1-3.7-27.3-5.06-2.92-.42-5.84-.82-8.78-1.18-3.26-.42-6.51-.78-9.77-1.09-3.02-.29-6.07-.57-9.11-.78-.23-.02-.46-.04-.71-.04-2.21-.17-4.41-.31-6.62-.42-3.7-.23-7.41-.38-11.13-.46-3.42-.11-6.87-.15-10.31-.15-129.05,0-243.22,63.78-312.67,161.52-44.48,62.61-70.63,139.13-70.63,221.78,0,137.01,71.87,257.23,179.98,325,58.93,36.96,128.63,58.32,203.31,58.32,3.44,0,6.89-.04,10.31-.15,3.72-.08,7.43-.23,11.13-.44,2.2-.13,4.41-.27,6.62-.44.25,0,.48-.02.71-.04,3.05-.21,6.09-.48,9.11-.78,3.26-.32,6.51-.67,9.77-1.09,2.94-.36,5.86-.76,8.78-1.18,9.2-1.37,18.31-3.05,27.3-5.06,1.49-.31,2.98-.67,4.47-1.03,2.98-.69,5.94-1.43,8.9-2.2,1.05-.27,2.1-.55,3.15-.84,1.89-.5,3.78-1.03,5.67-1.58,1.13-.31,2.29-.65,3.42-1.01.67-.19,1.32-.38,1.97-.59,2.94-.88,5.86-1.81,8.78-2.77,1.05-.34,2.12-.69,3.19-1.07,1.34-.46,2.71-.92,4.03-1.39,3.36-1.18,6.7-2.41,10.02-3.7,1.43-.55,2.84-1.09,4.24-1.66,1.26-.5,2.52-1.01,3.78-1.51,7.33-3,14.55-6.24,21.65-9.68,1.2-.59,2.42-1.18,3.61-1.79,1.51-.74,3-1.49,4.49-2.27,1.2-.61,2.39-1.24,3.57-1.87,4.77-2.5,9.47-5.12,14.11-7.83,1.22-.69,2.42-1.41,3.63-2.14.63-.38,1.28-.76,1.91-1.15l3.21-1.95c.9-.57,1.81-1.11,2.69-1.7,1.22-.76,2.44-1.53,3.63-2.31,10.02-6.49,19.74-13.42,29.09-20.81,1.18-.9,2.33-1.83,3.49-2.77,1.07-.84,2.12-1.7,3.17-2.58,1.26-1.03,2.52-2.08,3.76-3.13,1.11-.95,2.21-1.89,3.3-2.84,1.13-.97,2.25-1.93,3.34-2.92,1.18-1.03,2.35-2.08,3.53-3.15.97-.88,1.93-1.76,2.9-2.67,2.44-2.25,4.83-4.52,7.2-6.83,1.55-1.53,3.09-3.07,4.62-4.6.38-.38.73-.74,1.09-1.11,1.03-1.05,2.06-2.1,3.09-3.17,3.36-3.49,6.66-7.06,9.89-10.69.71-.8,1.41-1.6,2.12-2.41.99-1.11,1.95-2.23,2.92-3.36.95-1.11,1.91-2.25,2.86-3.38,30.66-36.67,54.58-79.15,69.87-125.57.76-2.29,1.49-4.58,2.21-6.89,1.51-4.91,2.94-9.87,4.26-14.87.69-2.6,1.37-5.23,2-7.86,1.91-7.9,3.57-15.86,4.98-23.92.5-2.86.97-5.71,1.41-8.59.23-1.53.46-3.09.67-4.64.23-1.55.42-3.11.63-4.68.19-1.55.38-3.11.57-4.68.17-1.55.34-3.13.5-4.7s.32-3.15.44-4.73c.29-3.15.53-6.32.73-9.49.08-1.2.15-2.37.23-3.57.11-2,.19-3.99.27-5.99,0-.23.02-.46.02-.67.06-1.64.1-3.3.15-4.94.02-.5.02-1.01.04-1.49.02-.55.02-1.09.02-1.64.02-.84.04-1.7.04-2.56.02-1.39.02-2.79.02-4.2s0-2.81-.02-4.2ZM791.65,791.65c-105.85,0-191.66-85.79-191.66-191.66s85.81-191.64,191.66-191.64,191.66,85.79,191.66,191.64-85.81,191.66-191.66,191.66Z"/>
      </g>
    </svg>
  </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex items-center justify-center w-6 h-6 md:w-7 md:h-7 group"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-3.5">
              <span
                className={`absolute left-0 h-[1.9px] transition-all duration-700 ease-in-out ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45 w-full bg-white" : "top-0 w-full bg-white group-hover:w-3/5"}`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.9px] transition-all duration-700 ease-in-out ${isMenuOpen ? "w-0 opacity-0 bg-white" : "w-full opacity-100 bg-white group-hover:w-4/5 group-hover:translate-x-1"}`}
              />
              <span
                className={`absolute left-0 h-[1.9px] transition-all duration-700 ease-in-out ${isMenuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45 w-full bg-white" : "bottom-0 w-full bg-white group-hover:w-2/5"}`}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 overflow-hidden ${isAnimating || isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        {/* Background curtain panels */}
        <div className="absolute inset-0 flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`flex-1 bg-[#ff3b00] transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? "scale-y-100 origin-bottom" : "scale-y-0 origin-top"}`}
              style={{
                transitionDuration: "1500ms",
                transitionDelay: isMenuOpen ? `${i * 50}ms` : `${(4 - i) * 30}ms`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative h-full flex flex-col justify-between px-4 md:px-5 lg:px-6 pt-20 pb-8 md:pb-10">
          {/* Main Navigation */}
          <nav className="flex-1 flex items-center">
            <ul className="flex flex-col gap-0">
              {navLinks.map((link, index) => (
                <li key={link.href} className="overflow-hidden">
                  <Link
                    href={link.href}
                    className={`block text-[70px] md:text-[89px] lg:text-[101px] tracking-tight font-regular leading-[0.95] transition-colors duration-100 ease-in-out ${isActive(link.href) ? "text-black" : "text-black/20 hover:text-black"}`}
                    style={{
                      transform: isMenuOpen ? "translateY(0)" : "translateY(120%)",
                      opacity: isMenuOpen ? 1 : 0,
                      transitionDuration: "1500ms",
                      transitionDelay: isMenuOpen ? `${400 + index * 80}ms` : `${(navLinks.length - index) * 40}ms`,
                      transitionProperty: "transform, opacity",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section - Social links */}
          <div className="flex items-end justify-end">
            <div
              className="flex items-center gap-2 md:gap-2"
              style={{
                transform: isMenuOpen ? "translateY(0)" : "translateY(100%)",
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: isMenuOpen ? "1500ms" : "0ms",
              }}
            >
              <a
                href="https://instagram.com/adnanbranding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[16px] font-medium tracking-tight"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/adnanbranding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[16px] font-medium tracking-tight"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40px] md:h-[48px]" />
    </>
  )
}
