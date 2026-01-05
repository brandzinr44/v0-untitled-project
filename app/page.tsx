import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { ProjectThumbnails } from "@/components/project-thumbnails"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Lozinr | Logo & Brand Identity Design Agency",
  description:
    "Lozinr is a strategic design agency specializing in logos, brand identity systems, and high-impact visual branding for modern businesses.",
  openGraph: {
    title: "Lozinr — Logo & Brand Identity Design Agency",
    description:
      "Strategic logo design and brand identity systems crafted for clarity, consistency, and lasting impact.",
    url: "https://lozinr.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lozinr Branding Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lozinr | Logo & Brand Identity Design Agency",
    description:
      "Strategic logo design and brand identity systems crafted for clarity, consistency, and lasting impact.",
  },
  alternates: {
    canonical: "https://lozinr.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      {/* Removed UnifiedHeader component */}
      <Hero />
      <ProjectThumbnails />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  )
}
