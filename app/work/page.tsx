import type { Metadata } from "next"
import WorkClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Our Work | lOZ!NR Design Portfolio & Case Studies",
  description:
    "Explore lOZ!NR's portfolio of award-winning design projects, brand identities, logos, and creative work for global brands and startups.",
  openGraph: {
    title: "Our Work | lOZ!NR Design Portfolio",
    description: "Award-winning design projects and case studies from lOZ!NR",
    url: "https://lozinr.com/work",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "lOZ!NR Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://lozinr.com/work",
  },
}

export default function WorkPage() {
  return <WorkClientPage />
}
