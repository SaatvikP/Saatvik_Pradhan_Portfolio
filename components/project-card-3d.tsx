"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    tags: string[]
    image: string
    github: string
    demo: string
    slug: string
    period?: string
  }
}

export default function ProjectCard3D({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = (y - centerY) / 20
    const rotateYValue = (centerX - x) / 20

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const resetRotation = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        resetRotation()
      }}
      onMouseMove={handleMouseMove}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className="relative w-full h-full bg-background border border-primary/10 rounded-xl overflow-hidden shadow-xl"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(0)",
        }}
      >
        {/* Image with parallax effect */}
        <div
          className="relative h-56 w-full overflow-hidden"
          style={{
            transform: `translateZ(${isHovered ? "20px" : "0px"})`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>

          {/* Overlay with buttons that appear on hover */}
          {project.github !== "#" && (
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                pointerEvents: isHovered ? "auto" : "none",
                transform: `translateZ(30px)`,
              }}
            >
              <Button size="sm" variant="outline" className="border-primary text-primary" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          )}
        </div>

        {/* Content with 3D effect */}
        <div
          className="p-6"
          style={{
            transform: `translateZ(${isHovered ? "40px" : "0px"})`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <h3
            className="text-xl font-bold mb-2"
            style={{
              transform: `translateZ(${isHovered ? "10px" : "0px"})`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {project.title}
          </h3>
          {project.period && <p className="text-sm text-muted-foreground mb-2">{project.period}</p>}

          <p
            className="text-muted-foreground mb-4 line-clamp-3"
            style={{
              transform: `translateZ(${isHovered ? "15px" : "0px"})`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {project.description}
          </p>

          <div
            className="flex flex-wrap gap-2 mb-4"
            style={{
              transform: `translateZ(${isHovered ? "20px" : "0px"})`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary-foreground">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground">
                +{project.tags.length - 3} more
              </Badge>
            )}
          </div>

          <Button
            className="w-full btn-glow"
            style={{
              transform: `translateZ(${isHovered ? "25px" : "0px"})`,
              transition: "transform 0.3s ease-out",
            }}
            asChild
          >
            <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2">
              View Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: `0 0 30px 5px rgba(59, 130, 246, 0.3)`,
            pointerEvents: "none",
          }}
        />
      </div>
    </motion.div>
  )
}

