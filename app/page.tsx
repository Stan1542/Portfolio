import Hero from "./sections/hero"
import About from "./sections/about"
import Projects from "./sections/projects"
import Experiences from "./sections/experience"
import Education from "./sections/education"
import Skills from "./sections/skills"
import Contact from "./sections/contact"
import Certifications from "./sections/certfications"
import Updates from "./sections/updates"
import SectionDivider from "./sections/sectionDivider"


export default function Home() {
  return (
    <>
     <SectionDivider />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Experiences />
      <SectionDivider />
      <Education/>
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Updates />
      <Contact />
    </>
  )
}
