import type { Metadata } from "next"
import ServicesClient from "./services-client"

export const metadata: Metadata = {
  title: "Design Services | lOZ!NR - Logo, Branding & Brand Identity",
  description:
    "Professional design services including logo design, brand identity, packaging, rebranding, and visual design. Custom solutions for your business.",
  openGraph: {
    title: "Design Services | lOZ!NR",
    description: "Professional design services including logo design, brand identity, and branding solutions",
    url: "https://lozinr.com/services",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "lOZ!NR Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://lozinr.com/services",
  },
}

export default function Services() {
  return <ServicesClient />
}
