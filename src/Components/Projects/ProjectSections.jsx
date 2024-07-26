import { Container } from "@mui/material";
import React from "react";
import Projects from "./Projects";
import Grid from "@mui/material/Unstable_Grid2";
import BookWeb from "../../Images/bookweb.png";
import SneakerWeb from "../../Images/sneakerWeb.png";
import TextUtilsWeb from "../../Images/TextUtilsWeb.png";
import ExpenseTrackerWeb from "../../Images/ExpenseTrack.png";
import CovidTrackerWeb from "../../Images/covidtrack.png";
import samplePortfolio from "../../Images/samplePortfolio.png";
import blog from "../../Images/blog.png";

export default function ProjectSections() {
  return (
    <div id="projects">
      <Container>
        <div>
          <h1 className="text-center margin-top-50 font-size-50 font-weight-500">
            Projects
          </h1>
          <br />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={6} md={4}>
              <Projects
                name="Sneakers Ecommerce Website - React Js"
                img={SneakerWeb}
                code="https://github.com/AmanWasti9/shoe-store"
                livedemo="https://sneaker-store-pi.vercel.app/"
              />
            </Grid>
            <Grid xs={6} md={4}>
              <Projects
                name="Bloging Website - React Js | Spring Boot | MySQL"
                img={blog}
                code="https://github.com/AmanWasti9/Blogging-App-Frontend"
                livedemo="https://beacon-liard.vercel.app/"
              />
            </Grid>
            <Grid xs={6} md={4}>
              <Projects
                name="Book E-commerce Website - HTML | CSS | JS"
                img={BookWeb}
                code="https://github.com/AmanWasti9/Book-Website"
                livedemo="https://amanwasti9.github.io/Book-Website/"
              />
            </Grid>

            <Grid xs={6} md={4}>
              <Projects
                name="COVID19 Tracker - React Js"
                img={CovidTrackerWeb}
                code="https://github.com/AmanWasti9/COVID-Tracker-React"
                livedemo="https://covid19-tracker-orpin-sigma.vercel.app/"
              />
            </Grid>
            <Grid xs={6} md={4}>
              <Projects
                name="Expense Tracker - React Js"
                img={ExpenseTrackerWeb}
                code="https://github.com/AmanWasti9/Expense-Track-React"
                livedemo="https://amanwasti9.github.io/Expense-Track-React/"
              />
            </Grid>
            <Grid xs={6} md={4}>
              <Projects
                name="TextUtils - React Js"
                img={TextUtilsWeb}
                code="https://github.com/AmanWasti9/TextUtils"
                livedemo="https://amanwasti9.github.io/TextUtils/"
              />
            </Grid>
            <Grid xs={6} md={4}>
              <Projects
                name="Sample Portfolio Website - HTML | CSS | JS"
                img={samplePortfolio}
                code="https://github.com/AmanWasti9/Portfolio"
                livedemo="https://amanwasti9.github.io/Portfolio/"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
