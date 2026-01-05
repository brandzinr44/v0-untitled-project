"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    setIsTransitioning(true)

    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsTransitioning(false)
    }, 200)

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
      )}
    >
      {displayChildren}
    </div>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
