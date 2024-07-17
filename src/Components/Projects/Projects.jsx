import React from "react";
import "./Projects.css";
import { FaCode } from "react-icons/fa";
import liveServer from "../../Images/liveServer.png";

export default function Projects({ name, img, code, livedemo }) {
  return (
    <div>
      <div
        className="Project__Main"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="flex-column">
          <div className="flex-column align-center project-tr">
            <div className="Project__Img__Div">
              <img src={img} alt="" className="Project__Img" />
            </div>
            <div>
              <h1 className="font-size-15 font-weight-500 margin-left-10">
                {name}
              </h1>
            </div>
          </div>

        

       

         
          <div className="flex-row justify-end code-icons gap-10">
            <a
              href={code}
              target="_blank"
              className="flex-row justify-center align-center txt-none color-white"
              style={{ width: "40px", backgroundColor:'black'  }}
            >
              <FaCode style={{ width: "100%"}} />
            </a>

            <a
              href={livedemo}
              target="_blank"
              className="flex-row justify-center align-center txt-none color-white"
              style={{ width: "40px", backgroundColor:'black'  }}
            >
              <img src={liveServer} alt="" style={{ width: "100%" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
