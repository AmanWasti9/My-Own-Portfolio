import React from "react";
import "./AboutMeSection.css";
import { Container } from "@mui/material";
import mark from "../../Images/mark.png";
import CV from "../../Cv/Amanullah_CV.pdf";

export default function AboutMeSection() {
  return (
    <div id="about">
      <Container>
        <h1 className="text-center margin-top-50 font-size-50 font-weight-500">
          About me
        </h1>
        <div className="flex-row AboutMe__Main gap-30 fc">
          <div className="containers" data-aos="fade-left">
            {/* <div className="circle__1">
            <div className="AboutMe__1_1 circle__1__content">
              <div className="AboutMe__1__imgBx">
              <img src={mypic} alt=""/>

              </div>
            </div>
            </div> */}
            
            <img src={mark} alt="" className="AboutMe__2__imgBx"/>
          </div>
          <div className="AboutMe__2">
            <p className="font-size-20 ap" data-aos="fade-right" style={{
              textAlign: "justify"
            }}>
              As a full-stack developer, I bring expertise in crafting robust
              web applications by seamlessly integrating Spring Boot for the
              backend and React.js for the frontend. My focus lies in delivering
              not only clean code and pixel-perfect designs but also in ensuring
              the efficient functionality of the entire application. I
              specialize in enhancing user interactivity through the integration
              of web animations, while prioritizing the implementation of
              responsive designs to guarantee accessibility across a diverse
              range of devices. With a steadfast commitment to precision and an
              unwavering dedication to an optimal user experience, I strive to
              create a visually appealing and functionally efficient online
              presence for your audience.
            </p>
            {/* Read More Button */}
            <div className="margin-top-50 bbtn" data-aos="fade-up">
              <a
                href={CV}
                download="Amanullah_CV"
                className="btn font-weight-500"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
