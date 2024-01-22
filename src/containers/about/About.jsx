import React from "react";
import image from "../../assets/Screenshot 2024-01-21 175735.png";
import "./about.css";

const About = () => {
  return (
    <div className="about-content">
      <div className="about-content_bg">
        <div className="about-content_left">
          <p className="about-content_left-label">
            OUR CUSTOMER SUCCESS PROMISE
          </p>
          <p className="about-content_left-headline">Instant Time to Value</p>
          <p className="about-content_left-body">
            Unleash the power of an automated demo library with a minimal
            effort: Demoboost supports you with all the hard work, allowing you
            to quickly capitalize on automated demo platform and increase your
            long-term value.
          </p>
          <ul className="about-content_left-list">
            <li className="about-content_left-list--item">
              <span>
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.99998 3.83337C4.93737 3.83337 0.833313 7.93743 0.833313 13C0.833313 18.0627 4.93737 22.1667 9.99998 22.1667C15.0626 22.1667 19.1666 18.0627 19.1666 13C19.1666 7.93743 15.0626 3.83337 9.99998 3.83337ZM14.3392 11.0893C14.6647 10.7639 14.6647 10.2362 14.3392 9.91079C14.0138 9.58535 13.4862 9.58535 13.1607 9.91079L8.74998 14.3215L6.83924 12.4108C6.5138 12.0853 5.98616 12.0853 5.66072 12.4108C5.33529 12.7362 5.33529 13.2639 5.66072 13.5893L8.16072 16.0893C8.48616 16.4147 9.0138 16.4147 9.33924 16.0893L14.3392 11.0893Z"
                    fill="#5951FF"
                  />
                </svg>
              </span>
              We build the demos for you even before you sign the contract.
            </li>
            <li className="about-content_left-list--item">
              <span>
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.99998 3.83337C4.93737 3.83337 0.833313 7.93743 0.833313 13C0.833313 18.0627 4.93737 22.1667 9.99998 22.1667C15.0626 22.1667 19.1666 18.0627 19.1666 13C19.1666 7.93743 15.0626 3.83337 9.99998 3.83337ZM14.3392 11.0893C14.6647 10.7639 14.6647 10.2362 14.3392 9.91079C14.0138 9.58535 13.4862 9.58535 13.1607 9.91079L8.74998 14.3215L6.83924 12.4108C6.5138 12.0853 5.98616 12.0853 5.66072 12.4108C5.33529 12.7362 5.33529 13.2639 5.66072 13.5893L8.16072 16.0893C8.48616 16.4147 9.0138 16.4147 9.33924 16.0893L14.3392 11.0893Z"
                    fill="#5951FF"
                  />
                </svg>
              </span>
              We support you throughout, no limits. At no additional cost.
            </li>
            <li className="about-content_left-list--item">
              <span>
                <svg
                  width="20"
                  height="23"
                  viewBox="0 0 20 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.99998 3.83337C4.93737 3.83337 0.833313 7.93743 0.833313 13C0.833313 18.0627 4.93737 22.1667 9.99998 22.1667C15.0626 22.1667 19.1666 18.0627 19.1666 13C19.1666 7.93743 15.0626 3.83337 9.99998 3.83337ZM14.3392 11.0893C14.6647 10.7639 14.6647 10.2362 14.3392 9.91079C14.0138 9.58535 13.4862 9.58535 13.1607 9.91079L8.74998 14.3215L6.83924 12.4108C6.5138 12.0853 5.98616 12.0853 5.66072 12.4108C5.33529 12.7362 5.33529 13.2639 5.66072 13.5893L8.16072 16.0893C8.48616 16.4147 9.0138 16.4147 9.33924 16.0893L14.3392 11.0893Z"
                    fill="#5951FF"
                  />
                </svg>
              </span>
              We share the best practice, playbooks & ideas.
            </li>
          </ul>
          <button className="about-content_left-button" type="submit">
            Book a Demo
          </button>
        </div>
        <div className="about-content_right">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
