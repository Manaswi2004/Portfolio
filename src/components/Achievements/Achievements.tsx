import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Container from "../UI/Container";
import GlassCard from "../UI/GlassCard";

const stats = [
  {
    number: 10,
    suffix: "+",
    label: "Projects",
  },
  {
    number: 5,
    suffix: "+",
    label: "Certifications",
  },
  {
    number: 2,
    suffix: "+",
    label: "Hackathons",
  },
  {
    number: 12,
    suffix: "+",
    label: "Technologies",
  },
];

function Counter({
  end,
  suffix,
}: {
  end: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;

    const duration = 1500;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref}>
      <h2 className="text-5xl font-black text-indigo-400">
        {count}
        {suffix}
      </h2>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="py-24">
      <Container>
        <GlassCard>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

            {stats.map((item) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="text-center"
              >
                <Counter
                  end={item.number}
                  suffix={item.suffix}
                />

                <p className="text-gray-400 mt-4">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>
        </GlassCard>
      </Container>
    </section>
  );
}