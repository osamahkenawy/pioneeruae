import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { MoreBtn } from "../Button/Button";
import TeamCard from "./TeamCard";

const membersData = [
  {
    id: 1,
    name: "Darrell T. Beedle",
    title: "Lead Mechanic",
    image: "/assets/img/member/member_1.jpg",
    desp: "Expert automotive mechanic with over 15 years of experience in mechanical repairs, engine diagnostics, and periodic maintenance services.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/pioneer-car-service-center/",
      facebook: "https://www.facebook.com/PioneerCare/",
      twitter: "https://www.instagram.com/pioneercaremn/",
    },
    contact: {
      address: "Sharjah, UAE",
      email: "info@pioneeruae.com",
      phone: "80077799",
      website: "www.pioneeruae.com",
    },
  },
  {
    id: 2,
    name: "Michael Jack",
    title: "Service Advisor",
    image: "/assets/img/member/member_2.jpg",
    desp: "Dedicated service advisor ensuring every customer receives personalized attention and transparent guidance on their vehicle's service needs.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/pioneer-car-service-center/",
      facebook: "https://www.facebook.com/PioneerCare/",
      twitter: "https://www.instagram.com/pioneercaremn/",
    },
    contact: {
      address: "Dubai, UAE",
      email: "info@pioneeruae.com",
      phone: "80077799",
      website: "www.pioneeruae.com",
    },
  },
  {
    id: 3,
    name: "Cathy Sparkman",
    title: "Diagnostic Technician",
    image: "/assets/img/member/member_3.jpg",
    desp: "Specialist in computerised diagnostic services, using state-of-the-art equipment for accurate fault detection and efficient vehicle repairs.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/company/pioneer-car-service-center/",
      facebook: "https://www.facebook.com/PioneerCare/",
      twitter: "https://www.instagram.com/pioneercaremn/",
    },
    contact: {
      address: "Abu Dhabi, UAE",
      email: "info@pioneeruae.com",
      phone: "80077799",
      website: "www.pioneeruae.com",
    },
  },
];

const Teams = ({ styleTwo }) => {
  return (
    <div className="container">
      <div className="ak-height-190 ak-height-lg-80"></div>
      <div className="team-contant">
        <div className="team-heading" data-aos="fade-right">
          <SectionHeading
            bgText={"Team"}
            title={"Our Team"}
            desp={
              "Our team of certified technicians brings years of experience in automotive repair and maintenance across all major vehicle brands."
            }
          />
          <div className="ak-height-50 ak-height-lg-10"></div>
          <MoreBtn to={"/team"}>VIEW MORE</MoreBtn>
        </div>
        <div
          className="teams"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-md-3">
            {membersData?.map((member, index) => (
              <TeamCard key={index} member={member} delay={index * 50} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;
