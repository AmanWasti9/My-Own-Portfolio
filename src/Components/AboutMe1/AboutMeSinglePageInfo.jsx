import React from "react";
import { Container, Grid } from "@mui/material";
import mypic from "../../Images/mypic.png";

export default function AboutMeSinglePageInfo() {
  return (
    <div>
      <Container>
        <h1 className='text-center font-size-50 font-weight-500'>About me</h1>

        <Grid container>
          <Grid md={6} sm={6} xs={12} className="flex-row align-center">
            <p className="font-size-20 ap flex-row justify-center align-center margin-bottom-10">
              As a front-end web developer, I specialize in delivering clean
              code and pixel-perfect designs. My expertise extends to enhancing
              website interactivity through the seamless integration of web
              animations. I prioritize the implementation of responsive designs,
              ensuring that your website remains accessible to users across
              various devices. With a commitment to precision and user
              experience, I strive to create a visually appealing and
              functionally efficient online presence for your audience.
            </p>
          </Grid>
          <Grid
            md={6}
            sm={6}
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="containers margin-bottom-30">
              <div className="circle__1">
                <div className="AboutMe__1_1 circle__1__content">
                  <div className="AboutMe__1__imgBx">
                    <img src={mypic} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid md={12} sm={12} xs={12}>
            <p className="font-size-20 ap flex-row justify-center align-center">
              As a front-end web developer, I specialize in delivering clean
              code and pixel-perfect designs. My expertise extends to enhancing
              website interactivity through the seamless integration of web
              animations. I prioritize the implementation of responsive designs,
              ensuring that your website remains accessible to users across
              various devices. With a commitment to precision and user
              experience, I strive to create a visually appealing and
              functionally efficient online presence for your audience.
            </p>
            <p className="font-size-20 ap flex-row justify-center align-center">
              As a front-end web developer, I specialize in delivering clean
              code and pixel-perfect designs. My expertise extends to enhancing
              website interactivity through the seamless integration of web
              animations. I prioritize the implementation of responsive designs,
              ensuring that your website remains accessible to users across
              various devices. With a commitment to precision and user
              experience, I strive to create a visually appealing and
              functionally efficient online presence for your audience.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
