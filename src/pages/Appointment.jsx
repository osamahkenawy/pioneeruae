import React from "react";

import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const Appointment = () => {
  return (
    <>
      <CommonPageHero title={"Appointment"} />
      <AppointmentForm />
      <div className="ak-height-125 ak-height-lg-80"></div>

      <SectionHeading
        type={true}
        bgText={"PROCESS"}
        title={"PROCESS / FEATURE"}
        desp={
          "Our streamlined process ensures your vehicle receives the best care from initial booking through to completion. We follow a systematic approach for every service."
        }
      />
      <ServiceProgres />
    </>
  );
};

export default Appointment;
