import React from "react";
import "./Skills.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Skills({ name, img, rating }) {
  const renderStars = () => {
    const stars = [];
    const maxRating = 5;
    const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest half

    for (let i = 1; i <= maxRating; i++) {
      let starClass;

      if (i <= roundedRating) {
        starClass = "fa-sharp fa-solid fa-star"; // Solid star
      } else if (i - 0.5 === roundedRating) {
        starClass = "fa-regular fa-star-half-stroke"; // Half-filled star
      } else {
        starClass = "fa-sharp fa-regular fa-star"; // Regular star
      }

      stars.push(<i key={i} className={starClass}></i>);
    }

    return stars;
  };

  return (
    <div>
      <div className="Skills__MySkills__1 transition-transform-1-1">
        <div className="flex-row gap-30">
          <div className="Skills__MySkills__1_1" data-aos="fade-right">
            <img
              src={img}
              alt="Syed Amanullah Wasti"
              className="Skills__MySkills__1_1_img"
            />
          </div>
          <div className="Skills__MySkills__1_2">
            <div className="flex-column">
              <div className="Skills__MySkills__1_2_h2">
                <h3 data-aos="fade-up">{name}</h3>
              </div>
              <div className="Skills__MySkills__1_2_stars" data-aos="zoom-in">
                {renderStars()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
