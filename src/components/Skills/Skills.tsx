import Container from "../UI/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../UI/GlassCard";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";


import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMongodb,
  SiLinux,
} from "react-icons/si";

import { FaCode } from "react-icons/fa";import TechMarquee from "./TechMarquee";
const skills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact />, level: 95 },
      { name: "JavaScript", icon: <SiJavascript />, level: 92 },
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 92 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
    ],
  },

  {
    category: "Backend Development",
    skills: [
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 85 },
      { name: "REST APIs", icon: "⚡", level: 90 },
      { name: "Microservices", icon: "🚀", level: 80 },
    ],
  },

  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 88 },
    ],
  },

  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "GitHub", icon: <FaGithub />, level: 90 },
      { name: "VS Code", icon: <FaCode />, level: 95 },
      { name: "Linux", icon: <SiLinux />, level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-36">
      <Container>
        <SectionTitle
          subtitle="Tech Stack"
          title="Skills & Technologies"
          center
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <GlassCard>

                <h3 className="text-2xl font-bold mb-8">
                  {category.category}
                </h3>

                <div className="space-y-6">

                  {category.skills.map((skill) => (

                    <div key={skill.name}>

                      <div className="flex justify-between items-center mb-2">

                        <div className="flex items-center gap-3">

                          <span className="text-xl text-indigo-400">
                            {skill.icon}
                          </span>

                          <span className="font-medium">
                            {skill.name}
                          </span>

                        </div>

                        <span className="text-indigo-400 text-sm font-semibold">
                          {skill.level}%
                        </span>

                      </div>

                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                        />

                      </div>

                    </div>

                  ))}

                </div>
                

              </GlassCard>
            </motion.div>
          ))}
          <TechMarquee/>
        </div>
        
      
      </Container>
    </section>
  );
}