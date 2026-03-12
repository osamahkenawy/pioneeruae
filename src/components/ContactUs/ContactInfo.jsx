import React from "react";

const branches = [
  {
    name: "ABU DHABI",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.8!2d55.27!3d25.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzI0LjAiTiA1NcKwMTYnMTIuMCJF!5e0!3m2!1sen!2sae!4v1600000000000!5m2!1sen!2sae",
  },
  {
    name: "DUBAI",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.23!3d25.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzEyLjAiTiA1NcKwMTMnNDguMCJF!5e0!3m2!1sen!2sae!4v1600000000001!5m2!1sen!2sae",
  },
  {
    name: "AL AIN",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0!2d55.76!3d24.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDEyJzM2LjAiTiA1NcKwNDUnMzYuMCJF!5e0!3m2!1sen!2sae!4v1600000000002!5m2!1sen!2sae",
  },
  {
    name: "SHARJAH",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0!2d55.40!3d25.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzI0LjAiTiA1NcKwMjQnMDAuMCJF!5e0!3m2!1sen!2sae!4v1600000000003!5m2!1sen!2sae",
  },
];

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "400",
            textTransform: "uppercase",
            color: "#333",
          }}
        >
          CONTACT
        </h2>
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#00aeef",
            margin: "15px auto 0",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "30px",
          marginBottom: "50px",
        }}
      >
        {branches.map((branch, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #eee",
              borderRadius: "4px",
              padding: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "10px",
                color: "#333",
              }}
            >
              {branch.name}
            </h3>
            <div
              style={{
                width: "100%",
                height: "2px",
                background: "#00aeef",
                marginBottom: "15px",
              }}
            ></div>
            <iframe
              src={branch.mapSrc}
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "4px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${branch.name} Map`}
            ></iframe>
            <div style={{ marginTop: "15px" }}>
              <p style={{ margin: "5px 0" }}>
                Hotline:{" "}
                <a
                  href="tel:80077799"
                  style={{ color: "#00aeef", textDecoration: "none" }}
                >
                  80077799
                </a>
              </p>
              <p style={{ margin: "5px 0" }}>
                Email{" "}
                <a
                  href="mailto:info@pioneeruae.com"
                  style={{ color: "#00aeef", textDecoration: "none" }}
                >
                  info@pioneeruae.com
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
