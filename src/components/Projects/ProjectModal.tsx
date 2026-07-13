import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


type Props = {
  open: boolean;
  onClose: () => void;
  project: any;
};


export default function ProjectModal({
  open,
  onClose,
  project,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: .9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .9, opacity: 0 }}
            className="max-w-5xl w-full bg-[#111827] rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="relative">

              <img
                src={project.image}
                className="w-full h-[350px] object-cover"
              />

              <button
                onClick={onClose}
                className="absolute top-5 right-5 bg-black/60 p-3 rounded-full hover:bg-red-500 transition"
              >
                <X size={20}/>
              </button>

            </div>

            <div className="p-10">

              <h2 className="text-4xl font-bold">
                {project.title}
              </h2>

              <p className="text-indigo-400 mt-2">
                {project.subtitle}
              </p>

              <p className="mt-6 text-gray-400 leading-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {project.tech.map((item: string) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-5 mt-10">

                <a
                  href={project.github}
                  target="_blank"
                  className="px-7 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="px-7 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
                >
                  Live Demo
                </a>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}