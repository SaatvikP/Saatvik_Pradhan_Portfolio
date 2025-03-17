"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 1],
                opacity: 1,
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 1,
                times: [0, 0.5, 0.7, 0.9, 1],
              }}
            >
              SP
            </motion.div>
            <div className="relative w-48 h-1 bg-muted overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: "0%" }}
                animate={{
                  width: ["0%", "40%", "60%", "100%"],
                  opacity: [1, 0.8, 0.9, 1],
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  times: [0, 0.4, 0.7, 1],
                }}
              />
            </div>
            <motion.p
              className="text-muted-foreground mt-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Loading amazing content...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

