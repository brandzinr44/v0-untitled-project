"use client"

import { useState, useRef, useEffect } from "react"

interface BudgetDropdownProps {
  value: string
  onChange: (value: string) => void
  options: Array<{ label: string; value: string }>
  required?: boolean
}

export function BudgetDropdown({ value, onChange, options, required = false }: BudgetDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (budgetValue: string) => {
    setSelectedBudget(budgetValue)
    onChange(budgetValue)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between h-12 lg:h-18 px-4 bg-chart-5/10 text-chart-5 rounded-lg border border-chart-5/50 focus-visible:ring-[2px] focus-visible:ring-chart-5/60 focus-visible:border-chart-5/60 outline-none"
        type="button"
      >
        <span className="text-chart-5/80 text-[14px] lg:text-[16px]">{selectedBudget || "Select a Budget"}</span>
        <svg
          className={`w-5 h-5 text-chart-5/80 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-chart-5/50 rounded-lg overflow-hidden z-50 transition-all duration-300 animate-dropdownOpen">
          {/* Currency label */}
          <div className="px-4 py-2 text-xs text-chart-5/80 bg-chart-5/10 border-b border-chart-5/50">$USD</div>

          {/* Budget options */}
          <div className="divide-y divide-chart-5/30">
            {options.map((budget, index) => (
              <button
                key={budget.value}
                onClick={() => handleSelect(budget.value)}
                className={`w-full text-left px-4 py-3 transition-colors ${
                  selectedBudget === budget.value ? "bg-chart-5 text-chart-5" : "hover:bg-chart-5/30 text-chart-5 "
                }`}
                style={{
                  animation: `dropdownOpen 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                  animationDelay: `${index * 30}ms`,
                }}
                type="button"
              >
                {budget.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
