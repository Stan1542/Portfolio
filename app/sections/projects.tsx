"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModel";

{/*this project data is for the project card */}
const projects = [
  {
    id: 1,
    title: "University Cafeteria Food Ordering System",
    description:
      "A web-based campus food ordering and delivery system that streamlines cafeteria operations by enabling online meal ordering, staff order management, and on-campus delivery tracking",
    image: "/images/Food_Ordering_System.png",
    category: "Web Application System | Final Year Project",
    tags: ["Web Application", "Database Design", "System Analysis"],

    overview:
      "UniEats is a web-based food ordering and delivery system developed for North-West University (NWU). The platform allows students, staff, and visitors to order meals from the campus cafeteria online, reducing queues and improving convenience.",

    highlights: [
      "Multi-role system supporting users, cafeteria staff, and delivery personnel",
      "Secure login with OTP-based two-factor authentication",
      "End-to-end order workflow from placement to delivery",
      "Centralised database supporting order tracking and reporting"
    ],

    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PHP (XAMPP)"],

    impact:
      "Improves campus dining efficiency by reducing queues and enhancing operational workflows.",

    sourceUrl: "https://github.com/Stan1542/Final-Year-Project-Food-Develivey-App",
    liveUrl: "https://unieats.co.za/"
  },

  {
    id: 2,
    title: "Election Voting System",
    description:
      "A secure and transparent online voting platform that enables digital voter registration, real-time vote tracking, and administrative election management through a database-driven web system.",
    image: "/images/Voting_System.png",
    category: "Web Application | Personal Project",
    tags: ["Web Application", "Database Design", "Data Visualisation"],

    overview:
      "The Online Election System is a web-based voting platform designed to support secure voter registration, transparent vote casting, and real-time election monitoring. The system provides tailored access for voters, election commissioners, and administrators, ensuring a controlled and user-friendly election process.",

    highlights: [
      "Secure voter registration with South African ID and email validation",
      "Real-time vote tracking and election statistics",
      "Role-based access for voters, election commissioners, and administrators",
      "Dynamic data visualisation using interactive charts",
      "Centralised database supporting election management and reporting"
    ],

    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PHP (XAMPP)", "Chart.js"],

    impact:
      "Demonstrates how digital systems can improve election transparency, data integrity, and accessibility by replacing manual processes with secure, real-time, database-driven workflows.",

    sourceUrl: "https://github.com/Stan1542/Online-Voting-System",
    liveUrl: "https://electionplateform.mydevhub.co.za/"
  },

   {
    id: 3,
    title: "Online Learning System",
    description:
      "An online learning platform for Grades 6–8 that supports curriculum-aligned lessons, interactive mathematics tools, and secure online assessments to enhance learner engagement and academic performance..",
    image: "/images/Online_Learning_Platform.png",
    category: "Web Application | Hackathon",
    tags: ["Web Application", "Information Systems", "Online Learning Platform"],

    overview:
      "EduLearn is a web-based learning platform designed to support learners in Grades 6 to 8 in alignment with the South African Department of Basic Education curriculum. The system enables teachers to upload learning content, provides learners with interactive mathematical tools, and delivers secure online assessments within a user-friendly environment tailored for young learners.",

    highlights: [
      "Teacher-managed platform for uploading video lessons and learning resources",
      "Interactive mathematics tools powered by the GeoGebra API",
      "Secure online assessments with anti-cheating controls",
      "Learner-friendly interface designed for primary and junior high school students",
      "Scalable system design adaptable to additional subjects and grade levels"
    ],

    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "GeoGebra API"],

    impact:
      "Supports accessible and engaging digital learning by combining curriculum-aligned content, interactive tools, and secure assessment mechanisms, helping improve learner participation and academic outcomes.",

    sourceUrl: "https://github.com/Stan1542/Online-learning-plateform-",
    liveUrl: "https://edu-learn.mydevhub.co.za/"
  },

   {
    id: 4,
    title: "Student Registration Systems",
    description:
      "A web-based student registration system that manages biographical updates, validates academic progression eligibility, and generates proof of registration for second-year Information Systems students.",
    image: "/images/Student_Reg_System.png",
    category: "Web Application | Second Year Project",
    tags: ["Web Application", "Information Systems", "System Validation"],

    overview:
      "The North-West University Student Registration System is a web-based application designed to support the registration process for second-year Information Systems students. The system allows students to update biographical information, validates eligibility for academic progression based on completed core modules, and supports multiple academic programme streams. A demo payment gateway is included to simulate the registration workflow, and successful registrations generate a downloadable proof of registration.",
    highlights: [
      "Student registration workflow with biographical information management",
      "Academic eligibility validation based on core module completion",
      "Support for multiple programme streams (Extended and Mainstream)",
      "Demo payment gateway integrated into the registration process",
      "Automatic generation of proof of registration",
      "Secure user authentication with login, logout, and signup functionality"
    ],

    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PHP (XAMPP)"],

    impact:
      "Demonstrates how information systems can streamline academic administration by automating student eligibility checks, reducing manual processing, and providing structured digital records for registration workflows.",

    sourceUrl: "https://github.com/Stan1542/NWU-Registeration-System-dev",
    liveUrl: "https://studentregistration.mydevhub.co.za/"
  },

   {
    id: 5,
    title: "Banking System (Coming soon)",
    description: "A full-stack banking system designed to support secure account management, transaction processing, and real-time financial reporting through a database-driven web application.",
    image: "/images/Banking_Systems.png",
    category: "Web Application | Personal Project",
    tags: ["Web Application", "Database Design", "Financial Systems"],

    overview:
      "The Banking System is a web-based financial application currently under development, aimed at simulating core banking operations in a secure and structured environment. The system is designed to support customer account management, transaction processing, and administrative oversight, while ensuring data integrity, auditability, and regulatory-style reporting. It provides a practical implementation of real-world banking concepts using modern web and database technologies.",

    highlights: [
      "Secure customer account creation and authentication",
      "Transaction processing for deposits, withdrawals, and transfers",
      "Append-only transaction ledger to preserve financial history",
      "Role-based access for customers and bank administrators",
      "Centralised database supporting account management and reporting"
    ],

    techStack: ["React.js", "Node.js", "AppWrite", "Chart.js"],

    impact:
      "Demonstrates an understanding of real-world banking workflows, data integrity, and secure transaction handling by modelling core financial processes in a structured, database-driven system.",

    sourceUrl: "",
    liveUrl: ""
  }
];


export default function Projects() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 md:py-24 bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center gap-3 sm:gap-4">
            <span className="h-12 sm:h-16 w-[4px] bg-white" />
            Projects
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-400 max-w-2xl">
            A showcase of analytical reports, dashboards, and applications
            demonstrating data-driven solutions and practical experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}