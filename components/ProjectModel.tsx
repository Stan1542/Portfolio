"use client";

import { X, Github, ExternalLink } from "lucide-react";

type ProjectModelProps = {
  project: any;
  onClose: () => void;
};

export default function ProjectModel({ project, onClose }: ProjectModelProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center px-4">
      <div className="relative w-full max-w-5xl bg-black border border-neutral-800 rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-neutral-800">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white"
          >
            <X />
          </button>
        </div>

        {/* Image */}
        <div className="px-4 sm:px-6 md:px-8 pt-4">
          <div className="relative rounded-lg overflow-hidden border border-neutral-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />

            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
              {project.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[10px] sm:text-xs uppercase tracking-wider border border-neutral-700 bg-black/80 text-neutral-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8">
          
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-2">
                Overview
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mb-2">
                Key Highlights
              </h3>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-neutral-400 space-y-1">
                {project.highlights.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full bg-white text-black py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium hover:bg-neutral-200 transition"
              >
                <Github size={18} />
                View Source
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full border border-neutral-700 text-white py-2 sm:py-3 rounded-md text-sm sm:text-base hover:border-neutral-500 transition"
              >
                <ExternalLink size={18} />
                View Live
              </a>
            )}

            <div className="border border-neutral-800 rounded-lg p-4">
              <h4 className="text-lg sm:text-xl text-white font-semibold mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm px-2 py-1 border border-neutral-700 rounded-md text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-blue-900/40 bg-blue-950/30 rounded-lg p-4">
              <h4 className="text-lg sm:text-xl text-white font-semibold mb-2">
                Impact
              </h4>
              <p className="text-sm sm:text-base text-neutral-400">
                {project.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
