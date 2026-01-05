import type { Metadata } from "next"
import BrandIdentityClient from "./brand-identity-client"
import { WorkHeader } from "@/components/work-header"

export const metadata: Metadata = {
  title: "Complete Brand Identity Design Services | lOZ!NR",
  description:
    "Comprehensive brand identity design that goes beyond logos. We create cohesive visual systems including colors, typography, imagery, and brand voice for lasting impressions.",
  keywords: ["brand identity", "brand design", "brand development", "visual identity", "brand strategy"],
  openGraph: {
    title: "Complete Brand Identity Design Services | lOZ!NR",
    description: "Create a cohesive visual identity that tells your brand story",
    url: "https://lozinr.com/services/brand-identity",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Identity Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://lozinr.com/services/brand-identity",
  },
}

export default function BrandIdentityPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <WorkHeader title="Brand Identity" showFilters={false} />

      <BrandIdentityClient />
    </main>
  )
}
