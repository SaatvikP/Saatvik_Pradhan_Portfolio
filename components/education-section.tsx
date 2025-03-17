"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const education = [
  {
    degree: "Bachelor of Science - BS, Computer Science",
    institution: "Schreyer Honors College at Penn State",
    period: "August 2022 - May 2026 (Expected)",
    description:
      "Pursuing a Computer Science degree with a focus on artificial intelligence and machine learning. Maintaining a 4.0 GPA with coursework in Python, Java, C/C++, AI, and machine learning.",
    tags: ["Computer Science", "Artificial Intelligence", "Machine Learning", "Honors College"],
  },
  {
    degree: "Visiting Student - Stanford Summer Session, Computer Science",
    institution: "Stanford University",
    period: "June 2023 - August 2023",
    description:
      "Completed summer coursework in Computer Science, focusing on artificial intelligence and machine learning topics.",
    tags: ["Computer Science", "Stanford", "AI/ML"],
  },
  {
    degree: "All India Senior School Certificate (CBSE) in Senior School - Grade 12",
    institution: "Shiv Jyoti Senior Secondary School Kota",
    period: "April 2020 - June 2022",
    description:
      "Completed senior secondary education with focus on Physics, Chemistry, Mathematics, Computer Science, English Core, and Biology.",
    tags: ["CBSE", "Mathematics", "Computer Science", "Physics"],
  },
  {
    degree: "IGCSE",
    institution: "The Sanskaar Valley School",
    period: "April 2019 - March 2020",
    description: "Completed International General Certificate of Secondary Education curriculum.",
    tags: ["IGCSE", "Secondary Education"],
  },
]

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="relative">
      <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
        <GraduationCap className="mr-3 h-8 w-8 text-secondary" />
        Education
      </h2>

      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary/20"></div>

      <div className="relative z-10">
        {education.map((item, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={`${item.degree}-${item.institution}`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start mb-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-secondary flex items-center justify-center">
                <GraduationCap className="h-3 w-3 text-secondary" />
              </div>

              {/* Content */}
              <div className={`w-5/12 ${isEven ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <Card className="glass-effect border-secondary/10 overflow-hidden">
                  <div className="h-1 w-full bg-secondary"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                    <p className="text-secondary font-medium mb-1">{item.institution}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? "justify-end" : "justify-start"}`}>
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary-foreground">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

