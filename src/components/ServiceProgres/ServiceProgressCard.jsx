import React from "react";

const services = [
  {
    title: "PERFORMANCE CHECK",
    description:
      "Comprehensive vehicle performance diagnostics using state-of-the-art computerised equipment to ensure your car runs at its best.",
    imgSrc: "/assets/img/icon/speedome.svg",
    link: "#",
  },
  {
    title: "AUTO REPAIR",
    description:
      "Expert automotive repair services by qualified technicians following manufacturer specifications for all vehicle makes and models.",
    imgSrc: "/assets/img/icon/car-repair.svg",
    link: "#",
  },
  {
    title: "FLEET SERVICES",
    description:
      "Dedicated fleet management and maintenance solutions for corporate clients, ensuring minimal downtime and maximum reliability.",
    imgSrc: "/assets/img/icon/car.svg",
    link: "#",
  },
];

const ServiceProgressCard = () => {
  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-xl-3 g-4 service-progress-card-position-changes">
        {services.map((service, index) => (
          <div key={index} className="service-progress-card style-two">
            <div className="service-item">
              <div className="heartbeat-icon">
                <a href={service.link}>
                  <span className="ak-heartbeat-btn">
                    <img src={service.imgSrc} alt={service.title} />
                  </span>
                </a>
              </div>
              <div className="service-info">
                <h4 className="title">{service.title}</h4>
                <p className="desp">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProgressCard;
