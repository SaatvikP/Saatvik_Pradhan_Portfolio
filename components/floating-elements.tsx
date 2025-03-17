"use client"

import { motion } from "framer-motion"
import { Code, Database, BrainCircuit, Layers, Server, Cloud, Cpu, Globe, Zap, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingElements() {
  // Array of tech icons
  const icons = [
    { id: "icon-1", icon: <Code className="h-full w-full" />, color: "rgba(97, 218, 251, 0.7)" },
    { id: "icon-2", icon: <BrainCircuit className="h-full w-full" />, color: "rgba(255, 64, 129, 0.7)" },
    { id: "icon-3", icon: <Database className="h-full w-full" />, color: "rgba(71, 162, 72, 0.7)" },
    { id: "icon-4", icon: <Layers className="h-full w-full" />, color: "rgba(49, 120, 198, 0.7)" },
    { id: "icon-5", icon: <Server className="h-full w-full" />, color: "rgba(255, 153, 0, 0.7)" },
    { id: "icon-6", icon: <Cloud className="h-full w-full" />, color: "rgba(36, 150, 237, 0.7)" },
    { id: "icon-7", icon: <Cpu className="h-full w-full" />, color: "rgba(156, 39, 176, 0.7)" },
    { id: "icon-8", icon: <Globe className="h-full w-full" />, color: "rgba(109, 179, 63, 0.7)" },
    { id: "icon-9", icon: <Zap className="h-full w-full" />, color: "rgba(255, 202, 40, 0.7)" },
    { id: "icon-10", icon: <Sparkles className="h-full w-full" />, color: "rgba(255, 111, 0, 0.7)" },
  ]

  // State to hold the configured icons with their positions
  const [configuredIcons, setConfiguredIcons] = useState([])

  // Only generate random positions on the client side
  useEffect(() => {
    const newConfiguredIcons = icons.map((item, index) => {
      // Calculate random positions around the center area
      const left = 20 + Math.random() * 60 // 20% to 80% of container width
      const top = Math.random() * 100 // 0% to 100% of container height
      const size = 30 + Math.random() * 20 // 30px to 50px
      const duration = 15 + Math.random() * 20 // 15s to 35s
      const delay = Math.random() * 5 // 0s to 5s
      const xMove1 = Math.random() * 100 - 50
      const xMove2 = Math.random() * -100 + 50
      const yMove1 = Math.random() * -100 + 50
      const yMove2 = Math.random() * 100 - 50
      const rotate1 = Math.random() * 360
      const rotate2 = Math.random() * -360

      return {
        ...item,
        id: `${item.id}-${index}`, // Ensure id is truly unique
        left,
        top,
        size,
        duration,
        delay,
        xMove1,
        xMove2,
        yMove1,
        yMove2,
        rotate1,
        rotate2,
      }
    })

    setConfiguredIcons(newConfiguredIcons)
  }, [])

  // Don't render anything during SSR
  if (configuredIcons.length === 0) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {configuredIcons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute rounded-full flex items-center justify-center"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: item.size,
            height: item.size,
            backgroundColor: item.color,
            color: "white",
            boxShadow: `0 0 15px ${item.color}`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            scale: [0, 1, 1, 0],
            x: [0, item.xMove1, item.xMove2, 0],
            y: [0, item.yMove1, item.yMove2, 0],
            rotate: [0, item.rotate1, item.rotate2, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  )
}

