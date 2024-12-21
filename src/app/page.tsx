
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Services from "@/components/Services/services";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
