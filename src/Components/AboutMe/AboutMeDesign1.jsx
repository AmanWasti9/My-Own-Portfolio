import React from "react";
import './AboutMeDesign.css';

export default function AboutMeDesign1({
  source,
  heading,
  para,
  LinkToBeOpen,
  BtnName,
}) {
  return (
    <div>
      <div
        className="flex-in-row About__Main"
        style={{
          gap: "30px",
        }}
      >
        <div data-aos="fade-right" className="about_video_div">
          <video loop autoPlay muted>
            <source src={source} type="video/mp4" alt="Syed Amanullah Wasti" />
          </video>
        </div>

        <div 
          className="about_text_div"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
          data-aos="fade-left"
        >
          {/* Heading */}
          <h2>{heading}</h2>

          {/* Paragraph */}
          <p
            className="font-size-20 ap"
            style={{
              textAlign: "justify",
            }}
          >
            {para}
          </p>

          {/* Button */}
          <a
            href={LinkToBeOpen}
            target="_blank"
            className="btn font-weight-500"
          >
            {BtnName}
          </a>
        </div>
      </div>
    </div>
  );
}
