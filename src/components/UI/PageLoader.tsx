import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[9999]
            bg-[#09090B]
            flex
            items-center
            justify-center
          "
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{
              scale: [0.8, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="text-5xl font-black"
          >
            Manaswi
            <span className="text-indigo-500">.</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}