import React from 'react';
import Hero from '../../Components/HeroSection/HeroSection';
import SkillsSection from '../../Components/Skills/SkillsSection';
import AboutMeSection from '../../Components/AboutMe/AboutMeSection';
import ProjectSections from '../../Components/Projects/ProjectSections';
// import EducationPage from '../../Components/Education/EducationPage';


export default function HomePage() {
  return (
    <div  id="top">
      <Hero />
        <br/>
        <SkillsSection />
        <br />
        {/* <EducationPage /> */}
        <br />
        <AboutMeSection />
        <br />
        <ProjectSections />
    </div>
  );
}

