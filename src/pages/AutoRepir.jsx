import React from "react";
import AutoRepairHeroSlider from "../components/Sliders/AutoRepairHeroSlider";
import ServiceProgres from "../components/Services/ServiceProgres";
import ChooseUsTwo from "../components/ChooseUs/ChooseUsTwo";
import Services from "../components/Services/ServicesSection";
// import TeamDetailsSlider from "../components/Team/TeamDetailsSlider";
import AutoCounter from "../components/AutoCounter/AutoCounter";
import Testimonial from "../components/Testimonial/Testimonial";
// import MemberContent from "../components/Team/MemberContent";
// import PricingAutoRepair from "../components/Pricing/PricingAutoRepair";
import BlogNews from "../components/Blog/BlogNews";
import Videos from "../components/VideoPopUp/Videos";
import TrustedClient from "../components/TrustedClient/TrustedClient";
import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
import ExpertService from "../components/ChooseUs/ExpertService";

const AutoRepair = () => {
  return (
    <>
      <AutoRepairHeroSlider />
      <ServiceProgres />
      <ChooseUsTwo />
      <Services styleTypeTwo={true} />
      <ExpertService />
      <AutoCounter styleTwo={true} />
      <Testimonial styleThree={true} />
      <BlogNews />
      <Videos videoId={"VcaAVWtP48A"} />
      {/* <TrustedClient /> */}
      <AppointmentForm styleTwo={true} />
    </>
  );
};

export default AutoRepair;
