"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { WorkHeader } from "@/components/work-header"

export default function GalleryClientPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 400)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 700)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(timer)
    }
  }, [])

  const projects = [
    {
      id: "1",
      slug: "Finure-Health",
      title: "Finure Health",
      category: "Health Tech Branding",
      client: "Finure Health Inc.",
      year: "2024",
      services: ["Brand Identity", "UI/UX Design", "Marketing Materials"],
      image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Thumbnail.jpg",
    },
    {
      id: "2",
      slug: "Trevora",
      title: "Trevora",
      category: "Trading Platform",
      client: "Trevora Trading",
      year: "2024",
      services: ["Logo Design", "Brand Strategy", "Digital Assets"],
      image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2001.jpg",
    },
    {
      id: "3",
      slug: "lozinr",
      title: "lOZ!NR",
      category: "Agency Branding",
      client: "Internal Project",
      year: "2023",
      services: ["Complete Rebrand", "Web Design", "Marketing"],
      image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-01.jpg",
    },
    {
      id: "4",
      slug: "rijq",
      title: "Rijq",
      category: "Food & Beverage",
      client: "Rijq Restaurant",
      year: "2023",
      services: ["Logo & Branding", "Packaging Design"],
      image: "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%201.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-background z-50 flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pt-20"
      >
        <WorkHeader title="Gallery" showFilters={false} />

        <div className="px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20">
          <motion.button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-300 mb-8 group"
            aria-label="Go back"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft size={18} className="transition-transform duration-300" />
            <span className="text-sm">Back</span>
          </motion.button>
        </div>

        <div className="px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredId === project.id}
                onHover={() => setHoveredId(project.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  )
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: any
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setMousePosition({ x, y })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link href={`/gallery/${project.slug}`} className="group block">
        <motion.div
          className="relative aspect-[4/3] overflow-hidden bg-muted/30 mb-6 rounded-lg"
          animate={{
            scale: isHovered ? 0.98 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div className="absolute inset-0 bg-gradient-to-br from-[#ff3b00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

          <motion.img
            src={project.image || "/placeholder.svg?height=600&width=800&query=gallery project"}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              x: isHovered ? mousePosition.x * 0.03 : 0,
              y: isHovered ? mousePosition.y * 0.03 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-2"
          animate={{
            x: isHovered ? 8 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-foreground/70 transition-colors duration-300">
            {project.title}
          </h2>
          <p className="text-sm md:text-base text-foreground/50">{project.category}</p>
          <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/40 pt-1">
            <span>{project.client}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
