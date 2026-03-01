"use client";

import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(event.currentTarget);
    // Web3Forms API Key
    formData.append("access_key", "f9d8ddb3-a23d-45fd-bfb6-2054b4c0750a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        // Reset the form fields
        (event.target as HTMLFormElement).reset();
        
        // Optional: Reset button back to normal after 3 seconds
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-black border-t border-neutral-900">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="flex items-start gap-4 font-bold text-white leading-tight">
            <span className="h-16 sm:h-20 w-[4px] sm:w-[5px] bg-white mt-2" />
            
            <div className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              INITIATE <br className="sm:hidden" />
              <span className="text-neutral-500">COMMUNICATION</span>
            </div>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl">
            Ready to collaborate on data analysis projects or full-stack solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="border border-neutral-700 p-3 rounded-md">
                <Mail size={18} />
              </div>
              <p className="text-neutral-300">stanleymbhalati212@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="border border-neutral-700 p-3 rounded-md">
                <Phone size={18} />
              </div>
              <p className="text-neutral-300">+27 67 099 2561</p>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/stanley-mbhalati-4ab695256/"
                target="_blank"
                rel="noreferrer"
                className="border border-neutral-700 p-3 rounded-md hover:border-white transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/Stan1542"
                target="_blank"
                rel="noreferrer"
                className="border border-neutral-700 p-3 rounded-md hover:border-white transition"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="border border-neutral-800 p-8 rounded-xl bg-black">
            <form onSubmit={onSubmit} className="space-y-6">

              {/* Added 'name' attribute which Web3Forms requires */}
              <div>
                <label className="text-sm text-neutral-500">NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="ENTER NAME"
                  className="w-full mt-2 bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white transition"
                />
              </div>

              {/* Added 'name' attribute */}
              <div>
                <label className="text-sm text-neutral-500">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ENTER EMAIL"
                  className="w-full mt-2 bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white transition"
                />
              </div>

              {/* Added 'name' attribute */}
              <div>
                <label className="text-sm text-neutral-500">MESSAGE</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="ENTER MESSAGE DETAILS"
                  className="w-full mt-2 bg-black border border-neutral-800 px-4 py-3 text-white focus:outline-none focus:border-white transition"
                />
              </div>

              {/* Dynamic Button State */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-3 font-semibold flex items-center justify-center gap-2 transition duration-300 ${
                  status === "success" 
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : status === "error"
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {status === "idle" && (
                  <>
                    SEND TRANSMISSION
                    <Send size={16} />
                  </>
                )}
                {status === "loading" && (
                  <>
                    TRANSMITTING...
                    <Loader2 size={16} className="animate-spin" />
                  </>
                )}
                {status === "success" && (
                  <>
                    TRANSMISSION SUCCESSFUL
                    <CheckCircle2 size={16} />
                  </>
                )}
                {status === "error" && (
                  <>
                    TRANSMISSION FAILED - TRY AGAIN
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}