import React from "react";
import HeroSliderTwo from "../components/Sliders/CarWorkshopHeroSlider";
import ServiceProgressCard from "../components/ServiceProgres/ServiceProgressCard";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import DedicatedServices from "../components/Services/DedicatedServices";
import AutoCounter from "../components/AutoCounter/AutoCounter";
import TrustedClient from "../components/TrustedClient/TrustedClient";

import Videos from "../components/VideoPopUp/Videos";
// import PricingTable from "../components/Pricing/PricingTable";
import Blogs from "../components/Blog/Blogs";
import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
// import MemberContent from "../components/Team/MemberContent";
import Testimonial from "../components/Testimonial/Testimonial";

const CarWorkshop = () => {
  return (
    <>
      <HeroSliderTwo />
      <ServiceProgressCard />
      <ChooseUs styleTwo={true} />
      <DedicatedServices />
      <AutoCounter styleTwo={true} />
      <Testimonial />
      {/* <TrustedClient /> */}
      <Videos videoId={"VcaAVWtP48A"} />
      <Blogs styleTypeTwo={true} />
      <AppointmentForm />
    </>
  );
};

export default CarWorkshop;
