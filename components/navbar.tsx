"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { Menu, X, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div variants={itemVariants} className="flex-shrink-0">
            <Link href="/" className="text-xl md:text-2xl font-bold gradient-text">
              SP
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav variants={itemVariants} className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.title} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={item.href}
                  className={cn(
                    "font-medium relative py-1 transition-colors",
                    pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {pathname === item.href && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div variants={itemVariants} className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <motion.a
                href="https://github.com/SaatvikP"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/saatvik-pradhan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
            <ModeToggle />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect border-t border-b border-border/50"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "font-medium py-2 transition-colors block",
                        pathname === item.href ? "text-primary" : "text-muted-foreground",
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex space-x-4 pt-2">
                  <motion.a
                    href="https://github.com/SaatvikP"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/saatvik-pradhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

