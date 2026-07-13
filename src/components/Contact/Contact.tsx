import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import Container from "../UI/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../UI/GlassCard";

const contacts = [
  {
    title: "Email",
    value: "manaswisuraskar10@gmail.com", // Replace
    icon: <FaEnvelope />,
    link: "mailto:manaswisuraskar10@gmail.com",
  },
  {
    title: "Phone",
    value: "+91 9545863348", // Replace
    icon: <FaPhoneAlt />,
    link: "tel:+919545863348",
  },
  {
    title: "GitHub",
    value: "github.com/Manaswi2004",
    icon: <FaGithub />,
    link: "https://github.com/Manaswi2004",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/manaswi-suraskar-bb131b28a", // Replace
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/manaswi-suraskar-bb131b28a/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-40">
      <Container>

        <SectionTitle
          subtitle="Let's Connect"
          title="Get In Touch"
          center
        />

        <div className="grid md:grid-cols-2 gap-8">
                    {contacts.map((contact, index) => (

            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >

              <GlassCard>

                <a
                  href={contact.link}
                  target={
                    contact.title === "GitHub" ||
                    contact.title === "LinkedIn"
                      ? "_blank"
                      : "_self"
                  }
                  rel="noopener noreferrer"
                  className="
                  group
                  flex
                  items-center
                  gap-5
                  "
                >

                  {/* ICON */}

                  <div
                    className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-600
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-white
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                    "
                  >
                    {contact.icon}
                  </div>

                  {/* CONTENT */}

                  <div className="flex-1">

                    <p className="text-sm text-gray-400 uppercase tracking-widest">
                      {contact.title}
                    </p>

                    <h3
                      className="
                      mt-1
                      text-lg
                      font-semibold
                      transition-colors
                      duration-300
                      group-hover:text-indigo-400
                      "
                    >
                      {contact.value}
                    </h3>

                  </div>

                  {/* ARROW */}

                  <div
                    className="
                    text-2xl
                    text-gray-500
                    transition-all
                    duration-300
                    group-hover:text-indigo-400
                    group-hover:translate-x-1
                    "
                  >
                    →
                  </div>

                </a>

              </GlassCard>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >

          <h3 className="text-3xl font-bold">
            Let's Build Something Amazing 🚀
          </h3>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-8">
            I'm actively looking for internship opportunities,
            freelance projects, and exciting collaborations in
            Frontend Development, Full Stack Development, and AI.
            Feel free to reach out—I'd love to connect!
          </p>

          <a
            href="mailto:manaswisuraskar10@gmail.com"
            className="
            inline-flex
            mt-10
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            font-semibold
            shadow-xl
            shadow-indigo-500/30
            hover:scale-105
            active:scale-95
            transition-all
            duration-300
            "
          >
            Say Hello 👋
          </a>

        </motion.div>

      </Container>
    </section>
  );
}