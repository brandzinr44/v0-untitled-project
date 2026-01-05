"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoad"> {
  skeletonClassName?: string
}

export function ImageWithSkeleton({ className, skeletonClassName, alt, ...props }: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-full">
      {/* Skeleton loader */}
      {isLoading && <div className={cn("absolute inset-0 bg-white/5 animate-pulse", skeletonClassName)} />}

      <Image
        {...props}
        alt={alt}
        className={cn("transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
