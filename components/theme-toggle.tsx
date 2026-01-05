"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const handleThemeToggle = () => {
    if (isAnimating) return

    // Get button position for dual-wave animation
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const wave1 = document.createElement("div")
      wave1.className = "theme-wave-1"
      wave1.style.left = `${centerX}px`
      wave1.style.top = `${centerY}px`

      const wave2 = document.createElement("div")
      wave2.className = "theme-wave-2"
      wave2.style.left = `${centerX}px`
      wave2.style.top = `${centerY}px`

      document.body.appendChild(wave1)
      document.body.appendChild(wave2)

      setIsAnimating(true)

      // Trigger animations immediately
      setTimeout(() => {
        wave1.classList.add("theme-wave-1-active")
        wave2.classList.add("theme-wave-2-active")
      }, 10)

      // Theme switches when wave 2 fully covers screen (~400ms)
      setTimeout(() => {
        setTheme(isDark ? "light" : "dark")
      }, 400)

      // Cleanup after total animation completes
      setTimeout(() => {
        wave1.remove()
        wave2.remove()
        setIsAnimating(false)
      }, 700)
    }
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleThemeToggle}
      disabled={isAnimating}
      className="fixed bottom-5 right-5 z-40 group"
      aria-label="Toggle theme"
    >
      {/* Main toggle circle */}
      <div
        className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
          isDark ? "bg-white/20" : "bg-black/20"
        }`}
      >
        {/* Inner animated content */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Sun icon - rotates when dark */}
          <div
            className={`absolute transition-all duration-500 ${
              isDark ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line
                x1="4.22"
                y1="4.22"
                x2="5.64"
                y2="5.64"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="18.36"
                y1="18.36"
                x2="19.78"
                y2="19.78"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line
                x1="4.22"
                y1="19.78"
                x2="5.64"
                y2="18.36"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="18.36"
                y1="5.64"
                x2="19.78"
                y2="4.22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Moon icon - rotates when light */}
          <div
            className={`absolute transition-all duration-500 ${
              isDark ? "rotate-0 scale-100 opacity-100" : "rotate-180 scale-0 opacity-0"
            }`}
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
        </div>

        {/* Pulse animation on hover */}
        <div className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
    </button>
  )
}
