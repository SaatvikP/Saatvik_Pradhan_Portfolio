"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

interface CursorPosition {
  x: number
  y: number
  timestamp: number
}

export default function CursorTrail() {
  const [cursorPositions, setCursorPositions] = useState<CursorPosition[]>([])
  const { resolvedTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Don't show cursor trail on mobile devices
    if (isMobile) return

    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPositions((prev) => {
        // Keep only the last 10 positions
        const newPositions = [...prev, { x: e.clientX, y: e.clientY, timestamp: Date.now() }]
        if (newPositions.length > 10) {
          return newPositions.slice(newPositions.length - 10)
        }
        return newPositions
      })
    }

    // Clean up old positions
    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      setCursorPositions((prev) => prev.filter((pos) => now - pos.timestamp < 500))
    }, 100)

    window.addEventListener("mousemove", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("resize", checkMobile)
      clearInterval(cleanupInterval)
    }
  }, [isMobile])

  if (isMobile || cursorPositions.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {cursorPositions.map((position, index) => {
          const isLast = index === cursorPositions.length - 1
          const size = isLast ? 12 : 8 * (index / cursorPositions.length)
          const opacity = isLast ? 0.6 : 0.3 * (index / cursorPositions.length)

          return (
            <motion.div
              key={position.timestamp}
              className="absolute rounded-full"
              style={{
                left: position.x,
                top: position.y,
                backgroundColor: resolvedTheme === "dark" ? "hsl(var(--primary))" : "hsl(var(--primary))",
                width: size,
                height: size,
                opacity: opacity,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )
        })}
      </AnimatePresence>
    </div>
  )
}

