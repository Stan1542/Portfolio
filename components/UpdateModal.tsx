"use client";

import { X } from "lucide-react";

type UpdateModalProps = {
  update: any;
  onClose: () => void;
};

export default function UpdateModal({ update, onClose }: UpdateModalProps) {
  if (!update) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="
        relative
        w-full
        max-w-3xl
        bg-black
        border border-neutral-800
        rounded-2xl
        max-h-[90vh]
        overflow-y-auto
      ">

        {/* Close Button - Added background blur so it's always visible over the image */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 bg-black/40 hover:bg-black/80 backdrop-blur p-2 rounded-full text-neutral-300 hover:text-white transition-all"
        >
          <X size={20} />
        </button>

        
     {/* Image Section with Gradient Fade */}
        {/* Changed from fixed height to aspect-video so it scales perfectly with the image */}
        <div className="relative w-full aspect-video bg-black">
          <img
            src={update.image}
            alt={update.title}
            // Changed to object-contain and added pt-6 so the text drops below the close button
            className="w-full h-full object-contain object-top pt-8 sm:pt-4 px-2"
          />
          {/* Gradients for the seamless fade effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>

        {/* Content Section - The negative margin (-mt-24) pulls this up into the faded area */}
        <div className="relative z-10 px-6 sm:px-12 pb-12 -mt-20 sm:-mt-24">
          
        
          {/* Badge & Date Row */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            
            {/* Map through the tags array */}
            <div className="flex flex-wrap gap-2">
              {update.tags?.map((tag: string, index: number) => (
                <span 
                  key={index} 
                  className="bg-white text-black px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="text-neutral-600 text-lg font-light">|</span>
            
            <span className="text-neutral-400 text-xs sm:text-sm font-mono tracking-widest uppercase">
              {update.date}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            {update.title}
          </h2>

          {/* Body Text */}
          <div className="text-neutral-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {update.content}
          </div>
          
        </div>

      </div>
    </div>
  );
}