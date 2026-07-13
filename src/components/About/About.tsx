import { motion } from "framer-motion";
import Container from "../UI/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../UI/GlassCard";

const highlights = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and scalable web applications using React, TypeScript and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    description:
      "Creating scalable REST APIs and backend services using Java and Spring Boot.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Developing AI-powered applications involving NLP, threat detection and machine learning.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-36">
      <Container>

        <SectionTitle
          subtitle="Who I Am"
          title="About Me"
          center
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl font-bold leading-tight">
              Frontend Developer &
              <span className="text-indigo-500">
                {" "}AI Enthusiast
              </span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8">
              I'm Manaswi Suraskar, a Computer Science student at VIT
              Bhopal University passionate about building scalable web
              applications and AI-powered software. I enjoy creating
              clean, responsive user interfaces and solving real-world
              problems through technology.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              My interests include Full Stack Development,
              Artificial Intelligence, Cybersecurity and Cloud
              Technologies. I love participating in hackathons,
              building impactful projects and continuously learning
              modern technologies.
            </p>

          </motion.div>

          {/* RIGHT STARTS IN PART 2 */}
                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {highlights.map((item, index) => (

              <GlassCard key={item.title}>

                <div className="flex items-start gap-5">

                  <div
                    className="
                    h-12
                    w-12
                    rounded-xl
                    bg-gradient-to-br
                    from-indigo-500
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    shrink-0
                    "
                  >
                    0{index + 1}
                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-400 leading-7">
                      {item.description}
                    </p>

                  </div>

                </div>

              </GlassCard>

            ))}

            {/* Education */}

            <GlassCard>

              <div className="space-y-5">

                <div>

                  <p className="text-sm uppercase tracking-widest text-indigo-400">
                    Education
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    VIT Bhopal University
                  </h3>

                  <p className="text-gray-400 mt-2">
                    B.Tech in Computer Science Engineering
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Expected Graduation • 2027
                  </p>

                </div>

                <div className="border-t border-white/10 pt-5">

                  <p className="text-sm uppercase tracking-widest text-green-400">
                    Current Status
                  </p>

                  <div className="flex items-center gap-3 mt-3">

                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-gray-300">
                      Available for Internships
                    </span>

                  </div>

                </div>

              </div>

            </GlassCard>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}