import React from "react";
import CSS from "./Main.module.css";
import Particles from "react-particles-js";
import particleConfig from "./Particles";
export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Particles params={particleConfig()} style={{ position: "absolute" }} />
        <div className={CSS.mainText}>
          <h1>DOPMENT</h1>
        </div>
      </React.Fragment>
    );
  }
}
