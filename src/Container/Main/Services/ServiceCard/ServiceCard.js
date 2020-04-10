import React from "react";
import CSS from "./ServiceCard.module.css";

export default props => (
    <div className={CSS.main}>
        <h5>{props.heading}</h5>
        <p>{props.text}</p>
        <ul>
            {props.bullets.map((it, k) => (
                <li key={k}>{it}</li>
            ))}
        </ul>
    </div>
);
