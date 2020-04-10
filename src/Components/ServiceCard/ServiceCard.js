import React from "react";
import CSS from "./ServiceCard.module.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Marquee from "../Marquee/Marquee";

const getRandomRolor = () => {
    var letters = "01234567".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 10)];
    }
    return color;
};
const openIfLink = (link) => {
    if (link) {
        window.open(link, "_blank");
    }
}
export default props => (
    <div className={CSS.main} onClick={() => openIfLink(props.link)}>
        <div className={CSS["image-box"]}>
            <img src={props.image} alt={""}/>
            <div
                className={CSS.overlay}
                style={{
                    backgroundColor: getRandomRolor()
                }}
            >
                <div className={CSS.hoveringText}>
                    <Marquee text={props.text}/>
                </div>
            </div>
        </div>
        <ScrollAnimation animateIn="fadeInDown">
            <div className={CSS.text}>
                <h4 style={{width: "auto"}}>{props.text}</h4>
            </div>
        </ScrollAnimation>
    </div>
);
