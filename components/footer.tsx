"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="border-t border-border/50 py-8 mt-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={footerVariants}
          className="flex flex-col items-center"
        >
          <motion.div whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-5 left-1/2 transform -translate-x-1/2 rounded-full gradient-border"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="#home" className="text-2xl font-bold gradient-text mb-4">
              SP
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-6 mb-6">
            <motion.a
              href="https://github.com/SaatvikP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/saatvik-pradhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: -5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:saatvikpradhan@gmail.com"
              aria-label="Email"
              className="hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-6">
            {["Home", "About", "Experience", "Projects", "Contact"].map((item, index) => (
              <motion.div key={item} whileHover={{ y: -2, color: "hsl(var(--primary))" }} whileTap={{ y: 0 }}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-muted-foreground transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground text-sm">
            &copy; {currentYear} Saatvik Pradhan. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

