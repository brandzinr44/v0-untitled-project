import type { Metadata } from "next"
import RebrandingClient from "./rebranding-client"

export const metadata: Metadata = {
  title: "Professional Rebranding Services | lOZ!NR",
  description:
    "Transform your brand with strategic rebranding. We help established businesses evolve their visual identity, messaging, and market positioning for renewed growth and relevance.",
  keywords: ["rebranding", "brand refresh", "brand evolution", "brand transformation", "brand update"],
  openGraph: {
    title: "Professional Rebranding Services | lOZ!NR",
    description: "Strategic rebranding that refreshes your image and drives business growth",
    url: "https://lozinr.com/services/rebranding",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rebranding Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://lozinr.com/services/rebranding",
  },
}

export default function RebrandingPage() {
  return <RebrandingClient />
}
