import { useState } from "react";

const tabContents = [
  {
    title: "OUR SERVICES",
    description:
      "The workshops are located in prime locations and equipped with the latest infrastructure, tools and equipments and qualified personnel to ensure that all customers receive the best quality of service,and the highest levels of customer satisfaction.",
  },
  {
    title: "WELCOME TO OUR SITE",
    description:
      "Pioneer Car Service Center Sole Proprietorship L.L.C is one of the UAE's multi-brand workshop catering to corporate fleets and individual vehicle and delivering high quality products and services at competitive prices .With branches in Sharjah,Dubai,Abu Dhabi and Al Ain,Pioneer Car Service Center Sole Proprietorship L.L.C is well positioned to cater to the requirements of all customers in all the major emirates of UAE.",
  },
  {
    title: "History",
    description:
      "Pioneer Car Service Center has been serving the UAE automotive industry with dedication and expertise, building a reputation for quality and reliability across all major emirates.",
  },
];

const CompanyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="company-tab">
        <ul className="tabs">
          {tabContents?.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          <div className="list">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">About Company</div>
              <h3 className="desp">{tabContents[activeTab].description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
