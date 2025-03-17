"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Hero from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import SectionReveal from "@/components/section-reveal"
import { motion } from "framer-motion"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section id="home" className="min-h-screen flex items-center relative">
          <Hero />
        </section>

        <SectionReveal>
          <section className="py-20 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Explore More
            </h2>

            {/* Floating elements around the buttons */}
            <FloatingElements />

            <div className="flex flex-wrap justify-center gap-4 relative z-10 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/about" className="flex items-center gap-2">
                    About Me
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/projects" className="flex items-center gap-2">
                    Projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/experience" className="flex items-center gap-2">
                    Experience
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </SectionReveal>
      </div>
      <Footer />
    </main>
  )
}

