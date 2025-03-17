"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Senior AI Engineer",
    company: "TechInnovate AI",
    period: "2021 - Present",
    description:
      "Leading the development of computer vision solutions for autonomous systems. Implemented state-of-the-art deep learning models that improved object detection accuracy by 35%.",
  },
  {
    title: "Software Engineer",
    company: "WebScale Technologies",
    period: "2019 - 2021",
    description:
      "Developed and maintained high-performance web applications using React, Node.js and MongoDB. Increased application performance by 40% through optimization techniques.",
  },
  {
    title: "Research Assistant",
    company: "AI Research Lab",
    period: "2017 - 2019",
    description:
      "Conducted research in natural language processing and published papers in top-tier conferences. Developed novel algorithms for sentiment analysis with 92% accuracy.",
  },
]

const education = [
  {
    degree: "MSc in Artificial Intelligence",
    institution: "Stanford University",
    period: "2015 - 2017",
    description:
      "Specialized in machine learning and computer vision. Thesis on 'Deep Learning Approaches for Medical Image Analysis'.",
  },
  {
    degree: "BSc in Computer Science",
    institution: "MIT",
    period: "2011 - 2015",
    description:
      "Graduated with honors. Focus on algorithms, data structures, and software engineering principles. Minor in Mathematics.",
  },
]

export default function Resume() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        Resume
      </motion.h2>

      <div className="flex justify-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button size="lg" className="flex items-center gap-2" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-2xl font-bold mb-6"
          >
            <Briefcase className="h-6 w-6 mr-2 text-primary" />
            Experience
          </motion.h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-2xl font-bold mb-6"
          >
            <GraduationCap className="h-6 w-6 mr-2 text-primary" />
            Education
          </motion.h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

