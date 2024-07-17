import React from "react";
import "./Education.css";
import { Container } from "@mui/material";

export default function Education({ schoolName, degName, Grade }) {
  const LaptopEducationSection = (
    <div>
      <div className="Edu__Div2_Main transition-transform-1-1 padding-10" data-aos="zoom-in">
        <div className="Edu__Div2_1">
          <div className="Edu__Div2_h2">
            <h2 className="font-size-20 font-weight-500" data-aos="fade-up">{schoolName}</h2>
          </div>
          <div className="Edu__Div2_p">
            <p className="font-size-18" data-aos="fade-up">{degName}</p>
          </div>
          <div className="Edu__Div2_p">
            <p className="font-size-18" data-aos="fade-up">{Grade}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const mobileEducationSection = (
    <div>
      <div className="flex-row gap-30 justify-center align-center margin-right-30">
        <div className="Edu__Div1">
          <div className="Edu__Div1_circle"></div>
          <div className="Edu__Div1_line"></div>
        </div>
        <div className="Edu__Div2_Main_Mobile transition-transform-1-1" data-aos="zoom-in">
          <div className="Edu__Div2_1_Mobile padding-10-10" data-aos="zoom-in">
            <div className="Edu__Div2_h2">
              <h2 className="font-size-20 font-weight-500" data-aos="fade-up">
              {schoolName}
              </h2>
            </div>
            <div className="Edu__Div2_p">
              <p className="font-size-18" data-aos="fade-up">
              {degName}
              </p>
            </div>
            <div className="Edu__Div2_p">
              <p className="font-size-18" data-aos="fade-up">{Grade}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Container>
      <div className="Edu-laptop-version">{LaptopEducationSection}</div>
      <div className="Edu-mobile-version">{mobileEducationSection}</div>
      </Container>
      </div>
  );
}
