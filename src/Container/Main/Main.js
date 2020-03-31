import React from "react";
import CSS from "./Main.module.css";
import Particles from "react-particles-js";
import particleConfig from "./Particles";
import ServiceCard from "./ServiceCard/ServiceCard";
import AboutUs from "./AboutUs/AboutUs";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Marquee from "../../Components/Marquee/Marquee";

export default class extends React.Component {
  render() {
    return (
      <div className={CSS.main}>
        <Particles
          params={particleConfig()}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%"
          }}
        />
        <div className={CSS.heading}>
          <h1>
            We shape brand identities and design digital experiences to help
            organizations innovate their business
          </h1>
        </div>
        <AboutUs />
        <Marquee text="About Us" link="/AboutUS" />
        <Marquee text="Get in touch" link="/ContactUS" />
      </div>
    );
  }
}
