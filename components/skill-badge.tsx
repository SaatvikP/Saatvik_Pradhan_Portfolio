"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  icon?: React.ReactNode
  className?: string
  delay?: number
}

export default function SkillBadge({ name, icon, className, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -5 }}
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary-foreground",
        "border border-primary/20 backdrop-blur-sm",
        className,
      )}
    >
      {icon && <span className="mr-1.5">{icon}</span>}
      {name}
    </motion.div>
  )
}

