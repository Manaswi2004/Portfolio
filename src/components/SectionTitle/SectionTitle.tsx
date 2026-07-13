import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  center?: boolean;
};

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={`mb-20 ${
        center ? "text-center" : "text-left"
      }`}
    >
      {/* Subtitle */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`
          inline-flex
          items-center
          gap-3
          px-5
          py-2
          rounded-full
          border
          border-indigo-500/20
          bg-indigo-500/10
          text-indigo-300
          text-sm
          uppercase
          tracking-[3px]
          font-semibold
        `}
      >
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />

        {subtitle}
      </motion.div>

      {/* Title */}

      <h2
        className="
          mt-6
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-black
          leading-tight
          bg-gradient-to-r
          from-white
          via-gray-200
          to-indigo-300
          bg-clip-text
          text-transparent
        "
      >
        {title}
      </h2>

      {/* Decorative Line */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className={`
          h-[4px]
          mt-6
          rounded-full
          bg-gradient-to-r
          from-indigo-500
          via-purple-500
          to-cyan-400
          ${center ? "mx-auto" : ""}
        `}
      />

      {/* Small Description */}

      <p
        className={`
          mt-6
          text-gray-400
          max-w-2xl
          leading-8
          ${center ? "mx-auto" : ""}
        `}
      >
        Passionate about building modern web applications,
        crafting intuitive user experiences, and developing
        scalable AI-powered solutions with clean, maintainable
        code.
      </p>
    </motion.div>
  );
}