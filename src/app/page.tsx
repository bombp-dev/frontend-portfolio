import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <main id="main-content" className="min-w-0 flex-1 overflow-x-clip" tabIndex={-1}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
