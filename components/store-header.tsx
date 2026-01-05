"use client"

interface StoreHeaderProps {
  title?: string
  subtitle?: string
}

export function StoreHeader({ subtitle }: StoreHeaderProps) {
  return (
    <div className="bg-[#0b0b0b] text-white font-sans pt-25 lg:pt-24 pb-4 px-1 px-3 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Subtitle */}
        {subtitle && <p className="text-lg md:text-xl text-text/70 max-w-2xl font-light">{subtitle}</p>}
      </div>
    </div>
  )
}
