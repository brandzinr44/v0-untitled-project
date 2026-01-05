"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

interface Project {
  id: string
  title: string
  category: string
  image: string
  slug: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    category: "Design",
    image: "/modern-design-project.jpg",
    slug: "project-one",
  },
  {
    id: "2",
    title: "Project Two",
    category: "Development",
    image: "/web-development-project.png",
    slug: "project-two",
  },
  {
    id: "3",
    title: "Project Three",
    category: "Branding",
    image: "/brand-identity-project.png",
    slug: "project-three",
  },
  {
    id: "4",
    title: "Project Four",
    category: "Strategy",
    image: "/strategic-planning-project.jpg",
    slug: "project-four",
  },
]

export function GalleryGrid() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([])
  const projectRefsArray = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => {
        const cardVisible = visibleProjects[index] || false

        return (
          <Link
            key={project.id}
            href={`/gallery/${project.slug}`}
            ref={(el) => {
              projectRefsArray.current[index] = el
            }}
            className={`group bg-muted overflow-hidden transition-all duration-1000 transform flex flex-col cursor-pointer hover:opacity-80 ${
              cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`w-full aspect-square overflow-hidden relative bg-muted transition-all duration-1000 transform ${
                cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 150}ms` }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div
              className={`bg-muted p-6 flex justify-between items-end transition-all duration-1000 transform ${
                cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div>
                <h3 className="text-card-foreground font-medium text-base">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.category}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
