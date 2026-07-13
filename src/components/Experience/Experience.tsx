import Container from "../UI/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import TimelineItem from "./TimelineItem";

const timeline = [
  {
    year: "2023 - Present",
    title: "B.Tech Computer Science Engineering",
    subtitle: "VIT Bhopal University",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science Engineering with a strong focus on frontend development, AI, and scalable web applications.",
  },

  {
    year: "Leadership",
    title: "Team Lead",
    subtitle: "Notion Community - VIT Bhopal",
    description:
      "Led community initiatives, collaborated with peers, and organized technical activities.",
  },

  {
    year: "Achievement",
    title: "Top 35 National Finalist",
    subtitle: "CyberShield Hackathon",
    description:
      "Selected among the Top 35 teams nationwide for developing an AI-powered cybersecurity solution.",
  },

  {
    year: "Community",
    title: "NSS Volunteer",
    subtitle: "VIT Bhopal",
    description:
      "Participated in social outreach programs, awareness campaigns, and village development activities.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-40">
      <Container>

        <SectionTitle
          subtitle="My Journey"
          title="Experience & Leadership"
        />

        <div className="max-w-4xl mx-auto mt-20">

          {timeline.map((item) => (
            <TimelineItem
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}