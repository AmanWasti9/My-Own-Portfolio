import React from "react";
import { Container } from "@mui/material";
import AboutMeDesign1 from "./AboutMeDesign1";
import AboutMeDesign2 from "./AboutMeDesign2";
import CV from "../../Cv/Amanullah_CV.pdf";

export default function AboutMe() {
  return (
    <div id="about">
      <Container>
        <div>
          <h1 className="text-center margin-top-50 font-size-50 font-weight-500">
            About
          </h1>
          <AboutMeDesign1
            source="/Video/frontend.mp4"
            heading="Frontend"
            para="Passionate frontend developer skilled in HTML, CSS, JavaScript, React, and modern design principles, and an aspiring AI engineer with a keen interest in machine learning, data analysis, and developing intelligent solutions."
            // For Buttons
            LinkToBeOpen={CV}
            BtnName="Resume"
          />
          <AboutMeDesign2
            source="/Video/Database.mp4"
            heading="Backend"
            para="Backend developer skilled in Java, Spring Boot, MySQL, and API development."
            // For Buttons
            LinkToBeOpen="https://www.linkedin.com/in/aman-wasti/"
            BtnName="Linked In"
          />
        </div>
      </Container>
    </div>
  );
}
