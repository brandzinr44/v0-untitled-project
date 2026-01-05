"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { COUNTRIES } from "@/data/countries"

export function PhoneInput({
  value,
  onChange,
  onCountryChange,
  placeholder = "00000 00000",
  className = "",
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredCountries = COUNTRIES.filter(
    (country) => country.country.toLowerCase().includes(searchTerm.toLowerCase()) || country.code.includes(searchTerm),
  )

  const handleCountrySelect = (country: (typeof COUNTRIES)[0]) => {
    setSelectedCountry(country)
    if (onCountryChange) {
      onCountryChange(country.code)
    }
    setIsOpen(false)
    setSearchTerm("")
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isOpen])

  return (
    <div className={`w-full ${className}`}>
      <div ref={dropdownRef} className="relative w-full min-w-0">
        <div className="relative w-full bg-chart-5/10 text-chart-5 rounded-lg border border-chart-5/50 flex items-center lg:h-18 h-12 overflow-hidden focus-within:ring-[2px] focus-within:ring-chart-5/60 focus-within:border-chart-5/60 lg:placeholder:text-[16px] placeholder:text-[12px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-full px-3 py-2 flex rounded-l-lg items-center gap-1 border-r border-chart-5/20 transition-colors flex-shrink-0"
          >
            <span className="text-lg" style={{ fontFamily: "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji" }}>
              {selectedCountry.flag}
            </span>
            <span className="text-xs sm:text-sm text-chart-5/50 font-medium whitespace-nowrap">{selectedCountry.code}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Phone Number Input */}
          <input
            type="tel"
            value={value}
            onChange={handlePhoneChange}
            placeholder={placeholder}
            className="flex-1 h-full px-4 py-2 bg-transparent text-chart-5 placeholder-chart-5/80 focus:outline-none min-w-0 lg:placeholder:text-[16px] placeholder:text-[12px]"
            style={{ color: "#fff" } as React.CSSProperties}
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-chart-5/50 rounded-lg z-50 max-h-64 flex flex-col animate-dropdownOpen">
            {/* Search Input */}
            <div className="p-3 border-b border-chart-5/50 sticky top-0">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-chart-5/80 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-chart-5 text-sm border border-chart-5/30 rounded-lg"
                  autoFocus
                />
              </div>
            </div>

            <div className="overflow-y-auto flex-1">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                  <button
                    key={`${country.code}-${country.country}`}
                    onClick={() => handleCountrySelect(country)}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-chart-5/30 transition-colors flex items-center justify-between border-b border-chart-5/50 last:border-b-0"
                    style={{
                      animation: `dropdownOpen 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
                      animationDelay: `${index * 30}ms`,
                    }}
                  >
                    {/* Left side: Flag and Country Name */}
                    <div className="flex items-center gap-3">
                      <span
                        className="lg:text-xl text-[18px] flex-shrink-0"
                        style={{ fontFamily: "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif" }}
                      >
                        {country.flag}
                      </span>
                      <span className="text-chart-5/ font-medium">{country.country}</span>
                    </div>
                    {/* Right side: Country Code */}
                    <span className="text-chart-5/80 text-sm ml-4 flex-shrink-0">{country.code}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-chart-5 text-sm">No countries found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  onCountryChange?: (countryCode: string) => void
  placeholder?: string
  className?: string
}
