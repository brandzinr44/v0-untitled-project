"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { useScrollHeight } from "@/hooks/use-scroll-height"

interface Project {
  id: string
  title: string
  category: string
  image: string
  slug: string
  tags?: string[]
}

const projects: Project[] = [
  {
    id: "1",
    title: "Finure Health",
    category: "Branding",
    image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
    slug: "Finure-Health",
    tags: ["Healthcare", "Branding", "Identity"],
  },
  {
    id: "2",
    title: "Trevora",
    category: "Trading Branding",
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2001.jpg",
    slug: "Trevora",
    tags: ["Finance", "Trading", "Digital"],
  },
  {
    id: "3",
    title: "lOZ!NR",
    category: "Branding",
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-01.jpg",
    slug: "lozinr",
    tags: ["Agency", "Branding", "Creative"],
  },
  {
    id: "4",
    title: "Luvena",
    category: "Logo & Branding",
    image: "https://bq45eawil9xlp5ci.public.blob.vercel-storage.com/Luvena01.jpg",
    slug: "luvena",
    tags: ["Beauty", "Logo", "Packaging"],
  },
]

const handleProjectClick = (slug: string) => {
  console.log(`[v0] Navigating to project: ${slug}`)
  // In a real app, this would be window.location.href = `/gallery/${slug}`
  // For now, we'll just log it or redirect to home if the page isn't built
}

export function ProjectThumbnails() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const projectRefsArray = useRef<(HTMLDivElement | null)[]>([])

  const imageHeight = useScrollHeight({
    minHeight: 500,
    maxHeight: 550,
    scrollMultiplier: 0.3,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefsArray.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleProjects((prev) => {
              const newVisible = [...prev]
              newVisible[index] = true
              return newVisible
            })
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    projectRefsArray.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  if (isLoading) {
    return (
      <section className="py-12 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-17 max-w-full mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="w-full h-[400px] md:h-[500px] bg-gray-800 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-800 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-800 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-17 max-w-full mx-auto overflow-hidden">
        {projects.map((project, index) => {
          const cardVisible = visibleProjects[index] || false

          return (
            <div
              key={project.id}
              ref={(el) => {
                projectRefsArray.current[index] = el
              }}
              className={`group overflow-hidden transition-all duration-100 transform flex flex-col cursor-pointer fade-in-up`}
              style={{ transitionDelay: `${index * 100}ms`, animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project.slug)}
            >
              <div className="w-full overflow-hidden relative transition-all duration-100 aspect-16-12">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div
                className={` pt-4 p-0 flex justify-between items-end transition-all duration-200 transform ${
                  cardVisible ? "" : ""
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="flex-1">
                  <h3 className="text-chart-5 font-semibold lg:text-[20px]">{project.title}</h3>
                  <p className="text-chart-5/80 font-regular lg:text-[14px] mb-2">{project.category}</p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-chart-5/10 text-chart-5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-11 h-11 rounded-full bg-[#ff3b00] flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 flex-shrink-0">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
