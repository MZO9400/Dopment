import React from "react";
import CSS from "./Marquee.module.css";

export default props => (
  <div className={CSS.container} onClick={props.onClick}>
    <div className={CSS.scrolling}>{props.text.toUpperCase()}</div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
    <div className={CSS.scrolling} aria-hidden="true">
      {props.text.toUpperCase()}
    </div>
  </div>
);
