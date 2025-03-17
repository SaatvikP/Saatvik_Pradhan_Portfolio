import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import SectionReveal from "@/components/section-reveal"
import Skills from "@/components/skills"

export const metadata: Metadata = {
  title: "About Me | Saatvik Pradhan",
  description:
    "Learn more about Saatvik Pradhan's background, skills, and achievements in AI, Machine Learning, and Software Development.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          About Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <SectionReveal direction="right">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 blur-2xl" />
              <div className="relative h-full w-full rounded-lg overflow-hidden border-2 border-primary/20">
                <Image
                  src="portfoliopic.jpg"
                  alt="Saatvik Pradhan"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.2}>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">My Background</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a Computer Science and Mathematics student at Schreyer Honors College, Penn State University, specializing in artificial intelligence and machine learning. With a 3.98/4.00 GPA, I have consistently been recognized on the Dean's List for academic excellence.
              </p>
              <p>
                My academic journey includes a summer at Stanford University, where I explored advanced AI and machine learning concepts, gaining hands-on experience in algorithm development and real-world applications.
              </p>
              <p>
                Through research positions and internships, I have contributed to AI-driven projects ranging from adaptive learning algorithms to real-time image processing systems using YOLOv5 and OpenCV. My experience bridges theoretical research with practical implementation, driving innovation in AI applications.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
            <ul className="space-y-2 text-muted-foreground list-disc pl-5">
              <li>
                Developed an adaptive learning algorithm that improved WisdomNet's reliability by 90% for safety-critical applications, tested on breast cancer and synthetic datasets.
              </li>
              <li>
                Built an AI-powered real-time detection system using YOLOv5 and OpenCV to identify fire, smoke, and face masks, enhancing safety monitoring.
              </li>
              <li>
                Created a voice-activated Android application for display panel printing, integrating Bluetooth communication and Arduino-based controls.
              </li>
              <li>
                Processed T1-weighted MRI data for 887 patients from the PPMI database, applying segmentation and atlas-based alignment to extract clinically relevant features.
              </li>
              <li>
                Designed a deep learning pipeline combining 3D CNNs, SVM, and Random Forest, achieving 76.4% binary accuracy in Parkinson’s disease classification.
              </li>
              <li>
                Holder of multiple patents, including the In-Pipe Inspection Robot (Indian Design Patent: 360985-001).
              </li>
            </ul>
              <div className="mt-8">
                <Button size="lg" className="flex items-center gap-2" asChild>
                  <a href="/resume.pdf" download>
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <Skills />
        </div>
      </div>

      <Footer />
    </main>
  )
}

