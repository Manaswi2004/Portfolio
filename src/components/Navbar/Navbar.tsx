import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certifications",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState("About");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());

        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(item);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50
        w-[92%] max-w-7xl rounded-2xl
        transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-indigo-500/10"
            : "bg-black/40 backdrop-blur-xl border border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div
            className={`
            flex
            items-center
            justify-between
            rounded-2xl
            transition-all
            duration-500
            ${
              scrolled
                ? "px-6 py-4"
                : "px-6 py-4"
            }
            `}
          >

            {/* Logo */}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="cursor-pointer select-none"
            >
              <h1 className="text-3xl font-black tracking-tight">
                Manaswi....
                <span className="text-indigo-500">.</span>
              </h1>
            </motion.div>

            {/* Desktop Navigation */}

            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`
                  relative
                  cursor-pointer
                  px-2
                  py-1
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  ${
                    active === item
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }
                  `}
                >
                  {item}

                  <motion.span
                    layoutId="navbar-indicator"
                    className={`
                    absolute
                    left-0
                    -bottom-2
                    h-[2px]
                    rounded-full
                    bg-gradient-to-r
                    from-indigo-500
                    to-purple-500
                    ${
                      active === item
                        ? "w-full"
                        : "w-0"
                    }
                    `}
                  />
                </li>
              ))}
            </ul>
                        {/* Resume Button */}

            <a
              href="/resume.pdf"
              download="Manaswi_Suraskar_Resume.pdf"
              className="
              hidden
              lg:flex
              items-center
              px-5
              py-2.5
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              font-medium
              shadow-lg
              shadow-indigo-500/20
              hover:scale-105
              hover:shadow-indigo-500/40
              active:scale-95
              transition-all
              duration-300
              "
            >
              Resume
            </a>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setOpen(!open)}
              className="
              md:hidden
              p-2
              rounded-xl
              hover:bg-white/10
              transition-all
              duration-300
              "
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="
            fixed
            top-24
            left-5
            right-5
            z-40
            rounded-2xl
            border
            border-white/10
            bg-black/80
            backdrop-blur-2xl
            shadow-2xl
            overflow-hidden
            md:hidden
            "
          >

            {navItems.map((item) => (

              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`
                w-full
                text-left
                px-6
                py-4
                transition-all
                duration-300
                ${
                  active === item
                    ? "text-indigo-400 bg-white/5"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }
                `}
              >
                {item}
              </button>

            ))}

            <div className="p-5 border-t border-white/10">

              <a
                href="/resume.pdf"
                download="Manaswi_Suraskar_Resume.pdf"
                className="
                block
                w-full
                text-center
                py-3
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                font-semibold
                hover:scale-[1.02]
                transition-all
                duration-300
                "
              >
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}