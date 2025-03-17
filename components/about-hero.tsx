"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionReveal from "@/components/section-reveal"

export default function AboutHero() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <SectionReveal direction="right">
            <div className="relative mx-auto">
              <div className="relative w-full max-w-md aspect-square mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 blur-2xl" />
                <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-primary/20">
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/portfoliopic.jpg"
                      alt="Saatvik Pradhan"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="text-primary font-medium">AI/ML Engineer</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <span className="text-secondary font-medium">Researcher</span>
              </motion.div>
            </div>
          </SectionReveal>

          {/* Text Column */}
          <SectionReveal direction="left" delay={0.2}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              About Me
            </h1>

            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground">
                I'm a Computer Science and Mathematics student at Schreyer Honors College, Penn State University, with a
                strong focus on artificial intelligence and machine learning. I maintain a 3.98/4.00 GPA and have been
                consistently recognized on the Dean's List.
              </p>

              <p className="text-muted-foreground">
                My academic journey includes a summer at Stanford University studying Artificial Intelligence and
                Machine Learning, where I developed a deep understanding of advanced AI concepts and applications.
              </p>

              <p className="text-muted-foreground">
                I've gained practical experience through research positions and internships, working on projects ranging
                from adaptive learning algorithms to image processing applications using YOLOv5 and OpenCV.
              </p>

              <div className="pt-4">
                <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                  <li>
                    Engineered an adaptive learning algorithm improving WisdomNet's reliability by 90% for
                    safety-critical applications
                  </li>
                  <li>
                    Developed AI-powered image processing modules using YOLOv5 for detecting fire, smoke, and face masks
                  </li>
                  <li>
                    Built a voice-activated Android application for display panel printing with Bluetooth integration
                  </li>
                  <li>Processed T1-weighted MRI data for 887 patients using segmentation and atlas-based alignment</li>
                  <li>
                    Developed a pipeline leveraging 3D CNNs, SVM, and Random Forest to classify MRI scans with 76.4%
                    binary accuracy
                  </li>
                  <li>
                    Holder of multiple patents including In-Pipe Inspection Robot (Indian Design Patent: 360985-001)
                  </li>
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  )
}

