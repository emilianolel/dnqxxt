import React from "react";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Thinking } from "@/components/Thinking";
import { Contact } from "@/components/Contact";
import { FutureProjects } from "@/components/FutureProjects";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Impact />
      <Projects projects={projects} />
      <Experience />
      <Stack />
      <Thinking />
      <FutureProjects />
      <Contact />
    </main>
  );
}
