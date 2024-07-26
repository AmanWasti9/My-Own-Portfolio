import { Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Skills from "./Skills";
import ReactIcon from "../../Images/ReactIcon.png";
import DsaIcon from "../../Images/DsaIcon.png";
import HtmlIcon from "../../Images/HtmlIcon.png";
import JavaIcon from "../../Images/JavaIcon.png";
import JsIcon from "../../Images/JsIcon.png";
import SpringIcon from "../../Images/SpringIcon.png";
import CssIcon from "../../Images/CssIcon.png";
import MySQLIcon from "../../Images/MySQLIcon.png";
import MaterialUiIcon from "../../Images/MaterialUiIcon.png";
import BootStrapIcon from "../../Images/BootStrapIcon.png";
import GitIcon from "../../Images/GitIcon.png";

export default function SkillsSection() {
  return (
    <div id="skill">
      <center>
        <Container>
          <div>
            <h1 className="text-center margin-top-50 font-size-50 font-weight-500">
              Skills
            </h1>
            <br />
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid xs={6} md={4}>
                <Skills name="React Js" rating={4.5} img={ReactIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="HTML5" rating={5} img={HtmlIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="CSS" rating={5} img={CssIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="JAVA" rating={4} img={JavaIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="JavaScript" rating={4} img={JsIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="Spring Boot" rating={3.5} img={SpringIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="DSA" rating={3} img={DsaIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="MySQL" rating={3.5} img={MySQLIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="Material UI" rating={5} img={MaterialUiIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="BootStrap" rating={5} img={BootStrapIcon} />
              </Grid>
              <Grid xs={6} md={4}>
                <Skills name="Git/GitHub" rating={5} img={GitIcon} />
              </Grid>
            </Grid>
          </div>
        </Container>
      </center>
    </div>
  );
}
