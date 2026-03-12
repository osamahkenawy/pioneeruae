import React from "react";

const servicesData = [
  {
    id: 1,
    number: "01",
    delay: "0",
    icon: "/assets/img/icon/speedome.svg",
    title: "PERFORMANCE CHECK",
    desp: "Comprehensive vehicle performance diagnostics using state-of-the-art computerised equipment to ensure your car runs at its best.",
  },
  {
    id: 2,
    number: "02",
    delay: "100",
    icon: "/assets/img/icon/car-repair.svg",
    title: "AUTO REPAIR",
    desp: "Expert automotive repair services by qualified technicians following manufacturer specifications for all vehicle makes and models.",
  },
  {
    id: 3,
    number: "03",
    delay: "150",
    icon: "/assets/img/icon/car.svg",
    title: "FLEET SERVICES",
    desp: "Dedicated fleet management and maintenance solutions for corporate clients, ensuring minimal downtime and maximum reliability.",
  },
];

const ServiceProgres = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <section className="container">
        <div className="row row-cols-1 row-cols-xl-3 g-4">
          {servicesData.map((item) => (
            <div
              className="service-progress-card style-three"
              data-aos="fade-up"
              data-aos-delay={item.delay}
              key={item.id}
            >
              <div className="progress-item">
                <h4 className="ak-stroke-number color-white">{item.number}</h4>
                <div className="ak-border-width"></div>
              </div>
              <div className="service-item">
                <div className="heartbeat-icon">
                  <a href="#">
                    <span className="ak-heartbeat-btn">
                      <img src={item.icon} alt={item.title} />
                    </span>
                  </a>
                </div>
                <div className="service-info">
                  <h4 className="title">{item.title}</h4>
                  <p className="desp">{item.desp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceProgres;
