"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function PageProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight
    const winHeight = window.innerHeight
    const scrollPercent = scrollTop / (docHeight - winHeight)
    setScrollProgress(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress)
    return () => window.removeEventListener("scroll", calculateScrollProgress)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      style={{ transformOrigin: "left" }}
    />
  )
}

