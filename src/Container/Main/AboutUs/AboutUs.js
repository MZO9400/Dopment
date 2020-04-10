import React from "react";
import Typewriter from "typewriter-effect/";
import CSS from "./AboutUs.module.css";

export default props => (
    <div className={CSS.main} ref={props.refr}>
        <h1>ABOUT THE DOPMENT</h1>
        <div className={CSS.mainAbout}>
            <div className={CSS.left}>
                <Typewriter
                    onInit={typewriter => {
                        typewriter
                            .typeString("Hello World!")
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString("We are DOPMENT")
                            .pauseFor(1000)
                            .deleteChars(8)
                            .typeString(" the future!")
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString("Your design")
                            .pauseFor(1000)
                            .deleteChars(6)
                            .typeString("idea")
                            .pauseFor(1000)
                            .deleteChars(4)
                            .typeString("thoughts")
                            .pauseFor(1000)
                            .typeString("... Our Implementation!")
                            .start();
                    }}
                    options={{loop: true}}
                />
            </div>
            <div className={CSS.right}>
                <h3>WHO WE ARE</h3>
                <h2>DOPMENT</h2>
                <h2>DEVELOPING DREAMS</h2>
                <p>
                    Dopment is a pioneer solution to all your software needs. Our 12 years
                    of dedication and a list of the happy global customer is what makes
                    Dopment own a reputable position in the market. We concentrate on the
                    company’s goals and purposes, market drifts, and evolving business
                    environment. If you are obsessed with the word “success” for your
                    business, we can help you attain that. Dopment believes that the
                    customer is the ultimate authority; therefore, our expert developers
                    are 24/7 available to assist you with the best service in the city.
                    So, if you are seeking for services falling in our expertise, Dopment
                    is your savior.
                </p>
            </div>
        </div>
    </div>
);
