import Container from "../UI/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../UI/GlassCard";
import { motion } from "framer-motion";
import GitHubProfile from "./GitHubProfile";

export default function GitHubStats() {
  const username = "Manaswi2004";

  return (
    <section id="github" className="py-36">
      <Container>
        <SectionTitle
          subtitle="Open Source"
          title="GitHub Activity"
          center
        />
        <GitHubProfile/>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* GitHub Stats */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard>

              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000`}
                alt="GitHub Stats"
                className="w-full rounded-xl"
              />

            </GlassCard>
          </motion.div>

          {/* Top Languages */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard>

              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`}
                alt="Languages"
                className="w-full rounded-xl"
              />

            </GlassCard>
          </motion.div>

        </div>

        {/* Contribution Streak */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-8"
        >
          <GlassCard>

            <img
              src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true&background=00000000`}
              alt="GitHub Streak"
              className="w-full"
            />

          </GlassCard>
        </motion.div>

      </Container>
    </section>
  );
}