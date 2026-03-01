"use client";

import { X } from "lucide-react";

type ExperienceModalProps = {
  experience: any;
  onClose: () => void;
};

export default function ExperienceModal({
  experience,
  onClose,
}: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex items-center justify-center px-4">
      <div className="relative w-full max-w-[1100px] max-h-[90vh] overflow-y-auto bg-black border border-neutral-800 rounded-xl">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-neutral-800">
          <h2 className="text-xl font-semibold text-white">
            {experience.title}
          </h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X />
          </button>
        </div>

       {/* IMAGE FRAME - Inset with padding to match the "framed" look */}
        <div className="px-8 pt-4">
          <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-auto max-h-[420px] object-cover"
            />
          </div>
        </div>

        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">

          {/* Left */}
          <div className="lg:col-span-2">
            <h3 className="flex items-center gap-2 text-white font-semibold mb-2">
              📊 Overview
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              {experience.overviewModel}
            </p>

            <h3 className="flex items-center gap-2 text-white font-semibold mt-8 mb-2">
              ⭐ Key Outcomes
            </h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              {experience.outcomes.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="border border-neutral-800 rounded-lg p-4">
              <h4 className="text-xl text-neutral-300 mb-2">Organization</h4>
              <p className="text-white">{experience.organization}</p>
              <p className="text-xm text-neutral-500 mt-1">{experience.date}</p>
            </div>

            <div className="border border-neutral-800 rounded-lg p-4">
              <h4 className="text-xl text-neutral-300 mb-2">Technology</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xm px-2 py-1 border border-neutral-700 rounded text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {experience.certificateUrl && (
              <a
                href={experience.certificateUrl}
                target="_blank"
                className="block w-full text-center bg-white text-black py-3 rounded-lg font-medium hover:opacity-90"
              >
                View My Linkedln
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
