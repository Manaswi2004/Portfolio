import { motion } from "framer-motion";

const particles = Array.from({ length: 30 });

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Base Background */}

      <div className="absolute inset-0 bg-[#09090B]" />

      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.06]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:60px_60px]
        "
      />

      {/* Aurora Blob */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-20
        left-10
        w-[500px]
        h-[500px]
        rounded-full
        bg-indigo-600/25
        blur-[130px]
        "
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-0
        right-0
        w-[450px]
        h-[450px]
        rounded-full
        bg-purple-600/20
        blur-[130px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="
        absolute
        left-1/2
        top-1/3
        -translate-x-1/2
        w-[380px]
        h-[380px]
        rounded-full
        bg-cyan-500/10
        blur-[120px]
        "
      />

      {/* Floating Particles */}

      {particles.map((_, i) => (
        <motion.span
          key={i}
          initial={{
            y: Math.random() * 900,
            x: Math.random() * 1600,
            opacity: Math.random(),
          }}
          animate={{
            y: [
              Math.random() * 900,
              Math.random() * 900 - 100,
              Math.random() * 900,
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 8,
          }}
          className="
          absolute
          w-1.5
          h-1.5
          rounded-full
          bg-white/30
          "
        />
      ))}
    </div>
  );
}