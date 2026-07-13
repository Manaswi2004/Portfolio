import Container from "../UI/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import GlassCard from "../UI/GlassCard";
import {
  FaGoogle,
  FaMicrosoft,
  FaReact,
  FaTrophy,
} from "react-icons/fa";

const certifications = [
  {
    icon: <FaGoogle className="text-4xl text-red-400" />,
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    description:
      "Completed Google's professional certification covering IT support, networking, Linux, system administration, security, and troubleshooting.",
  },
  {
    icon: <FaMicrosoft className="text-4xl text-blue-400" />,
    title: "Microsoft Security, Compliance & Identity Fundamentals",
    issuer: "Microsoft",
    description:
      "Learned security, compliance, identity management, and Microsoft cloud fundamentals.",
  },
  {
    icon: <FaReact className="text-4xl text-cyan-400" />,
    title: "MERN Full Stack Developer Certification",
    issuer: "Professional Certification",
    description:
      "Built full-stack applications using MongoDB, Express.js, React, and Node.js.",
  },
];

const achievements = [
  "Top 35 National Finalist - CyberShield Hackathon",
  "Splunk Build-a-Thon Participant",
  "Team Lead - Notion Community VIT Bhopal",
  "Core Member - Notion Community VIT Bhopal",
  "Volunteer - NSS Unit, VIT Bhopal",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-40">
      <Container>
        <SectionTitle
          subtitle="Achievements"
          title="Certifications & Recognition"
        />

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <GlassCard key={cert.title}>
              <div className="mb-5">{cert.icon}</div>

              <h3 className="text-xl font-bold">
                {cert.title}
              </h3>

              <p className="text-indigo-400 mt-2">
                {cert.issuer}
              </p>

              <p className="text-gray-400 mt-4 leading-7">
                {cert.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">
            Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item) => (
              <GlassCard key={item}>
                <div className="flex items-center gap-4">
                  <FaTrophy className="text-yellow-400 text-2xl" />

                  <p className="text-gray-300">
                    {item}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}