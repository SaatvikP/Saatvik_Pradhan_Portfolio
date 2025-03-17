"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap } from "lucide-react"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    title: "Team Leader and Machine Learning Intern",
    company: "Nittany AI Advance",
    location: "State College, PA, USA",
    period: "Dec 2024 - Present",
    description:
      "Leveraging Large Language Models (LLMs) and advanced AI/ML techniques, including Haystack, Azure AI Foundry, and other frameworks, to enhance team formation, prototype feedback, and evaluation for improved student outcomes. Building a system for role recommendation, prototype critique, and judge score predictions, fostering innovation.",
    tags: ["LLMs", "AI/ML", "Team Leadership", "Prototype Evaluation", "Haystack", "Azure AI"],
  },
  {
    title: "Guided Study Group Leader & Math Tutor",
    company: "Penn State",
    location: "State College, PA, USA",
    period: "Aug 2024 - Present",
    description:
      "Led peer study sessions and provided one-on-one tutoring to support student success in mathematics, with a focus on MATH 141 (Calculus with Analytic Geometry II). Designed and facilitated collaborative group activities to deepen understanding of complex calculus topics, while offering individualized tutoring sessions that catered to diverse learning styles across algebra, calculus, and geometry. Enhanced students' problem-solving abilities and exam readiness, fostering academic confidence and performance in a challenging course environment.",
    tags: ["Mathematics", "Tutoring", "Group Leadership", "Calculus"],
  },
  {
    title: "Research Assistant",
    company: "RAISE Lab Pennsylvania State University",
    location: "State College, PA, USA",
    period: "Aug 2024 - Present",
    description:
      "Reviewed 100+ studies on rater disagreement, identifying patterns and inconsistencies to improve assessment reliability. Implementing advanced statistical methods to enhance evaluation frameworks and ensure data integrity.",
    tags: ["Meta-Analysis", "Statistical Models", "Research", "Data Analysis"],
  },
  {
    title: "Research Assistant MCREU 2024",
    company: "Penn State",
    location: "State College, PA, USA",
    period: "Jan 2024 - Aug 2024",
    description:
      "Streamlined the preprocessing pipeline for T1-weighted MRI data of 887 patients, leveraging advanced segmentation techniques and atlas-based alignment. Designed and trained 3D CNNs, SVM, and Random Forest models to classify MRI scans into four groups: Parkinson's Disease (PD), Control, SWEDD, and Prodromal, achieving 65.9% multiclass accuracy and 76.4% binary accuracy. The results provide actionable insights for early Parkinson's disease diagnosis.",
    tags: ["3D CNNs", "Machine Learning", "MRI Analysis", "Medical Imaging"],
  },
  {
    title: "Part-Time Student Manager/ Crew Leader",
    company: "Housing and Food Services Pennsylvania State University",
    location: "Harrisburg, PA, USA",
    period: "Sep 2022 - Aug 2024",
    description:
      "Supervised 200+ student workers, ensuring smooth daily operations and timely service for 5,000+ students. Trained and mentored 80+ new team members boosted onboarding efficiency by 20%, and fostered team collaboration.",
    tags: ["Leadership", "Operations Management", "Process Improvement", "Team Mentoring"],
  },
  {
    title: "Part-Time IT User Support Specialist",
    company: "IT Services Pennsylvania State University",
    location: "Harrisburg, PA, USA",
    period: "Mar 2023 - Jul 2024",
    description:
      "Served as the first point of contact for IT support, assisted 500+ users with technical issues and inquiries. Enhanced service efficiency through effective communication and streamlined troubleshooting processes.",
    tags: ["IT Support", "Technical Troubleshooting", "Customer Service"],
  },
  {
    title: "Research Assistant MCREU 2023",
    company: "Penn State",
    location: "State College, PA, USA",
    period: "May 2023 - Aug 2023",
    description:
      "Engineered an adaptive learning algorithm to adjust rates based on rejects, improving WisdomNet's reliability by 90% for safety-critical use. Tested the algorithm on breast cancer datasets, synthetic data, and MNIST, achieving a 10% accuracy improvement.",
    tags: ["Machine Learning", "Algorithm Design", "Data Analysis"],
  },
  {
    title: "Intern",
    company: "InnovatiOS Technology",
    location: "India",
    period: "Jun 2022 - Aug 2022",
    description:
      "Engineered Ai.Cam VMS image processing modules using YOLOv5 for detecting fire, smoke, and face masks. Designed an intuitive UI for real-time detection selection, enabling practical deployment in safety-critical environments.",
    tags: ["Computer Vision", "YOLOv5", "UI Design", "Safety Systems"],
  },
  {
    title: "Intern",
    company: "Navigator Technologies",
    location: "India",
    period: "Apr 2021 - Jun 2021",
    description:
      "Built a voice-activated Android application for display panel printing, integrating Bluetooth communication and Arduino-based hardware controls. Improved operational efficiency by automating manual processes and reducing errors.",
    tags: ["Android Development", "IoT", "Voice Recognition", "Bluetooth"],
  },
  {
    title: "Intern",
    company: "Finland Labs",
    location: "Remote",
    period: "Oct 2020 - Oct 2020",
    description:
      "Applied CNNs and deep learning models for accurate classification of Cats vs. Dogs, achieving 92% accuracy. Designed and deployed AWS-based solutions for home automation, and conducted sentiment analysis of Flipkart reviews, delivering actionable insights to improve customer satisfaction.",
    tags: ["Deep Learning", "AWS", "Sentiment Analysis", "Classification"],
  },
]

const education = [
  {
    degree: "Bachelor of Science - BS, Computer Science and BS in Mathematics",
    institution: "Schreyer Honors College, Pennsylvania State University",
    location: "State College, PA, USA",
    period: "August 2022 - May 2026 (Expected)",
    description:
      "Pursuing dual degrees in Computer Science and Mathematics with a focus on artificial intelligence and machine learning. Maintaining a 3.98/4.00 GPA with consistent recognition on the Dean's List (Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024). Recipient of the President Walker Award and President Sparks Award. Completed coursework includes Programming & Computation, Discrete Mathematics, Object-Oriented Programming, Digital Systems, Numerical Analysis, Data Structures & Algorithms, and System Programming.",
    tags: ["Computer Science", "Mathematics", "Artificial Intelligence", "Honors College", "4.0 GPA"],
    courses: [
      "CMPSC 131: Programming & Computation I",
      "CMPSC 132: Programming & Computation II",
      "CMPSC 221: Object-Oriented Programming with Web",
      "CMPSC 360: Discrete Mathematics for CS",
      "CMPSC 455: Introduction to Numerical Analysis",
      "CMPSC 311: Introduction to Systems Programming",
      "CMPSC 461: Programming Language Concepts (Honors)",
      "CMPSC 465: Data Structures and Algorithms",
      "MATH 141: Calculus with Analytic Geometry II",
      "MATH 230: Calculus and Vector Analysis",
      "MATH 251: Ordinary and Partial Differential Equations",
      "MATH 401: Introduction to Analysis I",
      "STAT 414: Introduction to Probability Theory",
    ],
  },
  {
    degree: "Summer Undergraduate Visitor - Artificial Intelligence, Machine Learning",
    institution: "Stanford University",
    location: "Palo Alto, CA, USA",
    period: "May 2023 - August 2023",
    description:
      "Completed summer coursework in Computer Science, focusing on artificial intelligence and machine learning topics. Achieved a 3.70/4.00 GPA while studying advanced AI concepts and applications.",
    tags: ["Computer Science", "Stanford", "AI/ML", "3.7 GPA"],
  },
  {
    degree: "All India Senior School Certificate (CBSE) in Senior School - Grade 12",
    institution: "Shiv Jyoti Senior Secondary School Kota",
    location: "Kota, India",
    period: "April 2020 - June 2022",
    description:
      "Completed senior secondary education with focus on Physics, Chemistry, Mathematics, Computer Science, English Core, and Biology.",
    tags: ["CBSE", "Mathematics", "Computer Science", "Physics"],
  },
  {
    degree: "IGCSE",
    institution: "The Sanskaar Valley School",
    location: "India",
    period: "April 2019 - March 2020",
    description: "Completed International General Certificate of Secondary Education curriculum.",
    tags: ["IGCSE", "Secondary Education"],
  },
]

interface ExperienceTimelineProps {
  type: "experience" | "education"
}

export default function ExperienceTimeline({ type }: ExperienceTimelineProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const items = type === "experience" ? experiences : education
  const Icon = type === "experience" ? Briefcase : GraduationCap
  const color = type === "experience" ? "primary" : "secondary"

  return (
    <div ref={ref} className="relative pb-20">
      {/* Center line */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-${color}/80 via-${color}/50 to-${color}/20`}
      ></div>

      <div className="relative z-10">
        {items.map((item, index) => {
          const isEven = index % 2 === 0
          // Create a truly unique key by combining type, index, and a specific property
          const uniqueKey = `${type}-${index}-${item.title || item.degree}-${Date.now()}-${index}`

          return (
            <motion.div
              key={uniqueKey}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start mb-24 ${isEven ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"}`}
            >
              {/* Timeline dot - visible only on medium screens and above */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-background border-2 border-${color} flex items-center justify-center hidden md:flex`}
              >
                <Icon className={`h-3 w-3 text-${color}`} />
              </div>

              {/* Timeline dot - visible only on small screens */}
              <div
                className={`relative w-6 h-6 rounded-full bg-background border-2 border-${color} flex items-center justify-center md:hidden mx-auto mb-4`}
              >
                <Icon className={`h-3 w-3 text-${color}`} />
              </div>

              {/* Content */}
              <div className={`md:w-5/12 w-full ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                <Card className={`glass-effect border-${color}/10 overflow-hidden h-full`}>
                  <div className={`h-1 w-full bg-${color}`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{type === "experience" ? item.title : item.degree}</h3>
                    <p className={`text-${color} font-medium mb-1`}>
                      {type === "experience" ? item.company : item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">{item.location}</p>
                    <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div
                      className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end justify-start" : "justify-start"}`}
                    >
                      {item.tags.map((tag, tagIndex) => (
                        <Badge
                          key={`${uniqueKey}-tag-${tagIndex}-${tag}`}
                          variant="secondary"
                          className={`bg-${color}/10 text-${color}-foreground mb-1`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {type === "education" && item.courses && (
                      <div className="mt-4">
                        <h4
                          className={`text-sm font-semibold mb-2 ${isEven ? "md:text-right text-left" : "text-left"}`}
                        >
                          Key Courses:
                        </h4>
                        <ul
                          className={`text-xs text-muted-foreground space-y-1 ${
                            isEven ? "md:text-right text-left" : "text-left"
                          }`}
                        >
                          {item.courses &&
                            item.courses
                              .slice(0, 5)
                              .map((course, courseIndex) => (
                                <li key={`${uniqueKey}-course-${courseIndex}-${course.substring(0, 10)}`}>{course}</li>
                              ))}
                          {item.courses && item.courses.length > 5 && (
                            <li className="text-primary cursor-pointer hover:underline">
                              +{item.courses.length - 5} more courses
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Empty space for the other side - only on medium screens and above */}
              <div className="md:w-5/12 w-full md:block hidden"></div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

