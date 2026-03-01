type ExperienceCardProps = {
  experience: any;
  onClick: () => void;
};

export default function ExperienceCard({
  experience,
  onClick,
}: ExperienceCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group relative cursor-pointer
        rounded-xl border border-neutral-800
        bg-black overflow-hidden
        transition hover:border-neutral-600
      "
    >
      {/* Image */}
      <div className="relative h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden">
        <img
          src={experience.image}
          alt={experience.title}
          className="
            w-full h-full object-cover grayscale
            transition duration-500
            group-hover:scale-105
            group-hover:grayscale-0
          "
        />

        {/* Badge */}
        <span className="
          absolute top-3 left-3
          text-[10px] sm:text-xs
          px-2 sm:px-3
          py-1
          rounded-full
          border border-neutral-700
          bg-black/70
          text-neutral-300
          uppercase tracking-wide
        ">
          {experience.badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col">
        {/* Title + Date */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            {experience.title}
          </h3>

          <span className="
            text-[11px] sm:text-xs
            px-2 sm:px-3
            py-1
            border border-neutral-800
            bg-neutral-900/50
            rounded
            text-neutral-400
            font-medium
            w-fit
          ">
            {experience.date}
          </span>
        </div>

        {/* Organization */}
        <p className="mt-2 text-sm sm:text-base text-neutral-400">
          {experience.organization}
        </p>

        {/* Overview */}
        <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-500 line-clamp-3">
          {experience.overviewCard}
        </p>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="
                  text-[10px] sm:text-xs
                  px-2 sm:px-3
                  py-1
                  border border-neutral-700
                  rounded
                  text-neutral-400
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <span className="text-sm text-white flex items-center gap-1">
            View Details ↗
          </span>
        </div>
      </div>
    </div>
  );
}
