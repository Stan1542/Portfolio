"use client";

import { useState } from "react";
import ExperienceCard from "@/components/ExperienceCard";
import ExperienceModal from "@/components/ExperienceModal";
import { experiences } from "./experience-data";

export default function Experience() {
  const [active, setActive] = useState<any>(null);

  return (
    <section id="experience" className="py-20 sm:py-24 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
            <span className="h-12 sm:h-16 w-[4px] bg-white" />
            Experience
          </h2>

          <p className="mt-3 text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl">
            Hands-on professional experience across enterprise systems,
            software delivery, and academic mentoring.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              onClick={() => setActive(exp)}
            />
          ))}
        </div>
      </div>

      {active && (
        <ExperienceModal
          experience={active}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}
