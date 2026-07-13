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
  SiTypescript,
} from "react-icons/si";

const tech = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Linux", icon: <SiLinux className="text-white" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

export default function TechMarquee() {
  const items = [...tech, ...tech];

  return (
    <div className="overflow-hidden mt-20">
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="
              flex
              items-center
              gap-3
              px-6
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              whitespace-nowrap
            "
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="font-semibold">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}