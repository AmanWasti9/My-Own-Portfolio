import React from "react";
import { Container } from "@mui/material";
import "./HeroSection.css";
// import mypic from "../../Images/mypic.png";
import mypic from "../../Images/am1221.png";
// import mypic from "../../Images/pic.png";
import CV from "../../Cv/Amanullah_CV.pdf";

export default function Hero() {
  return (
    <div className="margin-top-150">
      <Container>
        <div className="flex-row m justify-center align-center">
          <div className="a">
            <h2 className="color-red font-size-30 font-weight-500">I am</h2>
            <h1 className="font-size-50" data-aos="fade-right">
              Syed Amanullah Wasti
            </h1>

            <div className="con_for_animation">
              <h2 className="color-red font-size-30 font-weight-600 tw_txt_ani">
                Full Stack Web Developer ..
              </h2>
            </div>

            <h3 className="font-size-18 font-weight-500" data-aos="fade-left">
              I am a full-stack web developer with skills and expertise in
              creating and designing websites, as well as a proficiency in
              various other aspects of full-stack development.
            </h3>
            {/* About Me Button */}
            <div className="margin-top-50" data-aos="fade-right">
              <a
                href={CV}
                download="Amanullah_CV"
                className="btn font-weight-500"
              >
                View Resume
              </a>
            </div>
            {/* Images for Social Media Icons */}
            <div className="flex-row gap-30 margin-top-50">
              <div className="wrapper">
                <div className="button">
                  <a href="https://www.facebook.com/aman.wasti.7" target="_blank" className="txt-dec color-white">
                    <div className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="button">
                  <a href="https://www.instagram.com/wastiaman/" target="_blank" className="txt-dec color-white">
                    <div className="icon">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <span>Instagram</span>
                  </a>
                </div>
                <div className="button">
                  <a href="https://github.com/AmanWasti9" target="_blank" className="txt-dec color-white">
                    <div className="icon">
                      <i class="fa-brands fa-github"></i>
                    </div>
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="button">
                  <a href="https://www.linkedin.com/in/aman-wasti/" target="_blank" className="txt-dec color-white">
                    <div className="icon">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Home_image_div" data-aos="fade-right">
            <img src={mypic} alt="" className="Home_img" />
          </div>
        </div>
      </Container>
    </div>
  );
}
