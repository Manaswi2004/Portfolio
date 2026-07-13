import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaDownload,
  FaReact,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { ArrowRight, Download } from "lucide-react";
import { SiTypescript, SiSpringboot } from "react-icons/si";

import HeroBackground from "./HeroBackground";
import SocialLinks from "./SocialLinks";
import ScrollDown from "./ScrollDown";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SIDE */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-medium"
          >
            👋 Hello, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-6xl lg:text-8xl font-black leading-none bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent"
          >
            Manaswi
            <br />
            Suraskar
          </motion.h1>

          <div className="mt-8 text-2xl lg:text-3xl font-semibold text-indigo-400 h-12">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Java Backend Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Building modern web applications, AI-powered solutions,
            and seamless digital experiences using React,
            Spring Boot, TypeScript, and modern cloud technologies.
          </p>

          {/* BUTTONS */}

<div className="flex flex-wrap gap-5 mt-10">

<button
onClick={()=>
document
.getElementById("projects")
?.scrollIntoView({
behavior:"smooth"
})
}
className="
px-8
py-4
rounded-xl
bg-gradient-to-r
from-indigo-600
to-purple-600
font-semibold
hover:scale-105
active:scale-95
transition-all
duration-300
shadow-xl
shadow-indigo-500/30
"
>
View Projects
</button>
<a
  href="/resume.pdf"
  download="Manaswi_Suraskar_Resume.pdf"
  className="
  px-8
  py-4
  rounded-xl
  border
  border-white/20
  backdrop-blur-lg
  hover:bg-white/10
  hover:scale-105
  active:scale-95
  transition-all
  duration-300
  "
>
  Download Resume
</a>
</div>
          {/* STATS */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

            <div>
              <h2 className="text-3xl font-bold text-indigo-400">15+</h2>
              <p className="text-gray-500 mt-2">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-400">5+</h2>
              <p className="text-gray-500 mt-2">Hackathons</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-400">3+</h2>
              <p className="text-gray-500 mt-2">Certifications</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-400">2027</h2>
              <p className="text-gray-500 mt-2">Graduate</p>
            </div>

          </div>

          <div className="mt-10">
            <SocialLinks />
          </div>

        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="
w-[420px]
rounded-full
border-4
border-indigo-500/40
shadow-2xl
shadow-indigo-600/30
transition-all
duration-500
hover:scale-105
hover:rotate-1
" />

          {/* Rotating Border */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="absolute w-[430px] h-[430px] rounded-full border-2 border-dashed border-indigo-500/30"
          />

          {/* Profile */}

          <motion.img
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            src="/manaswi.jpeg"
            alt="Manaswi"
            className="relative w-[360px] lg:w-[430px] rounded-full border-4 border-indigo-500 shadow-[0_0_60px_rgba(99,102,241,0.35)]"
          />

          {/* Floating Tech Cards */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -left-6 top-12 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3"
          >
            <FaReact className="text-cyan-400 text-xl" />
            <span>React</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
            className="absolute -right-4 top-28 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3"
          >
            <FaJava className="text-orange-400 text-xl" />
            <span>Java</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.2 }}
            className="absolute -left-8 bottom-28 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3"
          >
            <SiSpringboot className="text-green-500 text-xl" />
            <span>Spring</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.8 }}
            className="absolute -right-10 bottom-12 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3"
          >
            <SiTypescript className="text-blue-400 text-xl" />
            <span>TypeScript</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8 }}
            className="absolute top-1/2 -right-14 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-3 flex items-center gap-3"
          >
            <FaGithub className="text-white text-xl" />
            <span>GitHub</span>
          </motion.div>

        </motion.div>

      </div>

      <ScrollDown />
    </section>
  );
}