"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ExperienceTimeline from "@/components/experience-timeline"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import SectionReveal from "@/components/section-reveal"
import { useState } from "react"

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience")

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Experience & Education
        </h1>

        <div className="flex justify-center mb-12">
          <Button size="lg" className="flex items-center gap-2 gradient-border" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>

        <SectionReveal>
          <div className="w-full">
            <div className="flex justify-center mb-12 sticky top-20 z-30 bg-background/80 backdrop-blur-md py-4">
              <div className="grid w-full max-w-md grid-cols-2 gap-2">
                <Button
                  variant={activeTab === "experience" ? "default" : "outline"}
                  onClick={() => setActiveTab("experience")}
                  className="flex items-center gap-2 py-3 text-base font-medium"
                >
                  <Briefcase className="h-5 w-5" />
                  Professional Experience
                </Button>
                <Button
                  variant={activeTab === "education" ? "default" : "outline"}
                  onClick={() => setActiveTab("education")}
                  className="flex items-center gap-2 py-3 text-base font-medium"
                >
                  <GraduationCap className="h-5 w-5" />
                  Education
                </Button>
              </div>
            </div>

            <div className="mt-6">
              {activeTab === "experience" ? (
                <ExperienceTimeline type="experience" />
              ) : (
                <ExperienceTimeline type="education" />
              )}
            </div>
          </div>
        </SectionReveal>
      </div>
      <Footer />
    </main>
  )
}

