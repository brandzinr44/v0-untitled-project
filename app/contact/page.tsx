import type { Metadata } from "next"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact lOZ!NR | Get Your Brand Designed",
  description:
    "Get in touch with lOZ!NR to discuss your design and branding needs. Let's create something bold together.",
  openGraph: {
    title: "Contact lOZ!NR",
    description: "Reach out to discuss your design and branding project",
    url: "https://lozinr.com/contact",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact lOZ!NR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://lozinr.com/contact",
  },
}

export default function Contact() {
  return <ContactClient />
}
