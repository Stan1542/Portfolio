type ProjectCardProps = {
  project: any;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col cursor-pointer rounded-xl border border-neutral-800 bg-black overflow-hidden transition hover:border-neutral-600"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Category Badge */}
        <span className="absolute top-3 right-3 text-[10px] sm:text-xs uppercase tracking-wider px-2 sm:px-3 py-0.5 sm:py-1 border border-neutral-700 bg-black/70 text-neutral-300 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 sm:p-6 flex-1">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-400 line-clamp-3">
          {project.description}
        </p>

        {/* Hover Arrow */}
        <div className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center bg-black/70 text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          ↗
        </div>

        {/* Footer Tags */}
        <div className="mt-auto pt-4 border-t border-neutral-800 flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs sm:text-sm px-2 py-1 border border-neutral-700 rounded text-neutral-400"
            >
              {tag}
            </span>
          ))}
          <span className="text-xs text-neutral-500 ml-2">+ more</span>
        </div>
      </div>
    </div>
  );
}
