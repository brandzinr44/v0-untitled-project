import type { Metadata } from "next"
import LogoDesignClient from "./logo-design-client"

export const metadata: Metadata = {
  title: "Professional Logo Design Services | lOZ!NR",
  description:
    "Custom logo design services that create memorable brand marks. Our professional logo designers craft unique, timeless logos that capture your brand's essence and drive business growth.",
  keywords: ["logo design", "custom logo", "professional logo design", "brand logo", "logo designer"],
  openGraph: {
    title: "Professional Logo Design Services | lOZ!NR",
    description: "Custom logo design services that create memorable brand marks and lasting impressions",
    url: "https://lozinr.com/services/logo-design",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Logo Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Logo Design Services | lOZ!NR",
    description: "Custom logo design that creates memorable brand identity",
  },
  alternates: {
    canonical: "https://lozinr.com/services/logo-design",
  },
}

export default function LogoDesignPage() {
  return <LogoDesignClient />
}
