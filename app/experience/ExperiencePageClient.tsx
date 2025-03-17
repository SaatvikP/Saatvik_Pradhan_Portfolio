"use client"

import Navbar from "../../components/navbar"
import Footer from "@/components/footer"
import ExperienceTimeline from "@/components/experience-timeline"
import SectionReveal from "@/components/section-reveal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ExperiencePageClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <SectionReveal>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Experience & Education
          </h1>
          <p className="text-muted-foreground max-w-3xl mb-12">
            My professional journey and academic background, showcasing my growth, skills, and achievements over the
            years.
          </p>
        </SectionReveal>

        <ExperienceTabsSection />
      </div>
      <Footer />
    </main>
  )
}

function ExperienceTabsSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience")

  return (
    <div className="mb-20">
      <div className="flex flex-wrap gap-4 mb-12 sticky top-20 z-30 bg-background/80 backdrop-blur-md py-4">
        <Button
          variant={activeTab === "experience" ? "default" : "outline"}
          onClick={() => setActiveTab("experience")}
          className="min-w-[180px]"
        >
          Professional Experience
        </Button>
        <Button
          variant={activeTab === "education" ? "default" : "outline"}
          onClick={() => setActiveTab("education")}
          className="min-w-[180px]"
        >
          Education
        </Button>
      </div>

      <SectionReveal>
        {activeTab === "experience" ? (
          <ExperienceTimeline type="experience" />
        ) : (
          <ExperienceTimeline type="education" />
        )}
      </SectionReveal>
    </div>
  )
}

