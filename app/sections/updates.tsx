"use client";

import { useState } from "react";
import UpdateCard from "@/components/UpdateCard";
import UpdateModal from "@/components/UpdateModal";
import Link from "next/link";


const updates = [
  {
    id: 1,
    tags: ["Growth", "Education"],
    date: "28 Nov, 2025",
    title: "Mission Accomplished: BIT Honours at UP 🎓",
    image: "/images/grad_pic.png",
    description: "I’m grateful to officially complete my BIT Honours in Information Systems at the University of Pretoria.",
    content: `
I am proud to share that I have officially completed my Bachelor of Information Technology Honours in Information Systems at the University of Pretoria.

This journey was about much more than academics. It was a rigorous process of growth, discipline, and continuous learning. The challenges I faced along the way fundamentally shaped my approach to complex systems and strengthened my resilience as a developer and analyst.

Through this programme, I deepened my technical and strategic expertise across several core areas:
• Applied Data Science & Data Warehousing
• Information Systems Development
• Management of ICT Projects & Information
• Human-Computer Interaction
• Comprehensive Research Report

I want to extend my sincere gratitude to my lecturers for their guidance. A special thank you goes to Marie Hattingh, who consistently encouraged me to embrace challenges and learn from my mistakes at all times. That mentorship was invaluable to my professional growth.

I am incredibly excited to apply this knowledge in real-world, enterprise environments and continue building impactful solutions in the tech and data space. 

Thank you to everyone who believed in me throughout this journey. The future is just getting started.
    `,
  },
  {
    id: 2,
    tags: ["Academic", "Research"],
    date: "04 Nov, 2025",
    title: "Why Emerging Technologies Struggle to Scale in the Public Sector",
    image: "/images/research.png",
    description: "My SLR examining why digital government initiatives fail to scale. This research unpacks the interconnected socio-technical barriers using the TOE framework",
    content: `
I recently finalized my systematic literature review: THE CHALLENGES OF SCALING EMERGING TECHNOLOGIES IN DIGITAL GOVERNMENT.

While governments increasingly adopt AI, blockchain, cloud computing, and data analytics to modernize public services, large-scale implementation remains uneven—particularly in developing countries. My research set out to understand exactly why these initiatives stall.

By applying the Technology-Organisation-Environment (TOE) framework across 43 peer-reviewed studies, I demonstrated that digital transformation is not merely a technological challenge. It is a systemic issue shaped by interacting factors.

THE CORE BARRIERS IDENTIFIED:
• TECHNOLOGICAL: Legacy systems, interoperability failures, and cybersecurity risks.
• ORGANISATIONAL: Weak leadership, insufficient change management, and digital-skills shortages.
• ENVIRONMENTAL: Rigid regulatory frameworks, financial limitations, and low citizen trust.

Rather than treating these obstacles as isolated constraints, my study shows how they reinforce one another through complex feedback loops. 

THE MAIN TAKEAWAY
Fragmented interventions are insufficient. Sustainable digital transformation depends on breaking these reinforcing cycles. Ultimately, upgrading digital government is not simply a tech upgrade—it is a multidimensional institutional reform process requiring strategic alignment, adaptive regulation, and inclusive governance.
    `,
  },
  {
    id: 3,
    category: "Learning",
    tags: ["Skills", "Development"],
    date: "01 Aug, 2025",
    title: "Stepping into Tech: Enterprise Workflows & APIs",
    image: "/images/experince.png",
    description: "My transition from academia to the tech ecosystem through a Learnership Programme at Consnet",
    content: `
Stepping into my first professional role in the tech industry was a defining moment in my career. 

I joined Consnet through their Learnership Programme while simultaneously completing my university studies. Balancing academic rigor with real-world enterprise demands provided an incredible environment to immediately bridge the gap between theory and practice. I was able to take what I was learning in the classroom and apply it directly to live business environments.

CORE TECHNICAL & BUSINESS FOCUS:
• Mapping complex business requirements into logical workflow architectures.
• Designing and deploying enterprise automations using Power Automate.
• Integrating third-party platforms via REST APIs to ensure seamless data flow.
• Configuring and optimizing CRM environments to reduce manual processing time.

THE MAIN TAKEAWAY
Managing both my studies and this role taught me exceptional time management and the critical importance of systems thinking. I realized that the most valuable developers are those who understand the business process just as well as the technology. Building reliable, automated workflows at Consnet laid the essential groundwork for my current focus on data engineering and systems architecture.
    `,
  },
];

export default function Updates() {
  const [activeUpdate, setActiveUpdate] = useState<any>(null);

  return (
    <section id="updates" className="py-20 sm:py-24 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
      
        {/* Header */}
<div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
  
  {/* Left */}
  <div>
    <h2 className="text-4xl sm:text-5xl font-bold text-white flex items-center gap-4">
      <span className="h-16 sm:h-20 w-[4px] sm:w-[5px] bg-white" />
      Insights <span className="text-neutral-500"> & Updates</span>
    </h2>

    <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-xl">
      Thoughts on technology, project updates, and data analysis trends.
    </p>
  </div>

  {/* Right / Mobile Bottom */}
 {/* <div className="mt-6 sm:mt-0 pl-55 sm:pl-0">
    <Link
      href="/blog"
      className="
        text-white
        text-sm sm:text-base
        font-medium
        border-b border-neutral-600
        hover:border-white
        transition
        inline-flex items-center gap-2
        whitespace-nowrap
      "
    >
      View All Articles →
    </Link>
  </div> */}

</div>

          

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {updates.map((update) => (
            <UpdateCard
              key={update.id}
              update={update}
              onClick={() => setActiveUpdate(update)}
            />
          ))}
        </div>
      </div>

      {activeUpdate && (
        <UpdateModal
          update={activeUpdate}
          onClose={() => setActiveUpdate(null)}
        />
      )}
    </section>
  );
}
