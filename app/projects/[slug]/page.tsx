import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, Calendar, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SectionReveal from "@/components/section-reveal"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const slug = params.slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.name} | Saatvik Pradhan`,
    description: project.description,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = params.slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <SectionReveal>
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {project.name}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{project.period}</span>
            </div>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <SectionReveal delay={0.1}>
              <div className="relative w-full h-80 md:h-[500px] mb-8 rounded-lg overflow-hidden border border-primary/10 shadow-xl shadow-primary/5">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="p-6 bg-card rounded-lg border border-border mb-8">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Tag className="mr-2 h-5 w-5 text-primary" />
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.description}</p>

                <div className="bg-card rounded-lg border border-border p-6 my-8">
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                    <li>Implemented using {project.tags.slice(0, 3).join(", ")}</li>
                    <li>Developed during {project.period}</li>
                    <li>Focused on performance, usability, and modern design principles</li>
                    <li>Utilized best practices for code organization and maintainability</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-4">Development Process</h2>
                <p className="text-muted-foreground mb-6">
                  This project was developed with a focus on creating a robust and scalable solution. The development
                  process involved careful planning, implementation of key features, rigorous testing, and deployment.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SectionReveal delay={0.2}>
              <div className="sticky top-24 space-y-8">
                <div className="bg-card rounded-lg border border-border p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>

                  <div className="space-y-4">
                    <div className="pb-4 border-b border-border">
                      <h4 className="text-sm font-medium text-muted-foreground">Project Type</h4>
                      <p className="font-medium">{project.tags[0]}</p>
                    </div>

                    <div className="pb-4 border-b border-border">
                      <h4 className="text-sm font-medium text-muted-foreground">Timeline</h4>
                      <p className="font-medium">{project.period}</p>
                    </div>

                    <div className="pb-4 border-b border-border">
                      <h4 className="text-sm font-medium text-muted-foreground">Primary Technologies</h4>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-background">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      {project.github !== "#" && (
                        <Button className="w-full btn-glow" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg border border-primary/10 p-6">
                  <h3 className="text-xl font-bold mb-4">Related Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span key={tag} className="bg-primary/10 text-primary-foreground px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

