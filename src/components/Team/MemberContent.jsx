import React from "react";
import MemberCard from "./MemberCard";
import membersData from "../../dataJson/teamMembersData.json";
import SectionHeading from "../SectionHeading/SectionHeading";

const members = [
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

function MemberContent() {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <SectionHeading
        type={true}
        bgText="Pricing"
        title="Pricing"
        desp="Our skilled professionals are dedicated to providing top-quality automotive services across all Pioneer branches in the UAE."
      />
      <div className="ak-height-50 ak-height-lg-50"></div>
      <div className="all-members">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
          {members?.map((member, index) => (
            <MemberCard key={index} member={member} delay={index * 50} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberContent;
