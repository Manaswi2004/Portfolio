import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 175,
        y: position.y - 175,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 180,
      }}
      className="
        fixed
        top-0
        left-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-indigo-500/10
        blur-[120px]
        pointer-events-none
        z-0
      "
    />
  );
}