import GlassCard from "../UI/GlassCard";

const stats = [
  {
    number: "10+",
    label: "Projects",
  },
  {
    number: "5+",
    label: "Hackathons",
  },
  {
    number: "15+",
    label: "Certificates",
  },
  {
    number: "100%",
    label: "Passion",
  },
];

export default function Stats() {
  return (
    <div className="grid md:grid-cols-4 gap-6 mt-12">

      {stats.map((item) => (

        <GlassCard key={item.label}>

          <h2 className="text-5xl font-bold text-indigo-400">
            {item.number}
          </h2>

          <p className="mt-3 text-gray-400">
            {item.label}
          </p>

        </GlassCard>

      ))}

    </div>
  );
}