"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Insights", href: "#updates" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="relative flex items-center justify-between px-8 lg:px-16 h-20 bg-black/70 backdrop-blur border-b border-neutral-800">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4 text-white font-mono text-lg tracking-wide">
            <span className="px-2 py-1 border border-neutral-600 rounded-md">{">_"}</span>
            STAN
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-[20px] font-medium tracking-wide text-neutral-300 hover:text-white transition"
                >
                  {link.name}
                </Link>

                {/* UNDERLINE */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden lg:inline-flex px-5 py-2.5 text-sm font-semibold bg-white text-black rounded-md hover:bg-neutral-200 transition"
          >
            Get in Touch
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur">
          <div className="flex items-center justify-between px-6 h-20 border-b border-neutral-800">
            <span className="text-white font-mono text-lg">Menu</span>
            <button onClick={() => setOpen(false)} className="text-white">
              <X size={22} />
            </button>
          </div>

          <ul className="flex flex-col gap-6 px-6 pt-10">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-neutral-300 hover:text-white transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
