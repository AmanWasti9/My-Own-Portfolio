import React from "react";
import Hero from "../../Components/HeroSection/HeroSection";
import SkillsSection from "../../Components/Skills/SkillsSection";
import ProjectSections from "../../Components/Projects/ProjectSections";
import AboutMe from "../../Components/AboutMe/AboutMe";

export default function HomePage() {
  return (
    <div id="top">
      <Hero />
      <br />
      <AboutMe />
      <br />
      <SkillsSection />
      <br />
      <ProjectSections />
    </div>
  );
}
