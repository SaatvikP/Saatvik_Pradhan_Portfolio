"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
  {
    id: 1,
    title: "Course Pailot",
    description:
      "A course recommendation system analyzing 10,000+ courses and 200 majors, delivering tailored plans based on preferences and improving accuracy by 40% through streamlined data collection.",
    tags: ["React.js", "Node.js", "Firebase", "Machine Learning"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "course-pailot",
  },
  {
    id: 2,
    title: "MRI Classification System",
    description:
      "Developed a pipeline leveraging 3D CNNs, SVM, and Random Forest to classify MRI scans into 4 groups, achieving 65.9% multiclass accuracy and 76.4% binary accuracy.",
    tags: ["Python", "TensorFlow", "3D CNNs", "SVM"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "mri-classification",
  },
  {
    id: 3,
    title: "Adaptive Learning Algorithm",
    description:
      "Engineered an adaptive learning algorithm to adjust rates based on rejects, improving WisdomNet's reliability by 90% for safety-critical use.",
    tags: ["Python", "Machine Learning", "Algorithm Design"],
    image: "/placeholder.svg?height=600&width=1200",
    slug: "adaptive-learning",
  },
]

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="section-heading gradient-text"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Card
              className={cn(
                "h-full flex flex-col overflow-hidden glass-effect border-primary/10 transition-all duration-300",
                hoveredProject === index ? "transform scale-[1.02] shadow-lg shadow-primary/10" : "",
              )}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === index ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
              </div>

              <CardContent className="flex-grow pt-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary-foreground">
                      +{project.tags.length - 2} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full btn-glow" asChild>
                  <Link href={`/projects/${project.slug}`} className="flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex justify-center mt-12"
      >
        <Button size="lg" className="gradient-border" asChild>
          <Link href="/projects" className="flex items-center gap-2">
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </div>
  )
}

