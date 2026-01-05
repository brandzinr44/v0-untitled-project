"use client"

import { WorkHeader } from "@/components/work-header"
import { ServicesDetailGrid } from "@/components/services-detail-grid"
import { PageLoader } from "@/components/page-loader"

export default function ServicesClient() {
  return (
    <PageLoader>
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <WorkHeader
          title="Services"
          showFilters={false}
          tagline="We craft brand experiences that are timeless, scalable and built to connect with clarity and emotion."
          location="Latitude: 23.4607° N  Longitude: 91.1809° E"
        />
        <ServicesDetailGrid />
      </main>
    </PageLoader>
  )
}
