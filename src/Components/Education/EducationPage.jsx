import React from "react";
import Education from "./Education";
import { Container } from "@mui/material";
import "./EducationPage.css";
import { IoMdSchool } from "react-icons/io";

export default function EducationPage() {
  return (
    <div>
      <Container>
        <div
          id="education"
          className="flex-row justify-center align-center gap-10 txt-dec color-white cursor-pointer"
        >
          <div className="font-size-80 margin-top-10">
            <IoMdSchool />
          </div>
          <div>
            <p className="font-size-50 font-weight-500">Education</p>
          </div>
        </div>

        <div className="margin-top-50 mobile-ver-edu-page">
          <Education
            schoolName="DHA Suffa University"
            degName="Bachelor of Science (B.S) – Computer Science"
            Grade="CGPA : 3.38 *"
          />
          <Education
            schoolName="Govt. Degree College"
            degName="Intermediate (H.S.C) – Pre - Engineering"
            Grade="Grade : A"
          />
          <Education
            schoolName="Student Academy School"
            degName="Matriculation (B.S.E) – Computer Science"
            Grade="Grade : A - ONE"
          />
        </div>

        <div className="laptop-ver-edu-page">
          <div className="margin-top-70 flex-row space-between edu-page">
            <div className="edu-page_div1">
              <Education
                schoolName="Student Academy School"
                degName="Matriculation (B.S.E) – Computer Science"
                Grade="Grade : A - ONE"
              />
            </div>
            <div className="edu-page_div2">
              <Education
                schoolName="DHA Suffa University"
                degName="Bachelor of Science (B.S) – Computer Science"
                Grade="CGPA : 3.38 *"
              />
            </div>
          </div>
          <div className="flex-column line-center-main">
            <div className="flex-row space-between margin-top-20 margin-15-bh">
              <div className="trig-shape"></div>
              <div className="trig-shape"></div>
            </div>
            <div className="Edu__center__line margin-15-bh"></div>
            <div className="flex-row justify-center margin-bottom-20 margin-15-bh">
              <div className="trig-shape-reverse"></div>
            </div>
          </div>
          <div className="edu-page_div3 flex-row justify-center">
            <Education
              schoolName="Govt. Degree College"
              degName="Intermediate (H.S.C) – Pre - Engineering"
              Grade="Grade : A"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
