import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { projects } from "@/content/projects";

const Experience = dynamic(() => import("@/components/Experience").then(m => m.Experience));
const Stack = dynamic(() => import("@/components/Stack").then(m => m.Stack));
const Projects = dynamic(() => import("@/components/Projects").then(m => m.Projects));
const Thinking = dynamic(() => import("@/components/Thinking").then(m => m.Thinking));
const Interests = dynamic(() => import("@/components/Interests").then(m => m.Interests));
const Partial = dynamic(() => import("@/components/Partial").then(m => m.Partial));
const Contact = dynamic(() => import("@/components/Contact").then(m => m.Contact));
const FutureProjects = dynamic(() => import("@/components/FutureProjects").then(m => m.FutureProjects));

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Impact />
      <Projects projects={projects} />
      <Experience />
      <Interests />
      <Partial />
      <Stack />
      <Thinking />
      <FutureProjects />
      <Contact />
    </main>
  );
}
