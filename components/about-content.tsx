"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import SectionReveal from "@/components/section-reveal"

export default function AboutContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <SectionReveal direction="right">
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 blur-2xl" />
          <div className="relative h-full w-full rounded-lg overflow-hidden border-2 border-primary/20">
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
      </SectionReveal>

      <SectionReveal direction="left" delay={0.2}>
        <h2 className="text-2xl font-bold mb-6">My Background</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            I'm a Computer Science and Mathematics student at Schreyer Honors College, Penn State University, with a
            strong focus on artificial intelligence and machine learning. I maintain a 3.98/4.00 GPA and have been
            consistently recognized on the Dean's List.
          </p>
          <p>
            My academic journey includes a summer at Stanford University studying Artificial Intelligence and Machine
            Learning, where I developed a deep understanding of advanced AI concepts and applications.
          </p>
          <p>
            I've gained practical experience through research positions and internships, working on projects ranging
            from adaptive learning algorithms to image processing applications using YOLOv5 and OpenCV.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6">Achievements</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
          <li>
            Engineered an adaptive learning algorithm improving WisdomNet's reliability by 90% for safety-critical
            applications
          </li>
          <li>Developed AI-powered image processing modules using YOLOv5 for detecting fire, smoke, and face masks</li>
          <li>Built a voice-activated Android application for display panel printing with Bluetooth integration</li>
          <li>Processed T1-weighted MRI data for 887 patients using segmentation and atlas-based alignment</li>
          <li>
            Developed a pipeline leveraging 3D CNNs, SVM, and Random Forest to classify MRI scans with 76.4% binary
            accuracy
          </li>
          <li>Holder of multiple patents including In-Pipe Inspection Robot (Indian Design Patent: 360985-001)</li>
        </ul>

        <div className="mt-10">
          <Button size="lg" className="flex items-center gap-2" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </SectionReveal>
    </div>
  )
}

