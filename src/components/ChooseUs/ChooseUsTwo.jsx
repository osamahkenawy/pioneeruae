import React from "react";

const chooseUsData = {
  sectionTitle: "Why Choose Us",
  sectionSubtitle:
    "The workshops are located in prime locations and equipped with the latest infrastructure, tools and equipments and qualified personnel to ensure that all customers receive the best quality of service,and the highest levels of customer satisfaction.",
  backgroundText: "Feature",
  features: [
    "Qualified Technicians",
    "Latest Infrastructure & Tools",
    "Multiple Location Coverage",
    "Corporate & Individual Service",
  ],
  buttonText: "View More",
  buttonLink: "/about",
  mainImage: "/assets/img/chooseus/choose-us_2.png",
  circleImage: "assets/img/Circle.png",
};

const ChooseUsTwo = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>

      <section className="container">
        <div className="choose-us-contain style_three">
          {/* === Left Side === */}
          <div className="choose-us-info" data-aos="fade-up">
            <div className="ak-section-heading ak-style-1">
              <div className="background-text">
                {chooseUsData.backgroundText}
              </div>
              <h2 className="ak-section-title">{chooseUsData.sectionTitle}</h2>
              <p className="ak-section-subtitle">
                {chooseUsData.sectionSubtitle}
              </p>
            </div>

            <div className="ak-height-60 ak-height-lg-30"></div>

            <div className="stroke-heading-text">
              {chooseUsData.features.map((feature, index) => (
                <h3 key={index} className="ak-stroke-text hover-color-changes">
                  {feature}
                </h3>
              ))}
            </div>

            <div className="ak-height-60 ak-height-lg-30"></div>

            <a href={chooseUsData.buttonLink} className="common-btn">
              {chooseUsData.buttonText}
            </a>
          </div>

          {/* === Right Side Image === */}
          <div
            className="choose-us-img"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src={chooseUsData.mainImage} alt="Choose Us" loading="lazy" />
            <img
              className="circle-img"
              src={chooseUsData.circleImage}
              alt="Decorative Circle"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUsTwo;
