"use client";

import { 
  BarChart3, 
  ClipboardList, 
  Code2, 
  Cpu, 
  Layers, 
  Users, 
  Database, 
  FileSearch, 
  Globe 
} from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-24 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4">
            <span className="h-16 w-[4px] bg-white" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
              Skills <span className="text-neutral-500">Summary</span>
            </h2>
          </div>
          <p className="mt-4 text-lg text-neutral-400">
            Tools and technologies configured for analysis and development.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group relative border border-neutral-800 rounded-none p-8 bg-black 
                         hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)] 
                         transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  {/* Circular Icon Badge */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors duration-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight leading-tight">
                    {skill.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xl text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      <span className="mt-1.5 h-1 w-1 bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillsData = [
  {
    icon: <BarChart3 size={20} />,
    title: "DATA ANALYSIS & REPORTING",
    items: [
      "Data reporting and dashboard creation (Power BI, Excel).",
      "KPI tracking and executive-level reporting.",
      "Data validation and structured data interpretation.",
      "Business insight presentation to stakeholders."
    ]
  },
  {
    icon: <FileSearch size={20} />,
    title: "BUSINESS ANALYSIS & SDLC",
    items: [
      "Requirements support and documentation.",
      "Functional specification alignment.",
      "Test script design and validation.",
      "User Acceptance Testing (UAT) support.",
      "Hybrid Agile and SDLC exposure.",
      "Stakeholder communication and collaboration."
    ]
  },
  {
    icon: <Database size={20} />,
    title: "SOFTWARE & SYSTEM DELIVERY",
    items: [
      "System configuration and solution support.",
      "Deployment and post-deployment support.",
      "API integration (exposure).",
      "Automation workflows (Power Automate exposure).",
      "Enterprise and cloud-based platforms."
    ]
  },
  {
    icon: <Cpu size={20} />,
    title: "DIGITAL & WEB TECHNOLOGIES",
    items: [
      "Web development fundamentals (HTML, CSS, JavaScript, React.js)",
      "Object-oriented programming fundamentals (C#, Java).",
      "System integration concepts.",
      "Digital channel solution exposure (Genesys Cloud)."
    ]
  },
  {
    icon: <Layers size={20} />,
    title: "TOOLS & PLATFORMS",
    items: [
      "GitHub (version control exposure)",
      "Lucidchart / BPMN modelling",
      "Figma (UI prototyping).",
      "Microsoft Office Suite.",
      "CRM & ERP platform exposure."
    ]
  },
  {
    icon: <Users size={20} />,
    title: "PROFESSIONAL CAPABILITIES",
    items: [
      "Analytical thinking.",
      "Technical documentation.",
      "Clear communication of complex concepts.",
      "Cross-functional collaboration.",
      "Continuous learning mindset."
    ]
  }
];