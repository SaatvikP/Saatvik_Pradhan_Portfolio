"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ScrollIndicator() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
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
  )
}

