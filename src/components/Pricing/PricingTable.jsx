import React from "react";
import PricingCard from "./PricingCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const pricingData = [
  {
    title: "Total Car Care",
    discountPrice: "$299.99",
    mainPrice: "$399.99",
    options: [
      "Performance Tuning",
      "Exhaust System Installation",
      "Performance Brake Upgrade",
      "Interior Exterior Detailing",
    ],
    isActive: false,
    aosDelay: 0,
  },
  {
    title: "Performance Enhancement",
    discountPrice: "$599.99",
    mainPrice: "$899.99",
    options: [
      "Performance Tuning",
      "Exhaust System Installation",
      "Performance Brake Upgrade",
      "Interior Exterior Detailing",
    ],
    isActive: true,
    aosDelay: 50,
  },
  {
    title: "Fleet Maintenance",
    discountPrice: "$399.99",
    mainPrice: "$499.99",
    options: [
      "Performance Tuning",
      "Exhaust System Installation",
      "Performance Brake Upgrade",
      "Interior Exterior Detailing",
    ],
    isActive: false,
    aosDelay: 100,
  },
];

const PricingTable = ({ type, styleTwo }) => {
  return (
    <>
      {type ? (
        <div className="ak-height-75 ak-height-lg-75"></div>
      ) : (
        <div className="ak-height-160 ak-height-lg-80"></div>
      )}
      <div className={`ak-bg ${!styleTwo ? "pricing-section-bg-img" : ""}`}>
        {!styleTwo && <div className="ak-height-100 ak-height-lg-50"></div>}
        <div className="container">
          {type || (
            <>
              <SectionHeading
                type={true}
                bgText="Pricing"
                title="Pricing"
                desp="Explore our competitive service packages designed to keep your vehicle in peak condition. Quality care at transparent prices across all UAE locations."
              />
              <div className="ak-height-50 ak-height-lg-50"></div>
            </>
          )}

          <div className="pricing">
            {pricingData.map((data, index) => (
              <PricingCard
                key={index}
                title={data.title}
                discountPrice={data.discountPrice}
                mainPrice={data.mainPrice}
                options={data.options}
                isActive={data.isActive}
                aosDelay={data.aosDelay}
              />
            ))}
          </div>
        </div>
        {!styleTwo && <div className="ak-height-100 ak-height-lg-80"></div>}
      </div>
    </>
  );
};

export default PricingTable;
