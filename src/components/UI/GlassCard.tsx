import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-8
        md:p-10
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        transition-all
        duration-500
        hover:border-indigo-500/40
        hover:shadow-[0_0_60px_rgba(99,102,241,0.25)]
        ${className}
      `}
    >
      {/* Gradient Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-indigo-500/10
          via-transparent
          to-purple-500/10
          pointer-events-none
        "
      />

      {/* Top Highlight */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}