import type { Metadata } from "next"
import PackagingClient from "./packaging-client"

export const metadata: Metadata = {
  title: "Custom Packaging Design Services | lOZ!NR",
  description:
    "Strategic packaging design that turns shelves into sales. We create memorable packaging that protects your product, attracts customers, and builds brand loyalty.",
  keywords: ["packaging design", "custom packaging", "product packaging", "box design", "label design"],
  openGraph: {
    title: "Custom Packaging Design Services | lOZ!NR",
    description: "Packaging that converts shelf browsers into loyal customers",
    url: "https://lozinr.com/services/packaging",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Packaging Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://lozinr.com/services/packaging",
  },
}

export default function PackagingPage() {
  return <PackagingClient />
}
