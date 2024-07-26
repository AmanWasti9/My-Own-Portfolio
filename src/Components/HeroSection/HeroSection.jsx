import React from "react";
import { Container } from "@mui/material";
import "./HeroSection.css";
import mypic from "../../Images/am1221.png";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <Container>
        <div className="flex-row m justify-center align-center">
          <div className="a">
            <motion.h1
              animate={{
                fontSize: "48px",
                color: "rgb(30, 29, 29)",
                WebkitTextStroke: "2px red",
                textStroke: "2px red",
                letterSpacing: "3px",
              }}
            >
              Syed Amanullah Wasti
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.4,
                  },
                },
              }}
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="motion-paragraph"

              >
                Fullstack Developer
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="motion-paragraph"

              >
                Problem Solver
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="motion-paragraph"

              >
                Aspiring AI Engineer
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="motion-paragraph"

              >
                Backend Specialist
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="motion-paragraph"

              >
                Creator
              </motion.p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ x: "-150vw" }}
              animate={{ x: 0 }}
              className="margin-top-30"
            >
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-20}
                duration={1000}
                className="flex-row justify-start align-center gap-10 txt-dec color-white cursor-pointer"
              >
                <a className="btn font-weight-500">Learn More</a>
              </ScrollLink>
            </motion.div>

            {/* Images for Social Media Icons */}
            <div className="flex-row gap-30 margin-top-30">
              <div className="wrapper">
                <div className="button">
                  <a
                    href="https://www.facebook.com/aman.wasti.7"
                    target="_blank"
                    className="txt-dec color-white"
                  >
                    <div className="icon">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    <span>Facebook</span>
                  </a>
                </div>
                <div className="button">
                  <a
                    href="https://www.instagram.com/wastiaman/"
                    target="_blank"
                    className="txt-dec color-white"
                  >
                    <div className="icon">
                      <i className="fab fa-instagram"></i>
                    </div>
                    <span>Instagram</span>
                  </a>
                </div>
                <div className="button">
                  <a
                    href="https://github.com/AmanWasti9"
                    target="_blank"
                    className="txt-dec color-white"
                  >
                    <div className="icon">
                      <i class="fa-brands fa-github"></i>
                    </div>
                    <span>GitHub</span>
                  </a>
                </div>
                <div className="button">
                  <a
                    href="https://www.linkedin.com/in/aman-wasti/"
                    target="_blank"
                    className="txt-dec color-white"
                  >
                    <div className="icon">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Home_image_div" data-aos="zoom-in">
            <img src={mypic} alt="Syed Amanullah Wasti" className="Home_img" />
          </div>
        </div>
      </Container>
    </div>
  );
}
