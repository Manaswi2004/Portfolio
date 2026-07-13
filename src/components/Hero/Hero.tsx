import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaReact,
  FaJava,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiSpringboot,
} from "react-icons/si";

import HeroBackground from "./HeroBackground";
import SocialLinks from "./SocialLinks";
import ScrollDown from "./ScrollDown";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

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
            className="mt-5 text-6xl lg:text-8xl font-black leading-none"
          >
            <span className="bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Manaswi
            </span>

            <br />

            <span className="bg-gradient-to-r from-white via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Suraskar
            </span>
          </motion.h1>

          <div className="mt-8 h-12 text-2xl lg:text-3xl font-semibold text-indigo-400">

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
            and scalable backend systems using React, TypeScript,
            Spring Boot, and modern cloud technologies.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
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
                backdrop-blur-xl
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

          {/* Stats */}

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

        </div>        {/* RIGHT */}

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
          className="relative flex justify-center items-center"
        >

          {/* Glow Background */}

          <div
            className="
              absolute
              w-[430px]
              h-[430px]
              rounded-full
              bg-indigo-600/20
              blur-3xl
            "
          />

          {/* Rotating Ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[460px]
              h-[460px]
              rounded-full
              border-2
              border-dashed
              border-indigo-500/20
            "
          />

          {/* Profile Image */}

          <motion.img
            src="/manaswi.jpeg"
            alt="Manaswi Suraskar"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              relative
              w-[340px]
              lg:w-[420px]
              rounded-full
              border-4
              border-indigo-500
              shadow-[0_0_60px_rgba(99,102,241,0.35)]
            "
          />

          {/* React */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="
              absolute
              -left-8
              top-12
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-[#111827]/80
              backdrop-blur-xl
              px-5
              py-3
            "
          >
            <FaReact className="text-cyan-400 text-xl" />
            <span>React</span>
          </motion.div>

          {/* Java */}

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
            className="
              absolute
              -right-4
              top-24
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-[#111827]/80
              backdrop-blur-xl
              px-5
              py-3
            "
          >
            <FaJava className="text-orange-500 text-xl" />
            <span>Java</span>
          </motion.div>

          {/* Spring */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.8 }}
            className="
              absolute
              -left-12
              bottom-24
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-[#111827]/80
              backdrop-blur-xl
              px-5
              py-3
            "
          >
            <SiSpringboot className="text-green-500 text-xl" />
            <span>Spring Boot</span>
          </motion.div>

          {/* TypeScript */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.3 }}
            className="
              absolute
              -right-10
              bottom-10
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-[#111827]/80
              backdrop-blur-xl
              px-5
              py-3
            "
          >
            <SiTypescript className="text-blue-400 text-xl" />
            <span>TypeScript</span>
          </motion.div>

          {/* GitHub */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="
              absolute
              right-0
              top-1/2
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-[#111827]/80
              backdrop-blur-xl
              px-5
              py-3
            "
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
