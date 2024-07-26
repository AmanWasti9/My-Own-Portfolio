import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import "./Footer.css";
import LinkedIn from "../../Images/linkedin.png";
import Instagram from "../../Images/instagram.png";
import Facebook from "../../Images/facebook.png";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <div className="Footer_Main margin-top-50" id="footer">
      <Container>
        <br />
        <div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={12} sm={6} md={3}>
              <div className="flex-column">
              <br />

                <div className="Footer__1_h2">
                  <h2>Syed Amanullah Wasti</h2>
                  <span className="Footer__span"></span>
                </div>
                <div className="Footer__1_p">
                  <p>
                    Explore my innovative portfolio, where each project tells a
                    unique story.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className="flex-column">
              <br />

                <div className="Footer__1_h2">
                  <h2>Explore</h2>
                  <span className="Footer__span"></span>
                </div>
                <div className="Footer__1_list margin-top-10">
                  <ul className="list-none margin-0 padding-0">
                    <li>
                      <ScrollLink
                        to="skill"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={1000}
                        className="cursor-pointer"
                      >
                        Skills
                      </ScrollLink>
                    </li>

                    <li>
                      <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={1000}
                        className="cursor-pointer"
                      >
                        About
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={1000}
                        className="cursor-pointer"
                      >
                        Project
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-20}
                        duration={1000}
                        className="cursor-pointer"
                      >
                        Contact
                      </ScrollLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className="flex-column">
              <br />

                <div className="Footer__1_h2">
                  <h2>Explore GitHub</h2>
                  <span className="Footer__span"></span>
                </div>
                <div className="Footer__1_p">
                  <p>
                    Access my repositories and dive into the world of coding.
                  </p>
                </div>
                <div className="repo-btn margin-top-20">
                  <a
                    className="btn font-weight-500"
                    href="https://github.com/AmanWasti9?tab=repositories"
                    target="_blank"
                  >
                    View Repositories
                  </a>
                </div>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <div className="flex-column">
              <br />

                <div className="Footer__1_h2">
                  <h2>Contact Us</h2>
                  <span className="Footer__span"></span>
                </div>
                <div className="Footer__1_p">
                  <p>
                    <a
                      href="#."
                      style={{ textDecoration: "none", color: "#ff8d1e" }}
                    >
                      amanwasti5@gmail.com
                    </a>
                  </p>
                </div>
                <br />
                <div className="Footer__1_list">
                  <ul className="list-none margin-0 padding-0 flex-row gap-30">
                    <li>
                      <a
                        title="linkedIn"
                        target="_blank"
                        href="https://www.linkedin.com/in/aman-wasti/"
                      >
                        <img
                          alt="LinkedIn"
                          width="30"
                          height="30"
                          src={LinkedIn}
                          className="transition-all-0-4s"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        title="instagram"
                        target="_blank"
                        href="https://www.instagram.com/wastiaman/"
                      >
                        <img
                          alt="Instagram"
                          width="30"
                          height="30"
                          src={Instagram}
                          className="transition-all-0-4s"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        title="facebook"
                        target="_blank"
                        href="https://www.facebook.com/aman.wasti.7"
                      >
                        <img
                          alt="Facebook"
                          width="30"
                          height="30"
                          src={Facebook}
                          className="transition-all-0-4s"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
          <br />
          <div className="footer-copyright margin-top-50 padding-10-0">
            <div className="text-center">
              <p>
                <span style={{ color: "red" }}>&copy;</span> 2024{" "}
                <span style={{ color: "red" }}>Syed Amanullah Wasti</span> | All
                Rights Reserved | Crafted with passion and a touch of{" "}
                <span style={{ color: "red" }}>creativity</span>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
