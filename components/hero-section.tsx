"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, ChevronDown } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-16 z-10">
        <div className="flex flex-col lg:flex-row items-center w-full">
          {/* Left column: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/5 text-center lg:text-left lg:pl-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-7xl lg:text-8xl font-bold mb-4 text-foreground">HELLO</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl lg:text-4xl font-medium mb-4 text-foreground">I'm Saatvik Pradhan</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="h-10"
            >
              {isMounted && (
                <TypeAnimation
                  sequence={["AI/ML Engineer", 2000, "Software Developer", 2000, "Researcher", 2000]}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                  className="text-xl lg:text-2xl text-foreground font-medium"
                />
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-muted-foreground my-8 max-w-md mx-auto lg:mx-0"
            >
              Passionate about leveraging AI and machine learning to solve complex problems. Computer Science student at
              Schreyer Honors College, Penn State University.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/projects" className="flex items-center gap-2">
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Me
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}>
                <SocialLink href="https://github.com/SaatvikP" icon={<Github className="w-6 h-6" />} label="GitHub" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}>
                <SocialLink
                  href="https://linkedin.com/in/saatvik-pradhan"
                  icon={<Linkedin className="w-6 h-6" />}
                  label="LinkedIn"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}>
                <SocialLink href="mailto:saatvikpradhan@gmail.com" icon={<Mail className="w-6 h-6" />} label="Email" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column: Profile Image - positioned far to the right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:w-3/5 flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] lg:mr-[-100px]">
              {/* Animated rings around the image */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ scale: [1.15, 1.2, 1.15] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-secondary/20"
                animate={{ scale: [1.3, 1.35, 1.3] }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              {/* Glow effect behind the image */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 blur-2xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              {/* Profile image */}
              <motion.div
                className="relative rounded-full overflow-hidden border-4 border-primary/20"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/portfoliopic.jpg"
                  alt="Saatvik Pradhan"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 2,
        }}
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground hover:text-primary transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

