import React from "react";
import { MoreBtn } from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

import servicesData from "../../dataJson/servicesData.json";

const ServicesSection = ({ styleTypeTwo }) => {
  const data = styleTypeTwo ? servicesData.slice(0, 3) : servicesData;

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container">
          <div className="content style_2">
            <div className="service">
              {data.map((item) => (
                <div
                  className="service-card"
                  data-aos="fade-left"
                  key={item.id}
                >
                  <Link to={`/service-single/${item.id}`} className="card-img">
                    <img src={`${item.img}`} className="ak-bg" alt="..." />
                  </Link>
                  <div className="card-info">
                    <Link
                      to={`/service-single/${item.id}`}
                      className="card-title"
                    >
                      {item.title}
                    </Link>
                    <p className="card-desp">{item.desp}</p>
                    <MoreBtn to={`/service-single/${item.id}`}>
                      VIEW MORE
                    </MoreBtn>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar width-none">
            <div className="services-content">
              <SectionHeading
                bgText={"Services"}
                title={"Our Services"}
                desp={
                  "Pioneer Car Service Center Sole Proprietorship L.L.C is managed by a team of qualified professionals having unparalleled level of local and international experience. The company provides the complete range of services required by customers to keep their vehicles in perfect condition. All technical staff undergo regular trainings to ensure that all services provided meet the manufacturer's specification and standards."
                }
              />
              <div className="ak-height-50 ak-height-lg-10"></div>
              <MoreBtn to="/service">VIEW All SERVICES</MoreBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
