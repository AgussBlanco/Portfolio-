import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { SoftSkills } from "./components/SoftSkills";
import { Languages } from "./components/Languages";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#07141a",
        color: "#e2eff8",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <SoftSkills />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
}
