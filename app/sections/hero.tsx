"use client"

import { useEffect, useRef } from "react";
import Link from "next/link";
import {useState} from "react";
import CvModal from "@/components/CvModal";


export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [cvOpen, setCvOpen] = useState(false);

  

  return (
    <section
    ref={heroRef}
  id="hero"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    e.currentTarget.style.setProperty("--x", `${x}px`)
    e.currentTarget.style.setProperty("--y", `${y}px`)
  }}
      
      className="
        relative
        min-h-screen md:min-h-[110vh]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
  "
      
    >
      {/* GRID (TOP ONLY) */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          pointer-events-none
          [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black_65%,transparent_100%)]
        "
      />

      {/* FADE TO BLACK */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-b from-transparent to-black" />

      {/* SPOTLIGHT */}
     <div
  className="
    pointer-events-none
    absolute
    inset-0
    transition-opacity
    duration-300
  "
  style={{
    background: `radial-gradient(
      40vw 40vw at var(--x) var(--y),
      rgba(255,255,255,0.12),
      transparent 70%
    )`,
  }}
/>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          px-6
          text-center
          max-w-5xl
          xl:max-w-6xl
          2xl:max-w-7xl
        "
      >
        {/* BADGE */}
        <div className="mb-6 flex justify-center">
          <div
            className="
             inline-flex
             items-center
             gap-2
             px-4
             py-2
            text-[0.70rem] sm:text-[0.80rem] md:text-sm lg:text-base
             font-mono
             uppercase
             tracking-widest
             text-neutral-300
             border
             border-neutral-700
             bg-neutral-900/50
             backdrop-blur
             rounded-full
            "
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            SOFTWARE | SYSTEMS | ANALYTICS
          </div>
        </div>

        {/* NAME */}
        <h1
          className="
             text-4xl
             sm:text-5xl
             md:text-6xl
             lg:text-7xl
             xl:text-8xl
             leading-[1.05]
             font-bold
             tracking-tight
             text-white
          "
        >
          Stanley Mbhalati
        </h1>

        {/* TAGLINE (SEPARATE LINE) */}
        <p className="mt-8
             text-lg
             sm:text-xl
             md:text-2xl
             font-light
             leading-relaxed
             text-neutral-400">
          Translating business needs into scalable software and system solutions.
        </p>

        {/* DESCRIPTION */}
        <p
          className="
              mt-6
              text-lg
              md:text-xl
              xl:text-2xl
              max-w-4xl
              mx-auto
              font-light
              leading-snug
              text-neutral-400
          "
        >
          Applying software development, systems design, and analytics to turn
          <span className="text-white font-medium"> Complex Requirements into Practical</span>,{" "}
          <span className="text-white font-medium">Business-Ready Solutions</span> accross cloud and{" "}
          <span className="text-white font-medium">
            Enterprise Platforms
          </span>
          .
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#projects"
            className="
             px-6 sm:px-8 md:px-10
             py-3 sm:py-4
             bg-white
             text-black
             text-[1.250rem]
             text-sm sm:text-base md:text-lg
             font-bold
             rounded-sm
             border
             border-white
             hover:bg-neutral-200
             transition-all
             duration-200
             flex
             items-center
             gap-2
            "
          >
            View Projects →
          </Link>

          <button
            onClick={() => setCvOpen(true)}
            className="
            px-9
            py-4
            text-lg
            text-[1.250rem]
            md:text-[1.450rem]
            font-semibold
            border
            border-neutral-700
            text-white
            rounded-md
            hover:border-white
            hover:bg-neutral-900
            transition
            flex
            items-center
            gap-2
            "
          >
            View CV ↓
          </button>
        </div>
      </div>
          <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>

    
  )

  
}
