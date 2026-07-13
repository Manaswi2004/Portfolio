import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-black">
              Manaswi
              <span className="text-indigo-500">.</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-md leading-7">
              Frontend Developer passionate about creating
              scalable web applications, AI-powered solutions,
              and modern digital experiences.
            </p>

          </div>

          {/* Center */}

          <div className="flex gap-6 text-gray-400">

            <a
              href="#about"
              className="hover:text-indigo-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-indigo-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-indigo-400 transition"
            >
              Contact
            </a>

          </div>

          {/* Right */}

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Manaswi2004"
              target="_blank"
              rel="noopener noreferrer"
              className="
              h-12
              w-12
              rounded-xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-indigo-600
              hover:scale-110
              transition-all
              duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="
              h-12
              w-12
              rounded-xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-indigo-600
              hover:scale-110
              transition-all
              duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:YOURMAIL@gmail.com"
              className="
              h-12
              w-12
              rounded-xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:bg-indigo-600
              hover:scale-110
              transition-all
              duration-300
              "
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm">
            © {year} Manaswi Suraskar. All rights reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
            flex
            items-center
            gap-2
            px-5
            py-3
            rounded-xl
            bg-indigo-600
            hover:bg-indigo-500
            hover:scale-105
            transition-all
            duration-300
            "
          >
            <FaArrowUp />

            Back to Top
          </button>

        </div>

      </div>

    </footer>
  );
}