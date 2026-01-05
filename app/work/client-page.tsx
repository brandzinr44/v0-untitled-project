"use client"

import { useState, useMemo } from "react"
import { WorkHeader } from "@/components/work-header"
import { WorkThumbnails, allProjects } from "@/components/work-thumbnails"
import { WorkFilters } from "@/components/work-filters"
import { PageLoader } from "@/components/page-loader"

export default function WorkClientPage() {
  const [activeFilter, setActiveFilter] = useState("ALL")

  const industries = useMemo(() => {
    const industryMap = new Map<string, number>()
    allProjects.forEach((project) => {
      industryMap.set(project.industry, (industryMap.get(project.industry) || 0) + 1)
    })

    const industriesArray = [
      { name: "ALL", count: allProjects.length },
      ...Array.from(industryMap.entries())
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count),
    ]
    return industriesArray
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") {
      return allProjects
    }
    return allProjects.filter((project) => project.industry === activeFilter)
  }, [activeFilter])

  return (
    <PageLoader>
      <main className="min-h-screen bg-background transition-colors duration-300">
        <WorkHeader
          showFilters={false}
          tagline="We create brands that lead, combining strategy, motion and craft to shape iconic identities."
          location="Latitude: 23.4607° N  Longitude: 91.1809° E"
        />
        <WorkFilters categories={industries} onFilterChange={setActiveFilter} activeFilter={activeFilter} />
        <WorkThumbnails filteredProjects={filteredProjects} />
      </main>
    </PageLoader>
  )
}
