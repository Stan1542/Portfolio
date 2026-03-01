"use client";

import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
            <span className="h-12 sm:h-16 w-[4px] bg-white" />
            Education <span className="text-neutral-500 ">History</span>
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            Academic background in Information Systems and technology.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-20 max-w-5xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-neutral-800 hidden md:block" />

           {/* ========================= */}
          {/* HONOURS DEGREE */}
          {/* ========================= */}
          <div className="relative mb-24">
            {/* Square Node Marker */}
            <div className="absolute left-[50%] top-0 -translate-x-1/2 w-4 h-4 border-2 border-white bg-black z-10 hidden md:block" />
            
            <div className="md:ml-auto md:w-[50%] border border-neutral-800 rounded-none p-8 bg-black hover:border-neutral-600 transition duration-300 relative">
              <div className="flex items-center gap-3 text-neutral-500 mb-4">
                <GraduationCap size={20} />
                <p className="text-xl uppercase tracking-widest font-mono">
                  Completed 2025
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight">
                BACHELOR INFOMRATION TECHNOLOGY HONOURS <br />
                INFORMATION SYSTEMS (NQF L8)
              </h3>

              <p className="mt-2 text-neutral-500 font-medium text-xl">
                University of Pretoria
              </p>

              <p className="mt-4 text-xl text-neutral-400 leading-relaxed">
                Specialized in Data Analytics and Business Intelligence. 
                Final year completed.
              </p>

              <div className="mt-6">
                <p className="text-white text-xl font-semibold mb-3">Key Modules:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Research Report", " Data Warehousing", " Management of ICT Projects",
                    " Human-Computer Interaction", "Project Management", "IS Security",
                    "Applied Data Science", "Management of Information System"
                  ].map((module) => (
                    <span
                      key={module}
                      className="px-2 py-1 text-[16px] border border-neutral-800 rounded bg-neutral-900/50 text-neutral-400"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========================= */}
          {/* BCOM DEGREE */}
          {/* ========================= */}
          <div className="relative">
             {/* Square Node Marker */}
             <div className="absolute left-[50%] top-0 -translate-x-1/2 w-4 h-4 border-2 border-white bg-black z-10 hidden md:block" />

            <div className="md:mr-auto md:w-[50%] border border-neutral-800 rounded-none p-8 bg-black hover:border-neutral-600 transition duration-300">
              <div className="flex items-center gap-3 text-neutral-500 mb-4">
                <GraduationCap size={18} />
                <p className="text-xl uppercase tracking-widest font-mono">
                  Completed 2024
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight">
                BACHELORS OF COMMERCE IN INFORMATION SYSTEMS (NQF L7)
              </h3>

              <p className="mt-2 text-neutral-500 font-medium text-xl">
                North-West University
              </p>

              <p className="mt-4 text-xl text-neutral-400 leading-relaxed">
                Specialized in Data Analytics and Business Intelligence. 
                Final year completed.
              </p>

              <div className="mt-6">
                <p className="text-white text-sm font-semibold mb-3">Modules:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Statics", "Database", "Object-Oriented Language", "Emerging Business Technologies", "Business Intelligence", "Management Information Systems",
                    " System Design and Analysis", "Web programming", " Information Systems Security", "Project Management for Information Systems",
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="px-2 py-1 text-[16px] border border-neutral-800 rounded bg-neutral-900/50 text-neutral-400"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}