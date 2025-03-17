"use client"

import { useInView } from "react-intersection-observer"
import ProjectCard3D from "./project-card-3d"
import SectionReveal from "@/components/section-reveal"
import { projects } from "@/data/projects"

export default function ProjectsGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <SectionReveal key={`project-${project.id}-${project.slug}-${index}`} delay={index * 0.1} direction="up">
          <ProjectCard3D project={project} />
        </SectionReveal>
      ))}
    </div>
  )
}

