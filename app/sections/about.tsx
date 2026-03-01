export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 flex justify-center bg-black"
    >
      <div
        className="
          w-full
          max-w-[80rem]
          mx-auto
          px-4
        "
      >
        {/* CARD */}
        <div
          className="
            relative
            border
            border-neutral-800
            bg-neutral-950/60
            backdrop-blur
            p-10
            md:p-15
          "
        >
          <div className="grid md:grid-cols-[220px_1fr] gap-14 items-start pt-[3.5rem]">
            
            {/* IMAGE */}
            <div className="group">
              <img
                src="/images/profile_pic.jpg"
                alt="Stanley Mbhalati"
                className="
                  w-70
                  h-70
                  mt-20
                  object-cover
                  rounded-md
                  grayscale
                  group-hover:grayscale-0
                  transition
                  duration-300
                  ease-out
                  group-hover:scale-[1.02]
                  group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                "
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Profile <span className="text-neutral-400 font-medium">Overview</span>
              </h2>

              <p className="text-neutral-400 text-lg md:text-2xl leading-relaxed">
                <span className="text-white font-medium">
                  BIT Honours in Information Systems graduate
                </span>{" "}
                 with hands-on experience supporting<span className="text-white"> end-to-end software delivery</span> in{" "}
                <span className="text-white">hybrid Agile environments.</span> I work across requirements, configuration, 
                testing, deployment, and post-deployment support within <span className="text-white">enterprise and cloud-based systems,</span>
                collaborating with technical teams and business stakeholders to deliver practical solutions.
                {" "}
          
              </p>

        
              <p className="mt-4 text-neutral-400 leading-relaxetext-neutral-400 text-lg md:text-2xl leading-relaxed">
                I am comfortable working across{" "}
                <span className="text-white">technical, systems, and analytical tasks</span> and enjoy contributing to the 
                full lifecycle of solution delivery, while continuing to grow my capabilities in software development, 
                systems analysis, and enterprise technologies.
              </p>

              {/* TAGS */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base font-mono uppercase tracking-wider">
                {[
                  "SYSTEMS ANALYSIS",
                  "BUSINESS ANALYSIS",
                  "SOFTWARE DEVELOPMENT",
                  "API INTEGRATION",
                  "AUTOMATION & WORKFLOWS",
                  "Web Development (HTML, CSS, JavaScript, React)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="
                      border
                      border-neutral-700
                      px-4
                      py-2
                      text-neutral-300
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
