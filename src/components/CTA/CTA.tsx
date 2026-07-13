import { motion } from "framer-motion";
import Container from "../UI/Container";

export default function CTA() {
  return (
    <section className="py-40 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full left-1/2 -translate-x-1/2 top-0"/>

      </div>

      <Container>

        <motion.div
          initial={{opacity:0,y:80}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:.8}}
          viewport={{once:true}}

          className="
          rounded-[40px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-10
          py-20
          text-center
          "
        >

          <p className="text-indigo-400 uppercase tracking-[6px] font-semibold">

            Let's Build Together

          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-black
            mt-6
            bg-gradient-to-r
            from-white
            via-indigo-400
            to-purple-400
            text-transparent
            bg-clip-text
            "
          >
            Have an Amazing Idea?
          </h2>

          <p
            className="
            max-w-3xl
            mx-auto
            mt-8
            text-gray-400
            leading-8
            text-lg
            "
          >

            Whether you're looking for a Frontend Developer,
            collaborating on an AI project,
            or building something impactful,
            I'd love to connect and create something amazing together.

          </p>

          <button
            onClick={()=>{
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior:"smooth"
                });
            }}
            className="
            mt-12
            px-10
            py-5
            rounded-2xl
            bg-indigo-600
            hover:bg-indigo-500
            hover:scale-105
            duration-300
            font-semibold
            shadow-xl
            shadow-indigo-600/30
            "
          >

            Let's Connect 🚀

          </button>

        </motion.div>

      </Container>

    </section>
  );
}