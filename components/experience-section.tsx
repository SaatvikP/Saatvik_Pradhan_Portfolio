"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    title: "Team Lead & Machine Learning Engineer",
    company: "Penn State Nittany AI Alliance",
    period: "January 2025 - Present",
    description:
      "Leveraging Large Language Models (LLMs) and advanced AI/ML techniques to enhance team formation, prototype feedback, and evaluation processes for improved student outcomes. Building a system for role recommendation, prototype critique, and judge score predictions, fostering innovation.",
    tags: ["LLMs", "AI/ML", "Team Leadership", "Prototype Evaluation"],
  },
  {
    title: "Research Assistant",
    company: "RAISE Lab @ Penn State",
    period: "August 2024 - Present",
    description:
      "Conducted a meta-analysis of 100+ studies on rater disagreement, identifying actionable patterns to improve assessment frameworks. Applied statistical models to ensure data reliability, supporting the development of robust evaluation methodologies for high-stakes environments.",
    tags: ["Meta-Analysis", "Statistical Models", "Assessment Frameworks", "Data Reliability"],
  },
  {
    title: "Guided Study Group Leader & Math Tutor",
    company: "Penn State University",
    period: "August 2024 - Present",
    description:
      "Led peer study sessions and provided one-on-one tutoring to support student success in mathematics, with a focus on MATH 141 (Calculus with Analytic Geometry II). Designed and facilitated collaborative group activities to deepen understanding of complex calculus topics, while offering individualized tutoring sessions that catered to diverse learning styles across algebra, calculus, and geometry.",
    tags: ["Mathematics", "Tutoring", "Group Leadership", "Calculus"],
  },
  {
    title: "Student Manager | Crew Leader Food Services",
    company: "Penn State University",
    period: "August 2023 - July 2024",
    description:
      "Managed food service operations and led crew members to ensure efficient service delivery and customer satisfaction.",
    tags: ["Leadership", "Operations Management", "Team Coordination"],
  },
  {
    title: "Peer Tutor - Learning Center",
    company: "Penn State University",
    period: "September 2023 - July 2024",
    description:
      "Provided academic support to fellow students in various subjects, helping them improve their understanding and performance.",
    tags: ["Tutoring", "Academic Support", "Peer Education"],
  },
  {
    title: "Part-Time IT User Support Specialist",
    company: "Penn State University",
    period: "March 2023 - July 2024",
    description:
      "Served as the first point of contact for IT support, assisted 500+ users with technical issues and inquiries. Enhanced service efficiency through effective communication and streamlined troubleshooting processes.",
    tags: ["IT Support", "Technical Troubleshooting", "User Assistance"],
  },
  {
    title: "Research Assistant - MCREU 2023",
    company: "Penn State University",
    period: "May 2023 - August 2023",
    description:
      "Engineered an adaptive learning algorithm to adjust rates based on rejects, improving WisdomNet's reliability by 90% for safety-critical use. Tested the algorithm on breast cancer datasets, synthetic data, and MNIST, achieving a 10% accuracy improvement.",
    tags: ["Adaptive Learning", "Algorithm Design", "WisdomNet", "Data Analysis"],
  },
  {
    title: "Part-Time Foods Services Specialist and Retail Cashier",
    company: "Penn State University",
    period: "September 2022 - August 2023",
    description:
      "Handled food service operations and cashier responsibilities, ensuring quality service and accurate transactions.",
    tags: ["Customer Service", "Cash Handling", "Food Service"],
  },
  {
    title: "Intern",
    company: "Innovatios Technology",
    period: "June 2022 - August 2022",
    description:
      "Engineered Ai.Cam VMS image processing modules using YOLOv5 for detecting fire, smoke, and face masks. Designed an intuitive UI for real-time detection selection, enabling practical deployment in safety-critical environments.",
    tags: ["YOLOv5", "Computer Vision", "UI Design", "Image Processing"],
  },
  {
    title: "Intern",
    company: "Navigator Technologies Bhopal",
    period: "April 2021 - June 2021",
    description:
      "Built a voice-activated Android application for display panel printing, integrating Bluetooth communication and Arduino-based hardware controls. Improved operational efficiency by automating manual processes and reducing errors.",
    tags: ["Android Development", "Bluetooth Integration", "Voice Recognition", "Arduino"],
  },
  {
    title: "Intern",
    company: "Innovatios Technology",
    period: "November 2020 - January 2021",
    description: "Worked as an Intern to develop the Project entitled 'Dimension recognition'.",
    tags: ["Dimension Recognition", "Software Development"],
  },
  {
    title: "Intern",
    company: "Finland Labs",
    period: "October 2020",
    description:
      "Applied CNNs and deep learning models for accurate classification of Cats vs. Dogs, achieving 92% accuracy. Designed and deployed AWS-based solutions for home automation, and conducted sentiment analysis of Flipkart reviews, delivering actionable insights to improve customer satisfaction.",
    tags: ["CNNs", "Deep Learning", "AWS", "Sentiment Analysis"],
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="relative">
      <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
        <Briefcase className="mr-3 h-8 w-8 text-primary" />
        Professional Experience
      </h2>

      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20"></div>

      <div className="relative z-10">
        {experiences.map((item, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={`${item.title}-${item.company}`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start mb-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase className="h-3 w-3 text-primary" />
              </div>

              {/* Content */}
              <div className={`w-5/12 ${isEven ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <Card className="glass-effect border-primary/10 overflow-hidden">
                  <div className="h-1 w-full bg-primary"></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-primary font-medium mb-1">{item.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? "justify-end" : "justify-start"}`}>
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary-foreground">
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

