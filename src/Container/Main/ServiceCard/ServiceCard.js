import React from "react";
import CSS from "./ServiceCard.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Marquee from "../../../Components/Marquee/Marquee";

const getRandomRolor = () => {
  var letters = "01234567".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 10)];
  }
  return color;
};

export default props => (
  <div className={CSS.main}>
    <div className={CSS["image-box"]}>
      <img src={props.image} alt={""} />
      <div
        className={CSS.overlay}
        style={{
          backgroundColor: getRandomRolor()
        }}
      >
        <div className={CSS.hoveringText}>
          <Marquee text={props.title} />
        </div>
      </div>
    </div>
    <ScrollAnimation animateIn="fadeInDown">
      <div className={CSS.text}>
        <h4 style={{ width: "auto" }}>{props.title}</h4>
        <p style={{ width: "auto" }}>{props.text}</p>
      </div>
    </ScrollAnimation>
  </div>
);
