"use client"

import { useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

interface Project {
  id: string
  title: string
  category: string
  industry: string
  image: string
  slug: string
  tags?: string[]
}

const allProjects: Project[] = [
  {
    id: "1",
    title: "Finure Health",
    category: "Logo & Branding",
    industry: "HEALTH & WELLNESS",
    image: "https://05nt8uhx23vzdvuu.public.blob.vercel-storage.com/Visa%20Card.jpg",
    slug: "Finure-Health",
    tags: ["Healthcare", "Branding", "Identity"],
  },
  {
    id: "2",
    title: "Trevora",
    category: "Logo & Branding",
    industry: "TECH",
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Trevora%2001.jpg",
    slug: "Trevora",
    tags: ["Finance", "Trading", "Digital"],
  },
  {
    id: "3",
    title: "lOZ!NR",
    category: "Logo & Branding",
    industry: "DESIGN",
    image: "https://dbz3qkxac4rgq1sq.public.blob.vercel-storage.com/Lozinr-01.jpg",
    slug: "lozinr",
    tags: ["Agency", "Branding", "Creative"],
  },
  {
    id: "4",
    title: "Luvena",
    category: "Logo & Branding",
    industry: "FOOD & BEVERAGE",
    image: "https://bq45eawil9xlp5ci.public.blob.vercel-storage.com/Luvena01.jpg",
    slug: "luvena",
    tags: ["Beauty", "Logo", "Packaging"],
  },
  {
    id: "5",
    title: "Rijq",
    category: "Food & Bakery",
    industry: "BAKERY",
    image: "https://q4bkxvdmgiqmmhbe.public.blob.vercel-storage.com/Frame%201.jpg",
    slug: "rijq",
    tags: ["Food", "Bakery", "Branding"],
  },
]

interface WorkThumbnailsProps {
  filteredProjects: Project[]
}

export function WorkThumbnails({ filteredProjects }: WorkThumbnailsProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-3 md:px-6 lg:px-8">
      <style>{`
        .work-thumbnail-hover {
          position: relative;
          overflow: hidden;
        }
        .work-thumbnail-hover::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: #ff3b00;
          transition: height 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 1;
          
        }
        .work-thumbnail-hover::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: rgba(255, 59, 0, 0.3);
          transition: height 0.8s cubic-bezier(0.19, 1, 0.22, 1);
          z-index: 0;
          
        }
        .group:hover .work-thumbnail-hover::before {
          height: 100%;
        }
        .group:hover .work-thumbnail-hover::after {
          height: 100%;
        }
        .work-thumbnail-hover > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-17 max-w-full mx-auto overflow-hidden">
        {filteredProjects.map((project, index) => (
          <ThumbnailCard
            key={project.id}
            project={project}
            index={index}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  )
}

function ThumbnailCard({
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
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden cursor-pointer flex flex-col"
      onClick={() => (window.location.href = `/gallery/${project.slug}`)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="w-full overflow-hidden relative transition-all duration-100 aspect-16-10 work-thumbnail-hover "
        
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      <motion.div
        className="pt-4 p-0 flex justify-between items-end"
        
        transition={{ duration: 0.3 }}
      >
        <div className="flex-1">
          <h3 className="text-chart-5 font-semibold lg:text-[20px] transition-colors duration-300 group-hover:text-chart-5/80">
            {project.title}
          </h3>
          <p className="text-chart-5/80 font-regular lg:text-[14px] mb-2">{project.category}</p>
          {project.tags && (
            <motion.div
              className="flex flex-wrap gap-2 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-chart-5/10 text-chart-5/70 rounded-full">
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>
        <motion.div
          className="w-11 h-11 rounded-full bg-[#ff3b00] flex items-center justify-center flex-shrink-0"
          animate={{
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export { allProjects }
