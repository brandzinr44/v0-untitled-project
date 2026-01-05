import type { Metadata } from "next"

import AboutClient from "./about-client"

export const metadata: Metadata = {
  title: "About lOZ!NR | Our Story, Team & Creative Philosophy",
  description:
    "Learn about lOZ!NR's journey, creative philosophy, and the team behind bold brand identities. Discover how we build brands that last.",
  openGraph: {
    title: "About lOZ!NR | Our Story & Creative Philosophy",
    description: "Learn about lOZ!NR's journey and how we create bold, lasting brand identities",
    url: "https://lozinr.com/about",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "lOZ!NR Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://lozinr.com/about",
  },
}

export default function AboutPage() {
  return <AboutClient />
}
