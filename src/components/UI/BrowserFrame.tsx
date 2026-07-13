import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
};

export default function BrowserFrame({
  image,
  title,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        rotateX: 3,
        rotateY: -3,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
      relative
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      bg-[#0F172A]
      shadow-[0_20px_80px_rgba(0,0,0,0.5)]
      "
    >
      {/* Browser Top */}

      <div
        className="
        h-12
        flex
        items-center
        justify-between
        px-5
        border-b
        border-white/10
        bg-white/5
        "
      >
        <div className="flex gap-2">

          <span className="w-3 h-3 rounded-full bg-red-500" />

          <span className="w-3 h-3 rounded-full bg-yellow-500" />

          <span className="w-3 h-3 rounded-full bg-green-500" />

        </div>

        <div
          className="
          text-xs
          text-gray-400
          truncate
          "
        >
          {title}
        </div>

        <div className="w-12" />
      </div>

      {/* Screenshot */}

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
          w-full
          duration-700
          hover:scale-110
          "
        />

      </div>
    </motion.div>
  );
}