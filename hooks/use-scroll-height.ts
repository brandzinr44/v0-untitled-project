"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollHeightOptions {
  minHeight: number
  maxHeight: number
  scrollMultiplier?: number
}

export function useScrollHeight(options: ScrollHeightOptions) {
  const { minHeight, maxHeight, scrollMultiplier = 0.5 } = options
  const [height, setHeight] = useState(minHeight)
  const lastScrollRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        const currentScroll = window.scrollY
        const scrollDelta = Math.abs(currentScroll - lastScrollRef.current)
        lastScrollRef.current = currentScroll

        // Scroll speed is multiplied by scrollMultiplier to control sensitivity
        const scrollSpeedHeight = scrollDelta * scrollMultiplier
        const newHeight = Math.min(minHeight + scrollSpeedHeight, maxHeight)

        setHeight(newHeight)

        rafRef.current = null
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [minHeight, maxHeight, scrollMultiplier])

  return height
}
