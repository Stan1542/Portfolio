type UpdateCardProps = {
  update: any;
  onClick: () => void;
};

export default function UpdateCard({ update, onClick }: UpdateCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group
        cursor-pointer
        border border-neutral-800
        rounded-xl
        overflow-hidden
        bg-[#0a0a0a]
        transition-all duration-300
        hover:border-neutral-600
        flex flex-col
        h-full
      "
    >
      {/* Top Image Section */}
      <div className="h-[220px] overflow-hidden bg-neutral-900 w-full relative">
        <img
          src={update.image}
          alt={update.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Main Content Section (flex-grow ensures it fills the rest of the card) */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Date with Calendar Icon */}
        <div className="flex items-center gap-2 text-[14px] text-neutral-500 mb-3 uppercase tracking-widest font-mono">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {update.date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
          {update.title}
        </h3>

        {/* Excerpt/Description (line-clamp keeps it to 3 lines maximum) */}
        <p className="text-sm text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
          {update.description}
        </p>

        {/* Bottom Tags Section (mt-auto pushes this to the absolute bottom) */}
        <div className="mt-auto pt-4 border-t border-neutral-800 flex items-center justify-between">
          
          <div className="flex flex-wrap gap-2">
            {/* If you have an array of tags, map them. Otherwise, fall back to the category */}
            {update.tags ? (
              update.tags.map((tag: string, index: number) => (
                <span 
                  key={index} 
                  className="text-[12px] uppercase tracking-widest font-medium border border-neutral-800 px-2 py-1 rounded-sm bg-black text-neutral-500"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-[9px] uppercase tracking-widest font-medium border border-neutral-800 px-2 py-1 rounded-sm bg-black text-neutral-500">
                {update.category}
              </span>
            )}
          </div>

          {/* Hover Arrow */}
          <svg 
            className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>

        </div>
      </div>
    </div>
  );
}