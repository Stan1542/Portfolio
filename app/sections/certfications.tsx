"use client";

import { useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import CertificationModal from "@/components/CertificationModal";

const certifications = [
  {
    id: 1,
    title: "Learn React: Introduction Course",
    issuer: "Codecademy",
    year: "2025",
    image: "/images/React_Intro.png",
    overview:
      "A foundational introduction to front-end web development using React.js, focusing on the transition from traditional imperative programming to a modern declarative approach. This course covered building dynamic user interfaces by breaking down complex layouts into reusable functional components. Key concepts included managing application structure with JSX, understanding the flow of data through Props, and implementing interactivity using State.",
    skills: [
      "JSX Syntax",
      "Functional Components",
      "Props & Data Passing",
      "Virtual DOM Basics",
    ],
    verifyUrl: "https://www.codecademy.com/profiles/micro1254089982/certificates/1bf3e70ae92b43c2a3add66cbfaec661",
  },
  {
    id: 2,
    title: "Learn React: Lifecycle Methods Course",
    issuer: "Codecademy",
    year: "2025",
    image: "/images/React_LifeCycle.png",
    overview:
      "An essential deep dive into the Component Lifecycle of React applications, focusing on the three main phases: Mounting, Updating, and Unmounting. This course teaches how to strategically execute code at specific moments in a component's life, enabling advanced control over performance and side effects. Mastery of these methods is foundational for building efficient, responsive, and data-driven user interfaces in modern web development..",
    skills: ["Component Lifecycles", "Mounting & Unmounting", "Stateful UI Logic", "Component Updating"],
    verifyUrl: "https://www.codecademy.com/profiles/micro1254089982/certificates/d2c01edb69ee42179f3ca8e1cd1a47a0",
  },

    {
    id: 3,
    title: "Learn JavaScript Course",
    issuer: "Codecademy",
    year: "2024",
    image: "/images/JavaScript_Intro.png",
    overview:
      "A comprehensive foundational course in JavaScript, the primary programming language for modern web interactivity. This curriculum focused on mastering core concepts, including data types, control flow, and functions, while transitioning into Object-Oriented Programming (OOP) principles. Through 12 hands-on projects, I developed the logic required to build dynamic front-end behaviors and scalable back-end logic, forming the backbone of my full-stack engineering proficiency.",
    skills: ["Core JavaScript Syntax", "Object-Oriented Programming (OOP)", "Functional Programming", "Logic & Control Flow", "Web Interactivity"],
    verifyUrl: "https://www.codecademy.com/profiles/micro1407768799/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
  },

  {
    id: 4,
    title: "Learn Intermediate JavaScript Course",
    issuer: "Codecademy",
    year: "2024",
    image: "/images/JavaScript_Intermedaite.png",
    overview:
      "An advanced exploration of Intermediate JavaScript concepts, shifting focus toward software architecture and asynchronous execution. This curriculum covered the implementation of Object-Oriented Programming (OOP) through classes and inheritance to reduce code redundancy. A major focus was placed on mastering Asynchronous JavaScript, including Promises and the Async/Await pattern, to handle complex API requests and error management. Additionally, the course provided deep insights into the JavaScript engine, covering hoisting, currying, and the event loop to optimize execution and concurrency.",
    skills: ["Classes & Inheritance", "Async / Await & Promises", "API Fetch & Requests", "Error Handling Logic", "Event Loop & Concurrency"],
    verifyUrl: "https://www.codecademy.com/profiles/micro1407768799",
  },

   {
    id: 5,
    title: "Introduction Solving Problems with Critical and Creative Thinking ", 
    issuer: "IBM",
    year: "2024",
    image: "/images/IBM_Skills.png",
    overview:
      " A specialized course focused on mastering the cognitive frameworks required for advanced problem-solving in technical environments. This curriculum explored the intersection of critical analysis and creative synthesis, providing structured methodologies to decompose complex challenges into actionable solutions. By integrating these thinking patterns into the development lifecycle, I have enhanced my ability to debug complex systems and architect innovative solutions for enterprise-level projects.",
    skills: ["Critical Thinking", "Creative Problem Solving", "Analytical Reasoning", "Root Cause Analysis", "Systems Thinking"],
    verifyUrl: "https://students.yourlearning.ibm.com/certificate/share/afa5828ea4ewogICJvYmplY3RJZCIgOiAiSUxCLVlaUUpWWVhYTlBOVzEwQUsiLAogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICIyMDE3MjA0UkVHIgp913c8520a59-10",
  },

];

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<any>(null);

  return (
    <section id="certifications" className="py-20 sm:py-24 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center gap-4">
            <span className="h-12 sm:h-16 w-[4px] bg-white" />
            Certifications
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl">
            Verified credentials and professional achievements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              onClick={() => setActiveCert(cert)}
            />
          ))}
        </div>
      </div>

      {activeCert && (
        <CertificationModal
          certification={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}