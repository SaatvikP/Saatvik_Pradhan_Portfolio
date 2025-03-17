"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export default function SectionReveal({ children, delay = 0, direction = "up", className = "" }: SectionRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getInitialAnimation = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 }
      case "down":
        return { opacity: 0, y: -50 }
      case "left":
        return { opacity: 0, x: 50 }
      case "right":
        return { opacity: 0, x: -50 }
      case "none":
        return { opacity: 0 }
      default:
        return { opacity: 0, y: 50 }
    }
  }

  const getFinalAnimation = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "none":
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialAnimation()}
      animate={inView ? getFinalAnimation() : getInitialAnimation()}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Custom ease curve for smooth reveal
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

