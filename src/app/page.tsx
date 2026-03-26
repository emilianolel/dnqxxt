import React from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Impact } from "@/components/Impact";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { SideProjects } from "@/components/SideProjects";
import { Thinking } from "@/components/Thinking";
import { Interests } from "@/components/Interests";
import { Partial } from "@/components/Partial";
import { Contact } from "@/components/Contact";
import { FutureProjects } from "@/components/FutureProjects";
import { projects } from "@/content/projects";

export default function Home() {
  const completedProjects = projects.filter(p => p.status === "completed" && p.featured);
  
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Impact />
      <SideProjects projects={projects} />
      <Projects projects={completedProjects} />
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
