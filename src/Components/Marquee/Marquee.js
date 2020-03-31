import React from "react";
import { withRouter } from "react-router-dom";
import CSS from "./Marquee.module.css";

export default withRouter(props => (
  <div className={CSS.container}>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => props.history.push(props.link)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
    <div
      className={CSS.scrolling}
      onClick={() => (props.link ? props.history.push(props.link) : null)}
      aria-hidden="true"
    >
      {props.text.toUpperCase()}
    </div>
  </div>
));
