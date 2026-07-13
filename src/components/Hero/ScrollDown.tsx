import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
  return (
    <motion.div
      animate={{
        y: [0, 15, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ChevronDown
        size={35}
        className="text-gray-400"
      />
    </motion.div>
  );
}