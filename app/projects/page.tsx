import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectsGrid from "@/components/projects-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Saatvik Pradhan",
  description: "Explore Saatvik Pradhan's portfolio of projects in AI, Machine Learning, and Software Development.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          My Projects
        </h1>
        <ProjectsGrid />
      </div>
      <Footer />
    </main>
  )
}

