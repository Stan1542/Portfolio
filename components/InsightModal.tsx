"use client";
import { Insight } from "./data-types";

interface InsightModalProps {
  article: Insight;
  onClose: () => void;
}

export default function InsightModal({ article, onClose }: InsightModalProps) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-neutral-800 rounded-2xl max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-neutral-400 hover:text-white transition"
        >
          ✕
        </button>

        <div className="overflow-y-auto">
          {/* Top Hero Image */}
          <div className="w-full aspect-video bg-neutral-900">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 sm:p-10">
            <p className="text-xs font-mono text-blue-500 uppercase tracking-widest">
              {article.category} • {article.date}
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mt-4 text-white leading-tight">
              {article.title}
            </h2>

            {/* LinkedIn Style Body Text */}
            <div className="mt-8 text-neutral-300 text-lg leading-relaxed whitespace-pre-line space-y-4 font-light">
              {article.content}
            </div>
            
            <div className="mt-10 pt-6 border-t border-neutral-800">
               <p className="text-sm text-neutral-500 italic">
                 Shared by Stanley Mbhalati
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}