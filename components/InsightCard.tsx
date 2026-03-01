import { Insight } from "./data-types";

interface InsightCardProps {
  article: Insight;
  onClick: () => void;
}

export default function InsightCard({ article, onClick }: InsightCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-600 transition bg-neutral-900/50"
    >
      {/* FIXED ASPECT RATIO CONTAINER */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono">
          {article.category} — {article.date}
        </p>
        <h3 className="text-xl font-bold mt-2 text-white group-hover:text-blue-400 transition-colors uppercase">
          {article.title}
        </h3>
        <p className="mt-3 text-neutral-400 text-sm leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags?.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-medium border border-neutral-800 px-2 py-1 rounded bg-black text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}