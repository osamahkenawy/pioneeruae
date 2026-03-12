import React from "react";
const serviceData = {
  title: "Get expert car repair and auto services for a smooth, safe ride.",
  description:
    "Pioneer Car Service Center provides multi-brand workshop services catering to corporate fleets and individual vehicles, delivering high quality products and services at competitive prices across UAE.",
  buttonText: "VIEW MORE",
  buttonLink: "/appointment",
};

const ExpertService = () => {
  return (
    <>
      <div className="ak-height-75 ak-height-lg-50"></div>
      <div className="container">
        <div className="play-slider-heading">
          <div className="heading-area">
            <h3 className="title">{serviceData.title}</h3>
          </div>
          <div className="desp-area">
            <p className="desp">{serviceData.description}</p>
            <a href={serviceData.buttonLink} className="common-btn type-1">
              {serviceData.buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertService;
