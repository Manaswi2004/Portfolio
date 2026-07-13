type Props = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

export default function TimelineItem({
  year,
  title,
  subtitle,
  description,
}: Props) {
  return (
    <div className="relative pl-12 pb-14">

      {/* Vertical Line */}
      <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10"></div>

      {/* Circle */}
      <div className="absolute left-1 top-2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-[#0B0B0F]"></div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:border-indigo-500/40 transition">

        <p className="text-indigo-400 font-medium">
          {year}
        </p>

        <h3 className="text-2xl font-bold mt-2">
          {title}
        </h3>

        <p className="text-gray-300 mt-1">
          {subtitle}
        </p>

        <p className="text-gray-400 mt-4 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
}