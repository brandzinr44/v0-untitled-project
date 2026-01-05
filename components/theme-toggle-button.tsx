"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!document.startViewTransition) {
      setTheme(theme === "dark" ? "light" : "dark")
      return
    }

    document.startViewTransition(() => {
      setTheme(theme === "dark" ? "light" : "dark")
    })
  }

  if (!mounted) return null

  return (
    <>
      <button
        onClick={handleThemeToggle}
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-chart-5/40 text-chart-5-foreground "
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 transition-transform duration-300 fill-current" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 fill-current" />
        )}
      </button>
    </>
  )
}
