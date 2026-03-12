import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    icon: "/assets/img/icon/service-icon-1.svg",
    title: "Mechanical Repairs",
    desc: "Professional mechanical repairs with qualified technicians using the latest diagnostic tools and equipment.",
    link: "services-single.html",
  },
  {
    id: 2,
    icon: "/assets/img/icon/service-icon-2.svg",
    title: "Computerised Paint Mixing",
    desc: "Advanced computerised paint mixing technology for perfect color matching and high-quality finishes.",
  },
  {
    id: 3,
    icon: "/assets/img/icon/service-icon-3.svg",
    title: "Bodyshop",
    desc: "Complete bodyshop services including collision repair, dent removal, and body panel replacement.",
  },
  {
    id: 4,
    icon: "/assets/img/icon/service-icon-4.svg",
    title: "Parking for customers",
    desc: "Convenient parking facilities available for all our customers at each location.",
  },
  {
    id: 5,
    icon: "/assets/img/icon/service-icon-5.svg",
    title: "Tyre change and Wheel Alignment",
    desc: "Expert tyre change services and precision wheel alignment to ensure optimal vehicle performance and safety.",
  },
  {
    id: 6,
    icon: "/assets/img/icon/service-icon-6.svg",
    title: "Electronic Diagnostic repairs",
    desc: "State-of-the-art electronic diagnostic equipment for accurate fault detection and efficient repairs.",
  },
];

function DedicatedServices() {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="container">
        <SectionHeading
          type={true}
          bgText="SERVICES"
          title="DEDICATED SERVICES"
          desp="Pioneer Car Service Center offers a full range of automotive services delivered by qualified professionals using the latest infrastructure and tools."
        />
        <div className="ak-height-50 ak-height-lg-50"></div>

        <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
          {servicesData.map((service) => (
            <div className="col" key={service.id}>
              <div className="service-card-style-2 type-two" data-aos="fade-up">
                <div className="service-icon">
                  <img src={service.icon} alt="service-icon" />
                </div>
                <div className="service-desp">
                  <Link to={`/service-single/${service.id}`} className="title">
                    {service.title}
                  </Link>
                  <p className="desp">{service.desc}</p>
                  <div className="view-more-btn">
                    <Link
                      to={`/service-single/${service.id}`}
                      className="more-btn"
                    >
                      VIEW MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DedicatedServices;
