import type { Metadata } from "next"
import GalleryClientPage from "./gallery-client"

export const metadata: Metadata = {
  title: "Gallery | lOZ!NR Design Projects & Visual Work",
  description: "Browse our gallery of creative design projects, visual work, and design inspirations from lOZ!NR.",
  openGraph: {
    title: "Gallery | lOZ!NR Design Projects",
    description: "View our creative design projects and visual work",
    url: "https://lozinr.com/gallery",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "lOZ!NR Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://lozinr.com/gallery",
  },
}

export default function GalleryPage() {
  return <GalleryClientPage />
}
