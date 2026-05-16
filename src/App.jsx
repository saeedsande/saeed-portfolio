import ScrollProgress from "./components/ScrollProgress";

import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import AIAssistant from "./components/AIAssistant";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import GithubStats from "./sections/GithubStats";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative bg-[#050816] text-white overflow-hidden">

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Particle Background */}
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Hero />

      <About />

      <Skills />

      <Projects />

      <GithubStats />

      <Contact />

      {/* AI Assistant */}
      <AIAssistant />

    </div>
  );
}