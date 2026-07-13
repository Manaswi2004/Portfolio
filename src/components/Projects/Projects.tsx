import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import Container from "../UI/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../UI/GlassCard";
import BrowserFrame from "../UI/BrowserFrame";
import ProjectModal from "./ProjectModal";

type Project = {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
  status: string;
  stats: string[];
};

const projects: Project[] = [
  {
    title: "TrueSight",
    subtitle: "AI-Powered Threat Detection System",
    image: "/projects/truesight.png",

    description:
      "An AI-powered threat detection platform capable of analyzing emails, audio files, PDFs, and documents using Groq AI with intelligent fallback support for enhanced reliability.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Groq AI",
      "REST API",
    ],

    github: "https://github.com/Manaswi2004",
    demo: "#",

    featured: true,
    status: "Completed",

    stats: [
      "95% Accuracy",
      "4 File Types",
      "AI Powered",
    ],
  },

  {
    title: "SplunkVigil",

    subtitle: "Insider Threat Dashboard",

    image: "/projects/splunk.png",

    description:
      "Interactive dashboard developed with React and Splunk to monitor suspicious activities, security events, and insider threats through real-time visualizations.",

    tech: [
      "React",
      "Node.js",
      "Splunk",
    ],

    github: "https://github.com/Manaswi2004",
    demo: "#",

    featured: false,
    status: "Completed",

    stats: [
      "Dashboard",
      "Real-Time",
      "Security",
    ],
  },

  {
    title: "Fake Social Media Detection",

    subtitle: "Machine Learning",

    image: "/projects/fake-social.png",

    description:
      "Machine learning application that predicts fake social media profiles using multiple classification algorithms and displays prediction analytics through React.",

    tech: [
      "Python",
      "React",
      "Machine Learning",
    ],

    github: "https://github.com/Manaswi2004",
    demo: "#",

    featured: false,
    status: "Completed",

    stats: [
      "ML Model",
      "Prediction",
      "Analytics",
    ],
  },

];
export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="py-40 relative"
    >
      <Container>

        <SectionTitle
          subtitle="Portfolio"
          title="Featured Projects"
          center
        />

        <div className="space-y-12">

          {projects.map((project) => (

            <GlassCard key={project.title}>

              <div
                onClick={() => setSelectedProject(project)}
                className="
                  grid
                  lg:grid-cols-2
                  gap-14
                  items-center
                  cursor-pointer
                "
              >

                {/* LEFT */}

                <div className="group">

                  <BrowserFrame
                    image={project.image}
                    title={project.title}
                  />

                </div>

                {/* RIGHT */}

                <div>

                  {/* BADGES */}

                  <div className="flex flex-wrap gap-3 mb-6">

                    {project.featured && (

                      <div
                        className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-full
                        bg-yellow-500/15
                        border
                        border-yellow-400/30
                        text-yellow-300
                        text-sm
                        font-medium
                        "
                      >
                        <FaStar />

                        Featured
                      </div>

                    )}

                    <div
                      className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-full
                      bg-green-500/15
                      border
                      border-green-500/30
                      text-green-300
                      text-sm
                      font-medium
                      "
                    >
                      <FaCheckCircle />

                      {project.status}
                    </div>

                  </div>

                  {/* TITLE */}

                  <h2
                    className="
                    text-4xl
                    font-black
                    leading-tight
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                    mt-3
                    text-lg
                    text-indigo-400
                    "
                  >
                    {project.subtitle}
                  </p>

                  <p
                    className="
                    mt-6
                    text-gray-400
                    leading-8
                    "
                  >
                    {project.description}
                  </p>

                  {/* PROJECT STATS */}

                  <div className="flex flex-wrap gap-3 mt-8">

                    {project.stats.map((item) => (

                      <span
                        key={item}
                        className="
                        px-4
                        py-2
                        rounded-xl
                        bg-white/5
                        border
                        border-white/10
                        text-sm
                        font-medium
                        "
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  {/* TECH STACK */}

                  <div className="flex flex-wrap gap-3 mt-8">

                    {project.tech.map((item) => (

                      <span
                        key={item}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-indigo-500/10
                        border
                        border-indigo-500/20
                        hover:bg-indigo-500
                        hover:text-white
                        transition-all
                        duration-300
                        "
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  {/* BUTTONS */}

                  <div className="flex flex-wrap gap-4 mt-10">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                      className="
                      flex
                      items-center
                      gap-3
                      px-6
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-indigo-600
                      to-purple-600
                      hover:scale-105
                      transition-all
                      duration-300
                      shadow-lg
                      shadow-indigo-600/30
                      "
                    >
                      <FaGithub />

                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                      className="
                      flex
                      items-center
                      gap-3
                      px-6
                      py-3
                      rounded-xl
                      border
                      border-white/15
                      hover:bg-white/10
                      hover:scale-105
                      transition-all
                      duration-300
                      "
                    >
                      <FaExternalLinkAlt />

                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </GlassCard>

          ))}

        </div>

        {/* MODAL */}

        <ProjectModal
          open={selectedProject !== null}
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />

      </Container>
    </section>
  );
}