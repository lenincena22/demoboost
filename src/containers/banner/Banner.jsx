import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner-content">
      <div className="banner-content_frame-frame">
        <div className="banner-content_frame-text">
          <div className="banner-content_frame-test--heading">
            Join the demo experience revolution
          </div>
          <div className="banner-content_frame-test--description">
            Demos have come a long way from the traditional product demo video
            consumers were once familiar with. Learn how interactive software
            demos can showcase your product in all its glory, revolutionizing
            the way you sell and transforming the way your customers buy.{" "}
          </div>
        </div>
        <div className="banner-content_frame-button">
          <button type="submit">Book a Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
