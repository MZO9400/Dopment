import React from "react";
import { withRouter } from "react-router-dom";
import CSS from "./Nav.module.css";
import DOPMENT from "../../Images/DOPMENT.png";
export default withRouter(props => {
  let [navBtn, setNavBtn] = React.useState(false);
  return (
    <div className={CSS.nav}>
      <img src={DOPMENT} className={CSS.img} />
      <div className={CSS["nav-header"]}>
        <div className={[CSS.mainText, CSS["nav-title"]].join(" ")}>
          DOPMENT
        </div>
      </div>
      <div className={CSS["nav-btn"]} onClick={() => setNavBtn(!navBtn)}>
        <label>
          <span
            style={{
              transform: navBtn ? "rotate(135deg)" : ""
            }}
          ></span>
        </label>
      </div>
      <div className={[CSS["nav-links"], navBtn ? "" : CSS.display].join(" ")}>
        <li onClick={() => props.history.push("/")}>Home</li>
        <li onClick={() => props.history.push("/services")}>Services</li>
        <li onClick={() => props.history.push("/work")}>Work</li>
        <li onClick={() => props.history.push("/about-us")}>About</li>
        <li onClick={() => props.history.push("/contact-us")}>Contact</li>
      </div>
    </div>
  );
});
