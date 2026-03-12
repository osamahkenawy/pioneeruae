import React from "react";
import { Link } from "react-router-dom";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";

import imageData from "../dataJson/galleryImgData.json";

const Gallery = () => {
  return (
    <>
      <CommonPageHero title={"Workshop"} />
      <div className="container">
        <div className="ak-height-75 ak-height-lg-80"></div>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "400",
              textTransform: "uppercase",
              color: "#333",
            }}
          >
            WORKSHOP
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#00aeef",
              margin: "15px auto 10px",
            }}
          ></div>
          <p style={{ color: "#999", fontSize: "16px" }}>
            One Stop Shop For Your Needs
          </p>
        </div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames={"gallery"}
        >
          {imageData?.map((image, index) => (
            <Link
              to={image.thumbnail}
              key={index}
              className={`item ${image.orientation}`}
            >
              <img src={image.thumbnail} alt={image.orientation} />
              <div className="frame gallery-hover-icon">
                <span>
                  <img src="/assets/img/icon/zoom.svg" alt="zoom" />
                </span>
              </div>
            </Link>
          ))}
        </LightGallery>
      </div>
    </>
  );
};

export default Gallery;
