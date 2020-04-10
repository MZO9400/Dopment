import React from "react";
import CSS from "./AboutUs.module.css";

export default props => (
    <div className={CSS.main} ref={props.refr}>
        <h1>ABOUT THE DOPMENT</h1>
        <div className={CSS.mainAbout}>
            <div className={CSS.left}/>
            <div className={CSS.right}>
                <h3>WHO WE ARE</h3>
                <h2>DOPMENT</h2>
                <h2>DEVELOPING DREAMS</h2>
                <p>
                    Dopment is a pioneer solution to all your software needs. Our  dedication
                    and a list of the happy global customers is what makes
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
