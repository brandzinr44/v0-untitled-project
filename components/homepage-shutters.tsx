"use client"

import { useEffect, useState } from "react"

export function HomePageShutters() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Start fade out after a brief moment
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="fixed inset-0 z-[500] bg-[#0b0b0b] transition-opacity duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    />
  )
}
