"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AdvancedParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    const mouseRadius = 150

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      baseX: number
      baseY: number
      density: number
      color: string
      angle: number
      speed: number
      direction: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 3 + 1
        this.density = Math.random() * 30 + 1
        this.angle = Math.random() * 360
        this.speed = Math.random() * 0.5 + 0.1
        this.direction = Math.random() > 0.5 ? 1 : -1

        // Color based on theme
        const hue = Math.random() * 60 + 210 // Blue to purple range
        const saturation = Math.random() * 30 + 70
        const lightness = resolvedTheme === "dark" ? 70 : 50
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${Math.random() * 0.5 + 0.3})`
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Move particles away from mouse
        if (distance < mouseRadius) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (mouseRadius - distance) / mouseRadius
          const directionX = forceDirectionX * force * this.density * -1
          const directionY = forceDirectionY * force * this.density * -1

          this.x += directionX
          this.y += directionY
        } else {
          // Gentle floating motion when not affected by mouse
          this.angle += this.speed * this.direction
          this.x += Math.cos((this.angle * Math.PI) / 180) * 0.2
          this.y += Math.sin((this.angle * Math.PI) / 180) * 0.2

          // Return to original position
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 20
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 20
          }
        }
      }
    }

    // Create particle array
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 300)
    const particles: Particle[] = []

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push(new Particle(x, y))
      }
    }

    // Connect particles with lines
    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = 1 - distance / 120
            ctx.strokeStyle = `rgba(${resolvedTheme === "dark" ? "255, 255, 255" : "0, 0, 0"}, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      connect()
      animationFrameId = requestAnimationFrame(animate)
    }

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Touch interaction
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
      }
    }

    // Mouse click effect - create ripple
    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX
      const clickY = e.clientY

      // Add temporary particles at click position
      for (let i = 0; i < 10; i++) {
        const angle = Math.random() * 360
        const distance = Math.random() * 30
        const x = clickX + Math.cos((angle * Math.PI) / 180) * distance
        const y = clickY + Math.sin((angle * Math.PI) / 180) * distance
        particles.push(new Particle(x, y))
      }

      // Remove excess particles after a delay
      setTimeout(() => {
        if (particles.length > particleCount) {
          particles.splice(0, particles.length - particleCount)
        }
      }, 3000)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("click", handleClick)

    init()
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("click", handleClick)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
}

