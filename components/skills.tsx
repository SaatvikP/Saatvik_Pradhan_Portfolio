"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, BrainCircuit, Layers, Server, Cloud } from "lucide-react"
import { useInView } from "react-intersection-observer"
import SectionReveal from "@/components/section-reveal"

const skills = [
  {
    name: "Languages",
    icon: <Code className="h-10 w-10 mb-4 text-primary" />,
    technologies: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "HTML/CSS", "SQL", "R"],
  },
  {
    name: "AI & Machine Learning",
    icon: <BrainCircuit className="h-10 w-10 mb-4 text-primary" />,
    technologies: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning", "LLMs"],
  },
  {
    name: "Web Development",
    icon: <Layers className="h-10 w-10 mb-4 text-primary" />,
    technologies: ["React.js", "Node.js", "Spring Boot", "Angular", "jQuery", "Bootstrap"],
  },
  {
    name: "Databases & Backend",
    icon: <Database className="h-10 w-10 mb-4 text-primary" />,
    technologies: ["MySQL", "Firebase", "MongoDB", "Spring Security", "REST APIs"],
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud className="h-10 w-10 mb-4 text-primary" />,
    technologies: ["Docker", "AWS", "Azure", "Git", "Linux/Unix"],
  },
  {
    name: "Mobile & IoT",
    icon: <Server className="h-10 w-10 mb-4 text-primary" />,
    technologies: ["Android SDK", "Kotlin", "Arduino", "Raspberry Pi"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <SectionReveal key={skill.name} delay={index * 0.1} direction="up">
          <Card className="h-full glass-effect border-primary/10 hover:border-primary/30 transition-all duration-300">
            <CardContent className="flex flex-col items-center text-center p-8">
              {skill.icon}
              <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skill.technologies.map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary-foreground px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </SectionReveal>
      ))}
    </div>
  )
}

